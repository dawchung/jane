import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import { webcrypto } from "node:crypto";

class FakeElement {
  constructor() {
    this.value = "";
    this.textContent = "";
    this.innerHTML = "";
    this.className = "";
    this.disabled = false;
    this.classList = { toggle() {}, add() {}, remove() {} };
  }
  addEventListener() {}
  append() {}
  remove() {}
  focus() {}
  scrollIntoView() {}
  closest() { return null; }
  querySelector() { return null; }
}

const elements = new Map();
const getElement = (selector) => {
  if (!elements.has(selector)) elements.set(selector, new FakeElement());
  return elements.get(selector);
};
const localData = new Map();
const context = {
  console,
  structuredClone,
  crypto: webcrypto,
  Blob,
  URL,
  Date,
  Map,
  Number,
  String,
  JSON,
  Math,
  setTimeout,
  clearTimeout,
  setInterval: () => 0,
  clearInterval() {},
  document: {
    querySelector: getElement,
    createElement: () => new FakeElement(),
    body: new FakeElement()
  },
  localStorage: {
    getItem: (key) => localData.get(key) || null,
    setItem: (key, value) => localData.set(key, value)
  },
  confirm: () => true,
  alert() {}
};
context.window = context;
context.window.APP_CONFIG = { sync: { provider: "local" } };
context.window.PRODUCT_IMAGES = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync("catalog.js", "utf8"), context);

const appSource = fs.readFileSync("app.js", "utf8") + `
globalThis.__appTest = {
  mergeState,
  reconcileSharedState,
  getPatientLimit,
  syncCurrentSessionToHistory,
  buildPeriodSummary,
  buildPeriodCsvRows,
  getLogsInRange,
  getYearRange,
  parseRosterText,
  maskPatientName,
  applyInitialRoster,
  addBalanceEntry,
  setState(value) { state = mergeState(value); normalizeState(); },
  getState() { return structuredClone(state); }
};`;
vm.runInContext(appSource, context);
await new Promise((resolve) => setTimeout(resolve, 0));

const test = context.__appTest;
const timestamp = "2026-09-14T12:00:00.000Z";
const common = {
  session: { date: "2026-09-14", budgetLimit: 100, monthlyAlertThreshold: 1000, updatedAt: timestamp },
  patients: [],
  historyLogs: [],
  balanceTransactions: []
};

const merged = test.reconcileSharedState(
  { ...common, activePatientId: "a", patients: [{ id: "a", bed: "P1-01", name: "甲", balance: 1000, shoppingLimit: 100, cart: [], updatedAt: timestamp }] },
  { ...common, patients: [{ id: "b", bed: "P1-02", name: "乙", balance: 1000, shoppingLimit: 200, cart: [], updatedAt: timestamp }] }
);
assert.equal(merged.patients.length, 2, "兩台裝置新增的不同病人應合併");
assert.equal(test.getPatientLimit(merged.patients.find((patient) => patient.id === "a")), 100);
assert.equal(test.getPatientLimit(merged.patients.find((patient) => patient.id === "b")), 200);

test.setState({
  ...common,
  activePatientId: "b",
  patients: [{
    id: "b", bed: "P1-02", name: "乙", balance: 1000, shoppingLimit: 200,
    cart: [{ name: "100元電話卡", price: 100, quantity: 1 }], updatedAt: timestamp
  }]
});
test.syncCurrentSessionToHistory();
let current = test.getState();
assert.equal(current.historyLogs.length, 1, "購物資料應寫入報表歷程");
assert.equal(current.historyLogs[0].totalAmount, 100);
assert.equal(current.historyLogs[0].patientTotals.length, 1);
const yearRange = test.getYearRange("2026");
const yearLogs = test.getLogsInRange(yearRange.start, yearRange.end);
const yearSummary = test.buildPeriodSummary(yearLogs);
const yearRows = test.buildPeriodCsvRows("年報", "2026", yearLogs, yearSummary);
assert.equal(yearSummary.totalAmount, 100, "年報應彙整當年度消費");
assert.equal(yearRows.some((row) => row[0] === "年報" && row[2] === "病人期間合計"), true);

const fakeForm = {
  querySelector(selector) {
    const values = {
      "#balance-entry-amount": { value: "500" },
      "#balance-entry-date": { value: "2026-09-14" },
      "#balance-entry-note": { value: "家屬存入" }
    };
    return values[selector];
  }
};
test.addBalanceEntry(fakeForm);
current = test.getState();
assert.equal(current.patients[0].balance, 1500, "零用金入帳應增加餘額");
assert.equal(current.balanceTransactions.length, 1, "零用金入帳應保留交易紀錄");

assert.equal(context.window.PRODUCTS.some((group) => group.category === "電話卡"), true);

const roster = test.parseRosterText(`
| 精一 | P1-01 |  |  |
| 精一 | P1-04 | 高X源 |  | 100 |
| 精一 | P1-10 | 黃X凱 |  | 200 |
`);
assert.equal(roster.length, 2, "空白姓名床位不應匯入");
assert.equal(roster.find((entry) => entry.bed === "P1-10").shoppingLimit, 200);
assert.equal(roster.find((entry) => entry.bed === "P1-04").balance, null);
assert.equal(roster.find((entry) => entry.bed === "P1-04").name, "高X源", "匯入時應自動隱去姓名中間字");
assert.equal(test.maskPatientName("王小明"), "王X明");

test.setState({
  ...common,
  patients: [{
    id: "existing-p1-10", bed: "P1-10", name: "黃X凱", balance: 5284, shoppingLimit: 100,
    cart: [{ name: "100元電話卡", price: 100, quantity: 1 }], updatedAt: timestamp
  }],
  rosterVersion: 0
});
assert.equal(test.applyInitialRoster(), true, "舊資料應執行一次名單移轉");
current = test.getState();
const migratedPatient = current.patients.find((patient) => patient.bed === "P1-10");
assert.equal(current.patients.length, 19, "應預先建立19位匿名病人");
assert.equal(migratedPatient.name, "黃X凱");
assert.equal(migratedPatient.balance, 5284, "既有零用金應保留");
assert.equal(migratedPatient.cart.length, 1, "既有購物清單應保留");
assert.equal(migratedPatient.shoppingLimit, 200, "黃X凱的個別上限應為200元");
console.log("smoke test passed");
