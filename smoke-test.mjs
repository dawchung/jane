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
  sessionStorage: {
    getItem: (key) => localData.get(`session:${key}`) || null,
    setItem: (key, value) => localData.set(`session:${key}`, value),
    removeItem: (key) => localData.delete(`session:${key}`)
  },
  confirm: () => true,
  alert() {}
};
context.window = context;
context.window.APP_CONFIG = { sync: { provider: "local" } };
context.window.AUTH_GATE = {
  ready: Promise.resolve(),
  isAdmin: () => true,
  getProfile: () => ({ display_name: "王護理師", role: "admin" }),
  logAction() {}
};
context.window.PRODUCT_IMAGES = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync("catalog.js", "utf8"), context);

const appSource = fs.readFileSync("app.js", "utf8") + `
globalThis.__appTest = {
  mergeState,
  reconcileSharedState,
  getPatientLimit,
  getPatientLimitTotal,
  syncCurrentSessionToHistory,
  buildPeriodSummary,
  buildPeriodCsvRows,
  getLogsInRange,
  getYearRange,
  parseRosterText,
  maskPatientName,
  applyInitialRoster,
  migrateToDailySessions,
  loadDailySession,
  addPatientToCurrentDate,
  saveCurrentDailySession,
  renderPrintSheet,
  buildDischargeSummary,
  renderDischargePrintSheet,
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
  patientDirectory: [],
  dailySessions: {},
  historyLogs: [],
  balanceTransactions: [],
  dataVersion: 2,
  rosterVersion: 1
};

const merged = test.reconcileSharedState(
  { ...common,
    activePatientId: "a",
    patientDirectory: [{ id: "a", bed: "P1-01", name: "甲", balance: 1000, shoppingLimit: 100, updatedAt: timestamp }],
    dailySessions: { "2026-09-14": { date: "2026-09-14", patients: [{ id: "a", bed: "P1-01", name: "甲", balance: 1000, shoppingLimit: 100, cart: [], updatedAt: timestamp }], updatedAt: timestamp } }
  },
  { ...common,
    patientDirectory: [{ id: "b", bed: "P1-02", name: "乙", balance: 1000, shoppingLimit: 200, updatedAt: timestamp }],
    dailySessions: { "2026-09-14": { date: "2026-09-14", patients: [{ id: "b", bed: "P1-02", name: "乙", balance: 1000, shoppingLimit: 200, cart: [], updatedAt: timestamp }], updatedAt: timestamp } }
  }
);
assert.equal(merged.patients.length, 2, "兩台裝置新增的不同病人應合併");
assert.equal(merged.patientDirectory.length, 2, "兩台裝置的病人基本名單應合併");
assert.equal(test.getPatientLimit(merged.patients.find((patient) => patient.id === "a")), 100);
assert.equal(test.getPatientLimit(merged.patients.find((patient) => patient.id === "b")), 200);

const limitPatient = {
  shoppingLimit: 100,
  cart: [
    { name: "麥香紅茶", price: 10, quantity: 2 },
    { name: "100元電話卡", price: 100, quantity: 1 },
    { name: "牙刷", price: 20, quantity: 1 },
    { name: "臨時自訂品", price: 50, quantity: 1 }
  ]
};
assert.equal(test.getPatientLimitTotal(limitPatient), 20,
  "日用品、電話卡、其他與舊自訂品不應計入每日購物上限");
assert.equal(limitPatient.cart.reduce((sum, entry) => sum + entry.price * entry.quantity, 0), 190,
  "排除上限的品項仍應計入實際支出");

const deletionTime = "2026-09-14T13:00:00.000Z";
const mergedAfterDelete = test.reconcileSharedState(
  {
    ...merged,
    patientDirectory: merged.patientDirectory.filter((patient) => patient.id !== "a"),
    deletedPatients: { a: deletionTime },
    removedDailyPatients: { "2026-09-14": { a: deletionTime } },
    dailySessions: {
      ...merged.dailySessions,
      "2026-09-14": {
        ...merged.dailySessions["2026-09-14"],
        patients: merged.dailySessions["2026-09-14"].patients.filter((patient) => patient.id !== "a")
      }
    }
  },
  merged
);
assert.equal(mergedAfterDelete.patientDirectory.some((patient) => patient.id === "a"), false,
  "病人刪除後不應被另一台裝置的舊名單復原");
assert.equal(mergedAfterDelete.patients.some((patient) => patient.id === "a"), false,
  "病人從當日名單刪除後不應被雲端舊資料復原");

test.setState({
  ...common,
  activePatientId: "b",
  patientDirectory: [{ id: "b", bed: "P1-02", name: "乙", balance: 1000, shoppingLimit: 200, updatedAt: timestamp }],
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
assert.equal(current.patientDirectory[0].balance, 1500, "零用金餘額應延續到病人基本資料");
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
  rosterVersion: 0,
  dataVersion: 0
});
assert.equal(test.migrateToDailySessions(), true, "舊資料應拆分為病人基本名單與每日資料");
assert.equal(test.applyInitialRoster(), true, "舊資料應執行一次名單移轉");
current = test.getState();
const migratedPatient = current.patientDirectory.find((patient) => patient.bed === "P1-10");
assert.equal(current.patientDirectory.length, 1, "公開程式不應再預先建立病人名單");
assert.equal(migratedPatient.name, "黃X凱");
assert.equal(migratedPatient.balance, 5284, "既有零用金應保留");
assert.equal(migratedPatient.shoppingLimit, 100, "既有病人的購物上限應保留");
assert.equal(current.dailySessions["2026-09-14"].patients[0].cart.length, 1, "既有購物清單應保留在原日期");

test.setState({
  ...common,
  session: { ...common.session, date: "2026-09-15" },
  patientDirectory: [{ id: "b", bed: "P1-02", name: "乙", balance: 1500, shoppingLimit: 200, updatedAt: timestamp }]
});
test.loadDailySession("2026-09-15");
test.addPatientToCurrentDate("b");
current = test.getState();
assert.equal(current.patients[0].balance, 1500, "新日期應延續目前零用金");
assert.equal(current.patients[0].shoppingLimit, 200, "新日期應以上次購物上限為預設值");
test.renderPrintSheet();
assert.match(getElement("#print-sheet").innerHTML, /每日購物總表/, "Step 4 應產生每日總表列印內容");
assert.match(getElement("#print-sheet").innerHTML, /print-patient-table/, "病人分發總表應使用獨立欄寬設定");
assert.match(getElement("#print-sheet").innerHTML, /col-items/, "購物內容欄應可獨立加寬");
assert.match(getElement("#print-sheet").innerHTML, /病人／家屬簽章/, "病人分發表應包含病人或家屬簽章欄");
assert.doesNotMatch(getElement("#print-sheet").innerHTML, /工作人員簽章/, "病人分發表不應再顯示工作人員簽章欄");
assert.match(getElement("#print-sheet").innerHTML, /列印人員：王護理師/, "每日總表應帶入目前登入人員姓名");

test.setState({
  ...common,
  session: { ...common.session, date: "2026-09-15" },
  patientDirectory: [{ id: "b", bed: "P1-02", name: "乙", balance: 900, shoppingLimit: 200, updatedAt: timestamp }],
  dailySessions: {
    "2026-09-14": {
      date: "2026-09-14", note: "", updatedAt: timestamp,
      completedPurchases: {}, completedDistribution: {},
      patients: [{
        id: "b", bed: "P1-02", name: "乙", balance: 1000, shoppingLimit: 200,
        cart: [{ name: "100元電話卡", price: 100, quantity: 1 }], confirmedTotal: 100, updatedAt: timestamp
      }]
    }
  }
});
getElement("#discharge-patient-select").value = "b";
getElement("#discharge-start-date").value = "2026-09-14";
getElement("#discharge-end-date").value = "2026-09-15";
const dischargeSummary = test.buildDischargeSummary();
assert.equal(dischargeSummary.rows.length, 1, "出院彙整表應依病人與日期擷取每日購物紀錄");
assert.equal(dischargeSummary.totalSpent, 100, "出院彙整表應計算住院期間購物總額");
test.renderDischargePrintSheet(dischargeSummary);
assert.match(getElement("#print-sheet").innerHTML, /住院期間購物與零用金餘額確認表/,
  "出院時應產生可供病人確認的列印表單");
console.log("smoke test passed");
