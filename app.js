/* 商品資料由 catalog.js 載入。 */
const products = window.PRODUCTS || [
  {
    category: "飲料",
    description: "依照現場價目表整理，常見飲料品項可直接加入。",
    items: [
      { name: "麥香紅茶/奶茶", price: 10 },
      { name: "泡沫生活綠茶", price: 10 },
      { name: "麥仔茶", price: 10 },
      { name: "波蜜果菜汁", price: 10 },
      { name: "蘆筍茶", price: 10 },
      { name: "楊桃汁", price: 10 },
      { name: "金蜜蜂茄鹽沙士", price: 13 },
      { name: "金蜜蜂葡萄汽水", price: 13 },
      { name: "金蜜蜂橘子汽水", price: 13 },
      { name: "金蜜蜂冰淇淋", price: 13 },
      { name: "味丹青草茶", price: 15 },
      { name: "泰山仙草蜜", price: 15 },
      { name: "椰子水", price: 18 },
      { name: "黑松沙士330ml", price: 18 },
      { name: "茶裏王台灣綠茶", price: 20 },
      { name: "茶裏王日式無糖綠", price: 20 },
      { name: "茶裏王白毫烏龍", price: 20 },
      { name: "茶裏王青心無糖烏龍", price: 20 },
      { name: "麥香阿薩姆奶茶", price: 25 },
      { name: "八寶粥", price: 30 },
      { name: "舒跑245ml", price: 10 },
      { name: "舒跑600ml", price: 25 },
      { name: "舒跑1500ml", price: 38 },
      { name: "悅氏綠茶", price: 40 },
      { name: "悅氏茶花綠茶", price: 40 },
      { name: "悅氏檸檬紅茶", price: 40 },
      { name: "悅氏黑烏龍", price: 40 }
    ]
  },
  {
    category: "糖果、餅乾",
    description: "可快速統計零食、餅乾、泡麵與常用品項。",
    items: [
      { name: "沙士糖", price: 10 },
      { name: "水果糖", price: 10 },
      { name: "人參糖", price: 10 },
      { name: "苦茶糖", price: 10 },
      { name: "仙楂糖", price: 10 },
      { name: "青豆", price: 5 },
      { name: "沙其馬", price: 5 },
      { name: "10元夾心餅", price: 10 },
      { name: "提拉米蘇", price: 10 },
      { name: "比大特巧克力", price: 20 },
      { name: "大波露巧克力", price: 20 },
      { name: "太陽餅", price: 10 },
      { name: "老婆餅", price: 10 },
      { name: "核桃酥", price: 10 },
      { name: "方塊酥", price: 10 },
      { name: "鳳梨喜餅", price: 12 },
      { name: "柳水軒口糧", price: 15 },
      { name: "麥特蔬菜餅", price: 28 },
      { name: "孔雀餅乾(小)", price: 25 },
      { name: "孔雀餅乾(大)", price: 40 },
      { name: "樂事波卡", price: 25 },
      { name: "義美小泡芙", price: 35 },
      { name: "科學麵", price: 10 },
      { name: "旺旺仙貝", price: 10 },
      { name: "可樂果(原味)", price: 10 },
      { name: "可樂果(辣味)", price: 10 },
      { name: "小叮叮巧克力", price: 10 },
      { name: "浪味仙", price: 10 },
      { name: "玉米叔", price: 10 },
      { name: "玉米濃湯", price: 10 },
      { name: "蚵仔煎", price: 10 },
      { name: "鹹蔥餅", price: 10 },
      { name: "真魷味", price: 10 },
      { name: "螃蟹王", price: 10 },
      { name: "奇多家常起士", price: 10 },
      { name: "卡迪那茄汁薯條", price: 10 },
      { name: "卡迪那牛排洋芋片", price: 10 },
      { name: "樂事海苔/原味", price: 10 },
      { name: "樂事波樂雞腿", price: 10 },
      { name: "曠薯麵", price: 20 },
      { name: "話匣子", price: 20 },
      { name: "多力多滋超濃起司", price: 20 },
      { name: "多力多滋黃金起司", price: 20 },
      { name: "乖乖奶油椰子", price: 25 },
      { name: "孔雀香酥脆魚", price: 25 },
      { name: "蝦味先", price: 25 }
    ]
  },
  {
    category: "冰品",
    description: "夏季限定冰品與三明治、豆奶。",
    items: [
      { name: "雅芳巧克力火把", price: 20 },
      { name: "雅芳芒果雪脆冰火把", price: 20 },
      { name: "百吉布丁雪糕", price: 20 },
      { name: "百吉蘇打雪糕", price: 20 },
      { name: "百吉巧克力脆皮雪糕", price: 20 },
      { name: "義美銅鑼燒", price: 27 },
      { name: "義美三明治", price: 27 },
      { name: "義美紅豆牛奶", price: 25 },
      { name: "義美芒果牛奶", price: 25 }
    ]
  },
  {
    category: "其他",
    description: "可放入非價目表但常需統計的代購品項。",
    items: [
      { name: "電話卡", price: 100 }
    ]
  }
];

const storageKey = "psych-shopping-session";
const appConfig = window.APP_CONFIG || {};
const syncConfig = {
  provider: appConfig.sync?.provider || "local",
  supabaseUrl: appConfig.sync?.supabaseUrl || "",
  supabaseAnonKey: appConfig.sync?.supabaseAnonKey || "",
  wardId: appConfig.sync?.wardId || "psych-ward-a",
  pollIntervalMs: Number(appConfig.sync?.pollIntervalMs || 5000)
};
const defaultMonthlyAlertThreshold = 1000;
const limitExemptCategories = new Set(["日用品", "電話卡", "其他"]);
const dataVersion = 2;
const rosterVersion = 1;
const initialRoster = [
  { bed: "P1-04", name: "高X源", shoppingLimit: 100 },
  { bed: "P1-05", name: "熊X智", shoppingLimit: 100 },
  { bed: "P1-06", name: "李X吉", shoppingLimit: 100 },
  { bed: "P1-07", name: "宋X偉", shoppingLimit: 100 },
  { bed: "P1-08", name: "許X府", shoppingLimit: 100 },
  { bed: "P1-09", name: "林X禾", shoppingLimit: 100 },
  { bed: "P1-10", name: "黃X凱", shoppingLimit: 200 },
  { bed: "P1-11", name: "黃X鑫", shoppingLimit: 100 },
  { bed: "P1-12", name: "張X慶", shoppingLimit: 100 },
  { bed: "P1-13", name: "葉X彰", shoppingLimit: 100 },
  { bed: "P1-14", name: "林X亮", shoppingLimit: 100 },
  { bed: "P1-15", name: "蔡X齊", shoppingLimit: 100 },
  { bed: "P1-18", name: "洪X琳", shoppingLimit: 100 },
  { bed: "P1-19", name: "楊X隆", shoppingLimit: 100 },
  { bed: "P1-20", name: "盧X正", shoppingLimit: 100 },
  { bed: "P1-21", name: "魏X暉", shoppingLimit: 100 },
  { bed: "P1-22", name: "蔡X欣", shoppingLimit: 100 },
  { bed: "P1-24", name: "陳X圳", shoppingLimit: 100 },
  { bed: "P1-25", name: "林X峻", shoppingLimit: 100 }
];
const defaultState = {
  session: {
    date: new Date().toISOString().slice(0, 10),
    budgetLimit: 100,
    note: "",
    monthlyAlertThreshold: defaultMonthlyAlertThreshold,
    updatedAt: ""
  },
  patients: [],
  patientDirectory: [],
  dailySessions: {},
  activePatientId: null,
  completedPurchases: {},
  completedDistribution: {},
  historyLogs: [],
  balanceTransactions: [],
  deletedPatients: {},
  removedDailyPatients: {},
  rosterVersion: 0,
  dataVersion: 0
};

let state = structuredClone(defaultState);
let catalogState = {
  category: products[0]?.category || "",
  subGroup: "all"
};
let storageAdapter = null;
let saveTimerId = null;
let syncIntervalId = null;
let isInitialized = false;
let historyEditing = false;
let historyLockedDate = null;
let syncBannerState = {
  title: "同步模式：本機",
  message: "目前資料只存在本機瀏覽器。",
  tone: ""
};

const elements = {
  shoppingDate: document.querySelector("#shopping-date"),
  sessionNote: document.querySelector("#session-note"),
  patientForm: document.querySelector("#patient-form"),
  patientBed: document.querySelector("#patient-bed"),
  patientName: document.querySelector("#patient-name"),
  patientBalance: document.querySelector("#patient-balance"),
  patientShoppingLimit: document.querySelector("#patient-shopping-limit"),
  rosterImportText: document.querySelector("#roster-import-text"),
  importRoster: document.querySelector("#import-roster"),
  directoryList: document.querySelector("#directory-list"),
  dailyPatientSelect: document.querySelector("#daily-patient-select"),
  addDailyPatient: document.querySelector("#add-daily-patient"),
  dateStatus: document.querySelector("#date-status"),
  syncBanner: document.querySelector("#sync-banner"),
  syncTitle: document.querySelector("#sync-title"),
  syncMessage: document.querySelector("#sync-message"),
  syncRefresh: document.querySelector("#sync-refresh"),
  patientSelector: document.querySelector("#patient-selector"),
  patientQuickNav: document.querySelector("#patient-quick-nav"),
  patientOverview: document.querySelector("#patient-overview"),
  categoryNav: document.querySelector("#category-nav"),
  subcategoryNav: document.querySelector("#subcategory-nav"),
  productSearch: document.querySelector("#product-search"),
  clearSearch: document.querySelector("#clear-search"),
  customItemForm: document.querySelector("#custom-item-form"),
  customItemName: document.querySelector("#custom-item-name"),
  customItemPrice: document.querySelector("#custom-item-price"),
  catalogGroups: document.querySelector("#catalog-groups"),
  cartItems: document.querySelector("#cart-items"),
  cartTotal: document.querySelector("#cart-total"),
  cartStatus: document.querySelector("#cart-status"),
  clearCart: document.querySelector("#clear-cart"),
  confirmOrder: document.querySelector("#confirm-order"),
  headerDate: document.querySelector("#header-date"),
  mobileCartBar: document.querySelector("#mobile-cart-bar"),
  mobilePatient: document.querySelector("#mobile-patient"),
  mobileBudget: document.querySelector("#mobile-budget"),
  mobileTotal: document.querySelector("#mobile-total"),
  toast: document.querySelector("#toast"),
  aggregateSummary: document.querySelector("#aggregate-summary"),
  distributionList: document.querySelector("#distribution-list"),
  dischargePatientSelect: document.querySelector("#discharge-patient-select"),
  dischargeStartDate: document.querySelector("#discharge-start-date"),
  dischargeEndDate: document.querySelector("#discharge-end-date"),
  dischargeSummary: document.querySelector("#discharge-summary"),
  printDischargeReport: document.querySelector("#print-discharge-report"),
  exportCsv: document.querySelector("#export-csv"),
  printReport: document.querySelector("#print-report"),
  statPatients: document.querySelector("#stat-patients"),
  statOrders: document.querySelector("#stat-orders"),
  statTotal: document.querySelector("#stat-total"),
  printSheet: document.querySelector("#print-sheet")
};

initialize();

async function initialize() {
  storageAdapter = await buildStorageAdapter();
  state = await storageAdapter.loadState();
  normalizeState();
  const dataChanged = migrateToDailySessions();
  const rosterChanged = applyInitialRoster();
  bindSessionForm();
  bindPatientForm();
  bindDirectoryInteraction();
  bindPatientOverviewInteraction();
  bindToolbar();
  bindCatalogInteraction();
  bindCartInteraction();
  bindReportInteraction();
  updateSyncBanner(storageAdapter.getBannerState());
  render();

  if (typeof storageAdapter.startPolling === "function") {
    syncIntervalId = storageAdapter.startPolling(handleIncomingRemoteState);
  }

  isInitialized = true;
  if (dataChanged || rosterChanged) persist();
}

function bindSessionForm() {
  elements.shoppingDate.value = state.session.date;
  elements.sessionNote.value = state.session.note;
  elements.dischargeEndDate.value = state.session.date;

  elements.shoppingDate.addEventListener("change", () => {
    changeShoppingDate(elements.shoppingDate.value);
  });

  elements.sessionNote.addEventListener("input", () => {
    if (!ensureDateEditable()) return;
    state.session.note = elements.sessionNote.value.trim();
    state.session.updatedAt = new Date().toISOString();
    persist();
    renderPageContext();
    renderReports();
  });
}

function migrateToDailySessions() {
  if (Number(state.dataVersion || 0) >= dataVersion) {
    loadDailySession(state.session.date, false);
    return false;
  }

  const migrationTime = new Date().toISOString();
  const legacyPatients = Array.isArray(state.patients) ? state.patients : [];
  const directoryMap = new Map((state.patientDirectory || []).map((patient) => [patient.id, patient]));
  legacyPatients.forEach((patient) => {
    if (!directoryMap.has(patient.id)) {
      directoryMap.set(patient.id, {
        id: patient.id,
        bed: patient.bed,
        name: maskPatientName(patient.name),
        balance: Number(patient.balance || 0) - Number(patient.confirmedTotal || 0),
        shoppingLimit: Number.isFinite(Number(patient.shoppingLimit)) ? Number(patient.shoppingLimit) : 100,
        updatedAt: patient.updatedAt || migrationTime
      });
    }
  });
  state.patientDirectory = [...directoryMap.values()];
  sortPatientDirectory();

  const dailyPatients = legacyPatients.filter((patient) =>
    (Array.isArray(patient.cart) && patient.cart.length) || Number(patient.confirmedTotal || 0) > 0
  );
  state.patients = dailyPatients;
  if (dailyPatients.length) saveCurrentDailySession();
  state.activePatientId = dailyPatients.some((patient) => patient.id === state.activePatientId)
    ? state.activePatientId
    : dailyPatients[0]?.id || null;
  state.dataVersion = dataVersion;
  return true;
}

function sortPatientDirectory() {
  state.patientDirectory.sort((left, right) =>
    normalizeBed(left.bed).localeCompare(normalizeBed(right.bed), "zh-Hant", { numeric: true })
  );
}

function getDirectoryPatient(patientId) {
  return state.patientDirectory.find((patient) => patient.id === patientId) || null;
}

function normalizeDailyPatient(patient) {
  return {
    id: patient.id,
    bed: patient.bed || "",
    name: maskPatientName(patient.name),
    balance: Number(patient.balance || 0),
    shoppingLimit: Number.isFinite(Number(patient.shoppingLimit)) ? Math.max(0, Number(patient.shoppingLimit)) : 100,
    cart: Array.isArray(patient.cart) ? patient.cart.map((entry) => ({ ...entry })) : [],
    confirmedTotal: Number(patient.confirmedTotal || 0),
    confirmedAt: patient.confirmedAt || "",
    updatedAt: patient.updatedAt || ""
  };
}

function saveCurrentDailySession() {
  const date = state.session.date || getTodayDate();
  const previous = state.dailySessions[date] || {};
  state.dailySessions[date] = {
    date,
    note: state.session.note || "",
    patients: state.patients.map(normalizeDailyPatient),
    completedPurchases: { ...state.completedPurchases },
    completedDistribution: { ...state.completedDistribution },
    updatedAt: newerTimestamp(previous.updatedAt, state.session.updatedAt,
      ...state.patients.map((patient) => patient.updatedAt)) || new Date().toISOString()
  };
}

function loadDailySession(date, resetEditing = true) {
  const dailySession = state.dailySessions?.[date];
  state.session.date = date;
  state.session.note = dailySession?.note || "";
  state.patients = Array.isArray(dailySession?.patients)
    ? dailySession.patients.map(normalizeDailyPatient)
    : [];
  state.completedPurchases = { ...(dailySession?.completedPurchases || {}) };
  state.completedDistribution = { ...(dailySession?.completedDistribution || {}) };
  state.activePatientId = state.patients.some((patient) => patient.id === state.activePatientId)
    ? state.activePatientId
    : state.patients[0]?.id || null;
  if (resetEditing) {
    historyEditing = false;
    historyLockedDate = date < getTodayDate() && Boolean(dailySession) &&
      (Boolean(dailySession.note) || Boolean(dailySession.patients?.length)) ? date : null;
  }
}

function changeShoppingDate(nextDate) {
  const date = nextDate || getTodayDate();
  saveCurrentDailySession();
  syncCurrentSessionToHistory();
  loadDailySession(date);
  state.session.updatedAt = new Date().toISOString();
  elements.sessionNote.value = state.session.note;
  if (!elements.dischargeEndDate.value) elements.dischargeEndDate.value = date;
  persist();
  render();
}

function addPatientToCurrentDate(patientId) {
  if (!ensureDateEditable()) return;
  const directoryPatient = getDirectoryPatient(patientId);
  if (!directoryPatient || state.patients.some((patient) => patient.id === patientId)) return;
  const now = new Date().toISOString();
  state.patients.push(normalizeDailyPatient({
    ...directoryPatient,
    balance: directoryPatient.balance,
    shoppingLimit: Number.isFinite(Number(directoryPatient.shoppingLimit)) ? directoryPatient.shoppingLimit : 100,
    cart: [],
    updatedAt: now
  }));
  state.patients.sort((left, right) => normalizeBed(left.bed).localeCompare(normalizeBed(right.bed), "zh-Hant", { numeric: true }));
  state.activePatientId = patientId;
  state.session.updatedAt = now;
  persist();
  render();
  showToast(`${directoryPatient.bed}床 ${directoryPatient.name} 已加入 ${state.session.date} 購物名單。`);
}

function isHistoryLocked() {
  return state.session.date === historyLockedDate && !historyEditing;
}

function ensureDateEditable() {
  if (!isHistoryLocked()) return true;
  showToast("這是過去日期的紀錄，請先按「編輯此日資料」。", "warning");
  return false;
}

function newerTimestamp(...values) {
  return values.filter(Boolean).sort().at(-1) || "";
}

function bindPatientForm() {
  elements.patientForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bed = elements.patientBed.value.trim().toUpperCase();
    const existing = state.patientDirectory.find((patient) => normalizeBed(patient.bed) === normalizeBed(bed));
    if (existing) {
      showToast(`${bed} 已存在病人名單中。`, "warning");
      return;
    }

    const patient = {
      id: crypto.randomUUID(),
      bed,
      name: maskPatientName(elements.patientName.value),
      balance: Number(elements.patientBalance.value || 0),
      shoppingLimit: Number(elements.patientShoppingLimit.value || 100),
      updatedAt: new Date().toISOString()
    };

    state.patientDirectory.push(patient);
    sortPatientDirectory();
    elements.patientForm.reset();
    elements.patientBalance.value = 0;
    elements.patientShoppingLimit.value = 100;
    persist();
    render();
    showToast(`${patient.bed}床 ${patient.name} 已加入病人名單。`);
  });
}

function bindDirectoryInteraction() {
  elements.directoryList.addEventListener("submit", (event) => {
    const form = event.target.closest(".directory-edit-form");
    if (!form) return;
    event.preventDefault();

    const patient = getDirectoryPatient(form.dataset.patientId);
    if (!patient) return;

    const bed = normalizeBed(form.querySelector('[name="bed"]')?.value);
    const name = maskPatientName(form.querySelector('[name="name"]')?.value);
    const balance = Number(form.querySelector('[name="balance"]')?.value);
    const shoppingLimit = Number(form.querySelector('[name="shoppingLimit"]')?.value);
    const duplicate = state.patientDirectory.find((entry) =>
      entry.id !== patient.id && normalizeBed(entry.bed) === bed);

    if (!bed || !name || !Number.isFinite(balance) || balance < 0 ||
        !Number.isFinite(shoppingLimit) || shoppingLimit < 0) {
      showToast("請完整填寫床號、姓名、零用金與購物上限。", "warning");
      return;
    }
    if (duplicate) {
      showToast(`${bed} 已存在病人名單中。`, "warning");
      return;
    }

    const now = new Date().toISOString();
    Object.assign(patient, { bed, name, balance: Math.floor(balance), shoppingLimit: Math.floor(shoppingLimit), updatedAt: now });
    const dailyPatient = state.patients.find((entry) => entry.id === patient.id);
    if (dailyPatient) {
      Object.assign(dailyPatient, { bed, name, balance: patient.balance, shoppingLimit: patient.shoppingLimit, updatedAt: now });
    }
    sortPatientDirectory();
    persist();
    render();
    showToast(`${bed}床 ${name} 的資料已更新。`);
  });

  elements.directoryList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-delete-patient-id]");
    if (!button) return;
    const patient = getDirectoryPatient(button.dataset.deletePatientId);
    if (!patient) return;
    if (!window.confirm(`確定要從病人名單刪除 ${patient.bed}床 ${patient.name}？\n\n本日尚未完成的購物資料會一併移除，過去的購物與入帳紀錄仍會保留。`)) return;

    const now = new Date().toISOString();
    state.deletedPatients[patient.id] = now;
    state.removedDailyPatients[state.session.date] = {
      ...(state.removedDailyPatients[state.session.date] || {}),
      [patient.id]: now
    };
    state.patientDirectory = state.patientDirectory.filter((entry) => entry.id !== patient.id);
    state.patients = state.patients.filter((entry) => entry.id !== patient.id);
    if (state.activePatientId === patient.id) state.activePatientId = state.patients[0]?.id || null;
    state.session.updatedAt = now;
    persist();
    render();
    showToast(`${patient.bed}床 ${patient.name} 已從病人名單刪除。`);
  });
}

function bindPatientOverviewInteraction() {
  elements.patientOverview.addEventListener("submit", (event) => {
    if (!ensureDateEditable()) {
      event.preventDefault();
      return;
    }
    const balanceForm = event.target.closest("#balance-entry-form");
    if (balanceForm) {
      event.preventDefault();
      addBalanceEntry(balanceForm);
      return;
    }

    const form = event.target.closest("#edit-patient-form");
    if (!form) {
      return;
    }

    event.preventDefault();
    const patient = getActivePatient();
    if (!patient) {
      return;
    }

    const shoppingLimit = Number(form.querySelector("#edit-patient-shopping-limit")?.value || 0);
    if (shoppingLimit < 0) {
      return;
    }

    patient.shoppingLimit = shoppingLimit;
    markPatientUpdated(patient);
    const directoryPatient = getDirectoryPatient(patient.id);
    if (directoryPatient) {
      directoryPatient.shoppingLimit = shoppingLimit;
      directoryPatient.updatedAt = patient.updatedAt;
    }
    persist();
    render();
    showToast(`${patient.bed}床本次購物上限已更新為 NT$${shoppingLimit}。`);
  });
}

function addBalanceEntry(form) {
  if (!ensureDateEditable()) return;
  const patient = getActivePatient();
  if (!patient) return;

  const amount = Number(form.querySelector("#balance-entry-amount")?.value || 0);
  const date = form.querySelector("#balance-entry-date")?.value || state.session.date || getTodayDate();
  const note = form.querySelector("#balance-entry-note")?.value.trim() || "零用金入帳";
  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("入帳金額必須大於0。", "warning");
    return;
  }

  patient.balance += Math.floor(amount);
  markPatientUpdated(patient);
  const directoryPatient = getDirectoryPatient(patient.id);
  if (directoryPatient) {
    directoryPatient.balance += Math.floor(amount);
    directoryPatient.updatedAt = patient.updatedAt;
  }
  state.balanceTransactions.push({
    id: crypto.randomUUID(),
    patientId: patient.id,
    bed: patient.bed,
    name: patient.name,
    date,
    type: "deposit",
    amount: Math.floor(amount),
    balanceAfter: directoryPatient?.balance ?? patient.balance,
    note,
    createdAt: new Date().toISOString()
  });
  persist();
  render();
  showToast(`${patient.bed}床 ${patient.name} 已入帳 NT$${Math.floor(amount)}。`);
}

function bindToolbar() {
  elements.addDailyPatient.addEventListener("click", () => {
    addPatientToCurrentDate(elements.dailyPatientSelect.value);
  });

  elements.patientSelector.addEventListener("change", (event) => {
    state.activePatientId = event.target.value;
    persist();
    render();
  });

  elements.patientQuickNav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-patient-id]");
    if (!button) return;
    state.activePatientId = button.dataset.patientId;
    persist();
    render();
  });

  elements.dateStatus.addEventListener("click", (event) => {
    if (!event.target.closest("#edit-history-date")) return;
    historyEditing = true;
    render();
    showToast(`已開啟 ${state.session.date} 的編輯模式。`, "warning");
  });

  elements.productSearch.addEventListener("input", () => {
    elements.clearSearch.classList.toggle("is-visible", Boolean(elements.productSearch.value));
    renderCatalog();
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.productSearch.value = "";
    elements.clearSearch.classList.remove("is-visible");
    renderCatalog();
    elements.productSearch.focus();
  });

  elements.customItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomItemToActivePatient();
  });

  elements.importRoster.addEventListener("click", () => {
    importRosterFromText();
  });

  elements.exportCsv.addEventListener("click", () => {
    exportCsv();
  });

  elements.dischargePatientSelect.addEventListener("change", () => {
    setDischargeDateRangeForPatient(elements.dischargePatientSelect.value);
    renderDischargeSummary();
  });
  elements.dischargeStartDate.addEventListener("input", renderDischargeSummary);
  elements.dischargeEndDate.addEventListener("input", renderDischargeSummary);
  elements.printDischargeReport.addEventListener("click", () => {
    const summary = buildDischargeSummary();
    if (!summary.rows.length) {
      showToast("所選期間沒有此病人的購物資料。", "warning");
      return;
    }
    renderDischargePrintSheet(summary);
    window.print();
  });

  elements.syncRefresh.addEventListener("click", async () => {
    await refreshFromRemote();
  });

  elements.printReport.addEventListener("click", () => {
    renderPrintSheet();
    window.print();
  });
}

function updateSyncBanner(nextState) {
  syncBannerState = nextState;
  elements.syncTitle.textContent = nextState.title;
  elements.syncMessage.textContent = nextState.message;
  elements.syncBanner.className = `sync-banner ${nextState.tone}`.trim();
}

async function refreshFromRemote() {
  if (!storageAdapter || typeof storageAdapter.fetchRemoteState !== "function") {
    updateSyncBanner({
      title: "同步模式：本機",
      message: "目前沒有雲端資料可重新整理。",
      tone: ""
    });
    return;
  }

  updateSyncBanner({
    title: "同步模式：雲端共享",
    message: "正在重新整理雲端資料...",
    tone: "is-cloud"
  });

  const remoteState = await storageAdapter.fetchRemoteState();
  if (!remoteState) {
    updateSyncBanner(storageAdapter.getBannerState());
    return;
  }

  handleIncomingRemoteState(remoteState);
}

function handleIncomingRemoteState(nextState) {
  const reconciledState = reconcileSharedState(state, nextState);
  const nextSerialized = JSON.stringify(reconciledState);
  const currentSerialized = JSON.stringify(mergeState(state));
  if (nextSerialized === currentSerialized) {
    updateSyncBanner(storageAdapter.getBannerState("雲端資料已是最新。"));
    return;
  }

  state = reconciledState;
  normalizeState();
  backupLocalState(state);
  render();
  updateSyncBanner(storageAdapter.getBannerState("已收到其他裝置的最新資料。"));
}

function bindCatalogInteraction() {
  elements.categoryNav.addEventListener("click", (event) => {
    const categoryChip = event.target.closest("button[data-category]");
    if (!categoryChip) {
      return;
    }

    catalogState.category = categoryChip.dataset.category;
    catalogState.subGroup = "all";
    renderCatalogNavigation();
    renderCatalog();
  });

  elements.subcategoryNav.addEventListener("click", (event) => {
    const subcategoryChip = event.target.closest("button[data-subgroup]");
    if (!subcategoryChip) {
      return;
    }

    catalogState.subGroup = subcategoryChip.dataset.subgroup;
    renderCatalogNavigation();
    renderCatalog();
  });

  elements.catalogGroups.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card");
    if (!card || !elements.catalogGroups.contains(card)) {
      return;
    }

    if (!ensureDateEditable()) return;

    addProductToActivePatient(card.dataset.productName);
  });
}

function bindCartInteraction() {
  elements.cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button || !elements.cartItems.contains(button)) {
      return;
    }

    if (!ensureDateEditable()) return;

    updateCartItem(button.dataset.productName, button.dataset.action);
  });

  elements.cartItems.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-action='set-quantity']");
    if (!input || !elements.cartItems.contains(input)) {
      return;
    }

    if (!ensureDateEditable()) return;

    updateCartItem(input.dataset.productName, "set-quantity", input.value);
  });

  elements.clearCart.addEventListener("click", () => {
    if (!ensureDateEditable()) return;
    const patient = getActivePatient();
    if (!patient || patient.cart.length === 0) return;
    if (!window.confirm(`確定要清空 ${patient.bed}床 ${patient.name} 的全部購物品項嗎？`)) return;
    patient.cart = [];
    markPatientUpdated(patient);
    persist();
    render();
    showToast(`已清空 ${patient.bed}床 ${patient.name} 的購物清單。`);
  });

  elements.confirmOrder.addEventListener("click", () => {
    if (!ensureDateEditable()) return;
    const patient = getActivePatient();
    if (!patient || patient.cart.length === 0) {
      showToast("請先選擇病人並加入商品。", "warning");
      return;
    }

    const total = getPatientTotal(patient);
    const limitTotal = getPatientLimitTotal(patient);
    if (total > patient.balance || limitTotal > getPatientLimit(patient)) {
      showToast("目前金額超過零用金或購物上限，請先調整品項。", "warning");
      return;
    }

    const previousTotal = Number(patient.confirmedTotal || 0);
    const difference = total - previousTotal;
    const directoryPatient = getDirectoryPatient(patient.id);
    if (directoryPatient && difference !== 0) {
      directoryPatient.balance -= difference;
      directoryPatient.shoppingLimit = getPatientLimit(patient);
      directoryPatient.updatedAt = new Date().toISOString();
      state.balanceTransactions.push({
        id: crypto.randomUUID(),
        patientId: patient.id,
        bed: patient.bed,
        name: patient.name,
        date: state.session.date,
        type: "purchase",
        amount: -difference,
        balanceAfter: directoryPatient.balance,
        note: previousTotal ? "購物金額調整" : "本次購物支出",
        createdAt: directoryPatient.updatedAt
      });
    }
    patient.confirmedTotal = total;
    patient.confirmedAt = new Date().toISOString();
    markPatientUpdated(patient);
    showToast(`已確認 ${patient.bed}床 ${patient.name}，共 NT$${total}，零用金餘額 NT$${patient.balance - total}。`);
    syncCurrentSessionToHistory();
    persist();
    document.querySelector("#reports")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindReportInteraction() {
  elements.aggregateSummary.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-purchase-name]");
    if (!checkbox) {
      return;
    }
    if (!ensureDateEditable()) {
      checkbox.checked = !checkbox.checked;
      return;
    }

    const productName = checkbox.dataset.purchaseName;
    state.completedPurchases[productName] = checkbox.checked;
    state.session.updatedAt = new Date().toISOString();
    persist();
    renderReports();
  });

  elements.distributionList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-distribution-id]");
    if (!checkbox) {
      return;
    }
    if (!ensureDateEditable()) {
      checkbox.checked = !checkbox.checked;
      return;
    }

    const patientId = checkbox.dataset.distributionId;
    state.completedDistribution[patientId] = checkbox.checked;
    state.session.updatedAt = new Date().toISOString();
    persist();
    renderReports();
  });
}

function render() {
  saveCurrentDailySession();
  syncCurrentSessionToHistory();
  renderDirectoryList();
  renderDailyPatientPicker();
  renderDateStatus();
  renderPatientSelector();
  renderPatientQuickNav();
  renderPatientOverview();
  renderCatalogNavigation();
  renderCatalog();
  renderCart();
  renderReports();
  renderDischargeSummary();
  renderHeroStats();
  renderPageContext();
  renderPrintSheet();
}

function renderDirectoryList() {
  if (!state.patientDirectory.length) {
    elements.directoryList.className = "directory-list empty-state";
    elements.directoryList.textContent = "尚未建立病人名單。";
    return;
  }
  elements.directoryList.className = "directory-list";
  elements.directoryList.innerHTML = state.patientDirectory.map((patient) => `
    <details class="directory-card">
      <summary>
        <span><strong>${escapeHtml(patient.bed)}</strong> ${escapeHtml(patient.name)}
          <small>餘額 NT$${patient.balance}／預設上限 NT$${patient.shoppingLimit ?? 100}</small>
        </span>
        <span class="directory-edit-label">修改</span>
      </summary>
      <form class="directory-edit-form" data-patient-id="${escapeHtml(patient.id)}">
        <label><span>床號</span><input name="bed" type="text" maxlength="10" value="${escapeHtml(patient.bed)}" required /></label>
        <label><span>病人姓名</span><input name="name" type="text" maxlength="30" value="${escapeHtml(patient.name)}" required /></label>
        <label><span>目前零用金</span><input name="balance" type="number" min="0" step="1" value="${patient.balance}" required /></label>
        <label><span>預設購物上限</span><input name="shoppingLimit" type="number" min="0" step="1" value="${patient.shoppingLimit ?? 100}" required /></label>
        <div class="directory-card-actions">
          <button type="submit" class="primary-button">儲存修改</button>
          <button type="button" class="secondary-button danger-button" data-delete-patient-id="${escapeHtml(patient.id)}">刪除病人</button>
        </div>
      </form>
    </details>`).join("");
}

function renderDailyPatientPicker() {
  const currentIds = new Set(state.patients.map((patient) => patient.id));
  const available = state.patientDirectory.filter((patient) => !currentIds.has(patient.id));
  elements.dailyPatientSelect.innerHTML = available.length
    ? available.map((patient) => `<option value="${patient.id}">${patient.bed}床 ${patient.name}（餘額 NT$${patient.balance}／上限 NT$${patient.shoppingLimit || 100}）</option>`).join("")
    : '<option value="">沒有可加入的病人</option>';
  elements.addDailyPatient.disabled = !available.length || isHistoryLocked();
}

function renderDateStatus() {
  const daily = state.dailySessions[state.session.date];
  const saved = Boolean(daily && (daily.note || daily.patients?.length));
  const isPast = state.session.date < getTodayDate();
  elements.sessionNote.disabled = isHistoryLocked();
  if (isHistoryLocked()) {
    elements.dateStatus.className = "date-status is-history";
    elements.dateStatus.innerHTML = `<strong>已叫出 ${state.session.date} 的過去輸入資料（唯讀）</strong><span>如需更正，請先明確開啟編輯。</span><button id="edit-history-date" type="button" class="secondary-button">編輯此日資料</button>`;
  } else if (isPast && historyEditing) {
    elements.dateStatus.className = "date-status is-editing";
    elements.dateStatus.innerHTML = `<strong>正在編輯 ${state.session.date} 的過去資料</strong><span>修改會同步更新日／週／月／年報。</span>`;
  } else {
    elements.dateStatus.className = "date-status";
    elements.dateStatus.innerHTML = `<strong>${saved ? "已載入此日購物資料" : "此日期尚無資料"}</strong><span>${saved ? `目前有 ${state.patients.length} 位購物病人。` : "請從下方選單加入本次購物病人。"}</span>`;
  }
}

function renderPageContext() {
  const patient = getActivePatient();
  const total = patient ? getPatientTotal(patient) : 0;
  const limitTotal = patient ? getPatientLimitTotal(patient) : 0;
  const patientLimit = patient ? getPatientLimit(patient) : 0;
  const balanceRemaining = patient ? patient.balance - total : 0;
  const limitRemaining = patientLimit - limitTotal;
  const remaining = Math.min(balanceRemaining, limitRemaining);
  const isOver = Boolean(patient && (balanceRemaining < 0 || limitRemaining < 0));

  elements.headerDate.textContent = state.session.date
    ? `${state.session.date.replaceAll("-", "/")} 購物`
    : "本次購物";
  elements.mobilePatient.textContent = patient ? `${patient.bed}床 ${patient.name}` : "尚未選擇病人";
  elements.mobileBudget.textContent = patient
    ? (isOver ? `已超出可用金額 NT$${Math.abs(remaining)}` : `上限尚餘 NT$${limitRemaining}｜零用金 NT$${balanceRemaining}`)
    : "請先建立購物名單";
  elements.mobileTotal.textContent = `NT$${total}`;
  elements.mobileCartBar.classList.toggle("is-over", isOver);
}

function renderPatientQuickNav() {
  if (!state.patients.length) {
    elements.patientQuickNav.innerHTML = "";
    return;
  }

  elements.patientQuickNav.innerHTML = state.patients.map((patient) => {
    const total = getPatientTotal(patient);
    const limitTotal = getPatientLimitTotal(patient);
    const active = patient.id === state.activePatientId;
    const over = limitTotal > getPatientLimit(patient) || total > patient.balance;
    return `<button type="button" class="patient-chip ${active ? "is-active" : ""} ${over ? "has-alert" : ""}" data-patient-id="${patient.id}">
      <strong>${patient.bed}床</strong><span>${patient.name}</span><small>NT$${total}</small>
    </button>`;
  }).join("");
}

function renderPatientSelector() {
  normalizeActivePatient();

  const options = state.patients
    .map((patient) => {
      const selected = patient.id === state.activePatientId ? "selected" : "";
      return `<option value="${patient.id}" ${selected}>${patient.bed}床 ${patient.name}</option>`;
    })
    .join("");

  elements.patientSelector.innerHTML = options || '<option value="">尚無病人</option>';
}

function renderPatientOverview() {
  const patient = getActivePatient();

  if (!patient) {
    elements.patientOverview.className = "patient-overview empty-state";
    elements.patientOverview.textContent = "請先從 Step 2 加入本次購物病人。";
    return;
  }

  const total = getPatientTotal(patient);
  const limitTotal = getPatientLimitTotal(patient);
  const remaining = patient.balance - total;
  const patientLimit = getPatientLimit(patient);
  const budgetRemaining = patientLimit - limitTotal;
  const overBudget = budgetRemaining < 0 || remaining < 0;

  elements.patientOverview.className = "patient-overview";
  elements.patientOverview.innerHTML = `
    <div class="patient-overview-grid">
      <article class="metric-card">
        <strong>病人</strong>
        <span>${patient.bed}床 ${patient.name}</span>
      </article>
      <article class="metric-card">
        <strong>本次已選金額</strong>
        <span>NT$${total}</span>
      </article>
      <article class="metric-card ${remaining < 0 ? "alert" : "safe"}">
        <strong>零用金剩餘</strong>
        <span>NT$${remaining}</span>
      </article>
      <article class="metric-card ${overBudget ? "alert" : "safe"}">
        <strong>購物上限剩餘</strong>
        <span>NT$${budgetRemaining}</span>
      </article>
    </div>
    <p class="summary-meta">
      ${overBudget ? "已超過病人零用金或本次購物上限，請調整品項。" : `計入上限 NT$${limitTotal}；日用品、電話卡與其他類別不計入每日上限。`}
    </p>
    <form id="edit-patient-form" class="patient-edit-form" aria-label="修改本次購物上限">
      <label>本次購物上限
        <input id="edit-patient-shopping-limit" type="number" min="0" step="1" value="${patientLimit}" required ${isHistoryLocked() ? "disabled" : ""} />
      </label>
      <button type="submit" class="secondary-button" ${isHistoryLocked() ? "disabled" : ""}>更新本次上限</button>
    </form>
    <form id="balance-entry-form" class="balance-entry-form" aria-label="零用金入帳">
      <input id="balance-entry-date" type="date" value="${state.session.date || getTodayDate()}" required ${isHistoryLocked() ? "disabled" : ""} />
      <input id="balance-entry-amount" type="number" min="1" step="1" placeholder="入帳金額" required ${isHistoryLocked() ? "disabled" : ""} />
      <input id="balance-entry-note" type="text" maxlength="50" placeholder="備註，例如：家屬存入" ${isHistoryLocked() ? "disabled" : ""} />
      <button type="submit" class="secondary-button" ${isHistoryLocked() ? "disabled" : ""}>零用金入帳</button>
    </form>
    ${renderBalanceHistory(patient)}
  `;
}

function renderBalanceHistory(patient) {
  const entries = state.balanceTransactions
    .filter((entry) => entry.patientId === patient.id)
    .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)))
    .slice(0, 5);
  if (!entries.length) return "";

  return `<div class="balance-history">
    <strong>最近零用金收支</strong>
    <div class="summary-meta">${entries.map((entry) =>
      `${entry.date}　${entry.amount >= 0 ? "+" : "−"}NT$${Math.abs(entry.amount)}　${entry.note}（餘額 NT$${entry.balanceAfter}）`
    ).join("<br>")}</div>
  </div>`;
}

function renderCatalogNavigation() {
  if (!products.length) {
    elements.categoryNav.innerHTML = "";
    elements.subcategoryNav.innerHTML = "";
    return;
  }

  if (!products.some((group) => group.category === catalogState.category)) {
    catalogState.category = products[0].category;
    catalogState.subGroup = "all";
  }

  elements.categoryNav.innerHTML = products
    .map((group) => {
      const isActive = group.category === catalogState.category;
      return `<button type="button" class="category-chip ${isActive ? "is-active" : ""}" data-category="${group.category}">
        <span aria-hidden="true">${group.icon || "▦"}</span>${group.category}<small>${group.items.length}</small>
      </button>`;
    })
    .join("");

  const activeGroup = products.find((group) => group.category === catalogState.category);
  const subGroups = getPriceSubGroups(activeGroup?.items || []);
  if (!subGroups.some((group) => group.key === catalogState.subGroup)) {
    catalogState.subGroup = "all";
  }

  elements.subcategoryNav.innerHTML = [
    `<button type="button" class="subcategory-chip ${catalogState.subGroup === "all" ? "is-active" : ""}" data-subgroup="all">全部</button>`,
    ...subGroups.map((subGroup) => {
      const isActive = catalogState.subGroup === subGroup.key;
      return `<button type="button" class="subcategory-chip ${isActive ? "is-active" : ""}" data-subgroup="${subGroup.key}">${subGroup.label}</button>`;
    })
  ].join("");
}

function renderCatalog() {
  const patient = getActivePatient();
  const keyword = elements.productSearch.value.trim().toLowerCase();

  if (!patient) {
    elements.catalogGroups.innerHTML = '<div class="empty-state">從 Step 2 加入本次購物病人後即可開始選購。</div>';
    return;
  }

  const activeGroup = products.find((group) => group.category === catalogState.category);
  if (!activeGroup) {
    elements.catalogGroups.innerHTML = '<div class="empty-state">找不到符合的商品。</div>';
    return;
  }

  const sourceItems = keyword
    ? products.flatMap((group) => group.items.map((item) => ({ ...item, sourceCategory: group.category })))
    : activeGroup.items;
  const filteredItems = sourceItems.filter((item) => item.name.toLowerCase().includes(keyword));
  const subGroups = keyword
    ? [{ key: "search", label: `搜尋結果「${elements.productSearch.value.trim()}」`, items: filteredItems }]
    : getPriceSubGroups(filteredItems);
  const visibleGroups = keyword || catalogState.subGroup === "all"
    ? subGroups
    : subGroups.filter((group) => group.key === catalogState.subGroup);

  const sections = visibleGroups
    .map((group) => {
      const cards = group.items
        .map((item) => {
          const quantity = patient.cart.find((entry) => entry.name === item.name)?.quantity || 0;
          return `
            <button type="button" class="product-card ${quantity ? "is-selected" : ""} ${item.outOfStock ? "is-unavailable" : ""}"
              data-product-name="${item.name}" ${item.outOfStock ? "disabled" : ""}>
              ${quantity ? `<span class="selected-count">${quantity}</span>` : ""}
              ${item.image ? `<span class="product-image-wrap" aria-hidden="true" style="--image-sheet:url('${item.image.sheet}');--image-column:${item.image.column};--image-row:${item.image.row};--image-columns:${item.image.columns};--image-rows:${item.image.rows}"></span>` : ""}
              <span class="product-name">${item.name}</span>
              ${keyword && item.sourceCategory ? `<span class="product-category">${item.sourceCategory}</span>` : ""}
              <span class="product-price">${item.outOfStock ? "缺貨" : `NT$${item.price}`}</span>
            </button>
          `;
        })
        .join("");

      return `
        <section class="catalog-group">
          <header>
            <div>
              <h3>${group.label}</h3>
              <p>${keyword ? `共找到 ${group.items.length} 項商品` : (activeGroup.note || "依價格快速篩選")}</p>
            </div>
            <span class="tag">${group.items.length} 項</span>
          </header>
          <div class="product-grid">${cards}</div>
        </section>
      `;
    })
    .join("");

  elements.catalogGroups.innerHTML = sections || '<div class="empty-state">此分類找不到符合的商品。</div>';
}

function getPriceSubGroups(items) {
  const ranges = [
    { key: "0-10", label: "NT$10以下", min: 0, max: 10 },
    { key: "11-20", label: "NT$11-20", min: 11, max: 20 },
    { key: "21-40", label: "NT$21-40", min: 21, max: 40 },
    { key: "41+", label: "NT$41以上", min: 41, max: Number.POSITIVE_INFINITY }
  ];

  return ranges
    .map((range) => {
      const groupedItems = items.filter((item) => item.price >= range.min && item.price <= range.max);
      return { ...range, items: groupedItems };
    })
    .filter((range) => range.items.length > 0);
}

function renderCart() {
  const patient = getActivePatient();
  const total = patient ? getPatientTotal(patient) : 0;
  const limitTotal = patient ? getPatientLimitTotal(patient) : 0;
  const patientLimit = patient ? getPatientLimit(patient) : 0;
  elements.cartTotal.textContent = `NT$${total}`;
  elements.cartTotal.className = `cart-total ${patient && (total > patient.balance || limitTotal > patientLimit) ? "is-over" : ""}`;
  const hasItems = Boolean(patient?.cart.length);
  const isOver = Boolean(patient && (total > patient.balance || limitTotal > patientLimit));
  elements.clearCart.disabled = !hasItems;
  elements.confirmOrder.disabled = !hasItems || isOver;
  elements.cartStatus.className = `cart-status ${isOver ? "is-over" : "is-safe"}`;
  elements.cartStatus.textContent = !patient
    ? "請先建立購物名單。"
    : isOver
      ? "超過零用金或購物上限，請減少品項。"
      : hasItems
        ? `總額 NT$${total}；其中 NT$${limitTotal} 計入每日上限，上限尚餘 NT$${patientLimit - limitTotal}。`
        : "選擇商品後，系統會在這裡檢查金額。";

  if (!patient || patient.cart.length === 0) {
    elements.cartItems.className = "cart-items empty-state";
    elements.cartItems.textContent = patient ? "尚未加入任何商品。" : "請先新增病人。";
    return;
  }

  elements.cartItems.className = "cart-items";
  elements.cartItems.innerHTML = patient.cart
    .map((entry) => {
      const subtotal = entry.price * entry.quantity;
      const category = entry.category || getProductCategory(entry.name);
      const exemptLabel = limitExemptCategories.has(category) ? " · 不計每日上限" : "";
      return `
        <article class="cart-item">
          <div class="cart-item-header">
            <div>
              <strong>${entry.name}</strong>
              <div class="summary-meta">單價 NT$${entry.price}${exemptLabel}</div>
            </div>
            <strong>NT$${subtotal}</strong>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="quantity-button" data-action="decrease" data-product-name="${entry.name}">-</button>
            <input type="number" min="1" step="1" class="quantity-input" value="${entry.quantity}" data-action="set-quantity" data-product-name="${entry.name}" aria-label="${entry.name} 數量" />
            <button type="button" class="quantity-button" data-action="increase" data-product-name="${entry.name}">+</button>
            <button type="button" class="remove-button" data-action="remove" data-product-name="${entry.name}">移除</button>
          </div>
        </article>
      `;
    })
    .join("");
}

let toastTimerId = null;
function showToast(message, tone = "success") {
  window.clearTimeout(toastTimerId);
  elements.toast.textContent = message;
  elements.toast.className = `toast is-visible ${tone === "warning" ? "is-warning" : ""}`.trim();
  toastTimerId = window.setTimeout(() => {
    elements.toast.className = "toast";
  }, 3200);
}

function renderReports() {
  if (state.patients.length === 0) {
    elements.aggregateSummary.className = "summary-list empty-state";
    elements.distributionList.className = "summary-list empty-state";
    elements.aggregateSummary.textContent = "尚未建立購物資料。";
    elements.distributionList.textContent = "尚未建立購物資料。";
    return;
  }

  const aggregate = new Map();

  state.patients.forEach((patient) => {
    patient.cart.forEach((entry) => {
      const existing = aggregate.get(entry.name) || { quantity: 0, price: entry.price, patients: [] };
      existing.quantity += entry.quantity;
      existing.patients.push(`${patient.bed}床 ${patient.name} x${entry.quantity}`);
      aggregate.set(entry.name, existing);
    });
  });

  const aggregateCards = [...aggregate.entries()]
    .sort((left, right) => left[0].localeCompare(right[0], "zh-Hant"))
    .map(([name, entry]) => {
      const subtotal = entry.quantity * entry.price;
      const checked = Boolean(state.completedPurchases[name]);
      return `
        <article class="summary-card ${checked ? "is-complete" : ""}">
          <div class="summary-header">
            <div>
              <strong>${name}</strong>
              <div class="summary-meta">${entry.patients.join("、")}</div>
            </div>
            <span class="tag">${entry.quantity} 件</span>
          </div>
          <div class="summary-meta">建議採買金額 NT$${subtotal}</div>
          <label class="summary-actions">
            <input type="checkbox" data-purchase-name="${name}" ${checked ? "checked" : ""} />
            已採買完成
          </label>
        </article>
      `;
    })
    .join("");

  elements.aggregateSummary.className = "summary-list";
  elements.aggregateSummary.innerHTML = `
    <article class="summary-card">
      <div class="summary-header">
        <div>
          <strong>${formatSessionTitle()}</strong>
          <div class="summary-meta">${state.session.note || "無備註"}</div>
        </div>
        <span class="tag">${aggregate.size} 種品項</span>
      </div>
    </article>
    ${aggregateCards || '<div class="empty-state">尚未加入任何商品。</div>'}
  `;

  elements.distributionList.className = "summary-list";
  elements.distributionList.innerHTML = state.patients
    .map((patient) => {
      const total = getPatientTotal(patient);
      const items = patient.cart.length
        ? patient.cart.map((entry) => `${entry.name} x${entry.quantity}`).join("、")
        : "尚未選購";
      const distributed = Boolean(state.completedDistribution[patient.id]);
      return `
        <article class="distribution-card ${distributed ? "is-complete" : ""}">
          <div class="distribution-header">
            <div>
              <strong>${patient.bed}床 ${patient.name}</strong>
              <div class="summary-meta">${items}</div>
            </div>
            <span class="tag">NT$${total}</span>
          </div>
          <div class="summary-meta">零用金餘額：NT$${patient.balance - total}</div>
          <label class="summary-actions">
            <input type="checkbox" data-distribution-id="${patient.id}" ${distributed ? "checked" : ""} />
            已放入病人物品櫃
          </label>
        </article>
      `;
    })
    .join("");
}

function renderPrintSheet() {
  const aggregate = new Map();
  state.patients.forEach((patient) => {
    patient.cart.forEach((entry) => {
      const current = aggregate.get(entry.name) || { quantity: 0, price: Number(entry.price || 0) };
      current.quantity += Number(entry.quantity || 0);
      aggregate.set(entry.name, current);
    });
  });
  const itemRows = [...aggregate.entries()]
    .sort((left, right) => left[0].localeCompare(right[0], "zh-Hant"))
    .map(([name, entry], index) => `<tr><td>${index + 1}</td><td>${name}</td><td>${entry.price}</td><td>${entry.quantity}</td><td>${entry.price * entry.quantity}</td></tr>`)
    .join("");
  const patientRows = state.patients.map((patient, index) => {
    const total = getPatientTotal(patient);
    const items = patient.cart.length
      ? patient.cart.map((entry) => `${entry.name}×${entry.quantity}`).join("、")
      : "尚未選購";
    return `<tr><td>${index + 1}</td><td>${patient.bed}</td><td>${patient.name}</td><td class="print-items">${items}</td><td>${total}</td><td>${patient.balance - total}</td></tr>`;
  }).join("");
  const totalPieces = state.patients.reduce((sum, patient) =>
    sum + patient.cart.reduce((patientSum, entry) => patientSum + Number(entry.quantity || 0), 0), 0);
  const totalAmount = state.patients.reduce((sum, patient) => sum + getPatientTotal(patient), 0);

  elements.printSheet.innerHTML = `
    <header class="print-header">
      <h1>精神科購物管理系統｜每日購物總表</h1>
      <p>日期：${state.session.date}　病人：${state.patients.length} 人　件數：${totalPieces} 件　總金額：NT$${totalAmount}</p>
      ${state.session.note ? `<p>備註：${state.session.note}</p>` : ""}
    </header>
    <section>
      <h2>採買品項總表</h2>
      <table class="print-item-table"><colgroup><col class="col-sequence"><col class="col-item"><col class="col-price"><col class="col-quantity"><col class="col-subtotal"></colgroup><thead><tr><th>序</th><th>品項</th><th>單價</th><th>數量</th><th>小計</th></tr></thead>
      <tbody>${itemRows || '<tr><td colspan="5">本日尚無購物品項</td></tr>'}</tbody></table>
    </section>
    <section>
      <h2>病人分發總表</h2>
      <table class="print-patient-table"><colgroup><col class="col-sequence"><col class="col-bed"><col class="col-name"><col class="col-items"><col class="col-amount"><col class="col-balance"></colgroup><thead><tr><th>序</th><th>床號</th><th>姓名</th><th>購物內容</th><th>金額</th><th>餘額</th></tr></thead>
      <tbody>${patientRows || '<tr><td colspan="6">本日尚無購物病人</td></tr>'}</tbody></table>
    </section>
    <footer class="print-signatures"><span>採買人員：____________</span><span>覆核人員：____________</span></footer>`;
}

function renderHeroStats() {
  const totalPatients = state.patients.length;
  const totalOrders = state.patients.reduce((sum, patient) => {
    return sum + patient.cart.reduce((cartSum, entry) => cartSum + entry.quantity, 0);
  }, 0);
  const totalAmount = state.patients.reduce((sum, patient) => sum + getPatientTotal(patient), 0);

  elements.statPatients.textContent = String(totalPatients);
  elements.statOrders.textContent = String(totalOrders);
  elements.statTotal.textContent = `NT$${totalAmount}`;
}

function addProductToActivePatient(productName) {
  if (!ensureDateEditable()) return;
  const patient = getActivePatient();
  const product = findProduct(productName);

  if (!patient || !product || product.outOfStock) {
    return;
  }

  const existing = patient.cart.find((entry) => entry.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    patient.cart.push({ ...product, quantity: 1 });
  }

  markPatientUpdated(patient);
  persist();
  render();
}

function addCustomItemToActivePatient() {
  if (!ensureDateEditable()) return;
  const patient = getActivePatient();
  if (!patient) {
    return;
  }

  const name = elements.customItemName.value.trim();
  const price = Number(elements.customItemPrice.value || 0);
  if (!name || price <= 0) {
    return;
  }

  const existing = patient.cart.find((entry) => entry.name === name && entry.price === price);
  if (existing) {
    existing.quantity += 1;
  } else {
    patient.cart.push({ name, price, category: "其他", quantity: 1 });
  }

  markPatientUpdated(patient);
  elements.customItemForm.reset();
  persist();
  render();
}

function importRosterFromText() {
  const records = parseRosterText(elements.rosterImportText.value);
  if (!records.length) {
    showToast("找不到可匯入的床號與姓名。", "warning");
    return;
  }

  const patientByBed = new Map(state.patientDirectory.map((patient) => [normalizeBed(patient.bed), patient]));
  let added = 0;
  let updated = 0;

  records.forEach((record) => {
    const bedKey = normalizeBed(record.bed);
    const existing = patientByBed.get(bedKey);
    if (existing) {
      existing.bed = record.bed;
      existing.name = record.name;
      if (record.balance !== null) existing.balance = record.balance;
      if (record.shoppingLimit !== null) existing.shoppingLimit = record.shoppingLimit;
      existing.updatedAt = new Date().toISOString();
      const dailyPatient = state.patients.find((patient) => patient.id === existing.id);
      if (dailyPatient) {
        dailyPatient.bed = existing.bed;
        dailyPatient.name = existing.name;
        if (record.balance !== null) dailyPatient.balance = record.balance;
        if (record.shoppingLimit !== null) dailyPatient.shoppingLimit = record.shoppingLimit;
        markPatientUpdated(dailyPatient);
      }
      updated += 1;
      return;
    }

    const patient = {
      id: crypto.randomUUID(),
      bed: record.bed,
      name: record.name,
      balance: record.balance ?? 0,
      shoppingLimit: record.shoppingLimit ?? 100,
      updatedAt: new Date().toISOString()
    };
    state.patientDirectory.push(patient);
    patientByBed.set(bedKey, patient);
    added += 1;
  });

  sortPatientDirectory();
  elements.rosterImportText.value = "";
  persist();
  render();
  showToast(`名單已處理：新增 ${added} 人、更新 ${updated} 人。`);
}

function parseRosterText(sourceText) {
  const recordMap = new Map();
  String(sourceText || "").split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || /^\|?\s*[-:]+/.test(line)) return;

    let fields;
    if (line.includes("|")) {
      fields = line.replace(/^\||\|$/g, "").split("|");
    } else if (line.includes("\t")) {
      fields = line.split("\t");
    } else {
      fields = line.split(",");
    }
    fields = fields.map((field) => field.trim());

    const bedIndex = fields.findIndex((field) => /^P\d+-\d+$/i.test(field));
    if (bedIndex < 0) return;
    const bed = fields[bedIndex].toUpperCase();
    const name = maskPatientName(fields[bedIndex + 1] || "");
    if (!name || /姓名|---/.test(name)) return;

    const balance = parseOptionalAmount(fields[bedIndex + 2]);
    const shoppingLimit = parseOptionalAmount(fields[bedIndex + 3]);
    recordMap.set(normalizeBed(bed), { bed, name, balance, shoppingLimit });
  });
  return [...recordMap.values()];
}

function parseOptionalAmount(value) {
  if (value === undefined || value === null || String(value).trim() === "") return null;
  const amount = Number(String(value).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(amount) && amount >= 0 ? Math.floor(amount) : null;
}

function normalizeBed(bed) {
  return String(bed || "").trim().toUpperCase();
}

function maskPatientName(value) {
  const characters = Array.from(String(value || "").trim());
  if (characters.length <= 1) return characters.join("");
  if (characters.length === 2) return `${characters[0]}X`;
  return `${characters[0]}${"X".repeat(characters.length - 2)}${characters.at(-1)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyInitialRoster() {
  if (Number(state.rosterVersion || 0) >= rosterVersion) return false;

  const patientByBed = new Map(state.patientDirectory.map((patient) => [normalizeBed(patient.bed), patient]));
  const migrationTime = new Date().toISOString();

  initialRoster.forEach((record) => {
    const bedKey = normalizeBed(record.bed);
    const existing = patientByBed.get(bedKey);
    if (existing) {
      existing.bed = record.bed;
      existing.name = record.name;
      existing.shoppingLimit = record.shoppingLimit;
      existing.updatedAt = migrationTime;
      return;
    }

    const patient = {
      id: `roster-${bedKey.toLowerCase()}`,
      bed: record.bed,
      name: record.name,
      balance: 0,
      shoppingLimit: record.shoppingLimit,
      updatedAt: migrationTime
    };
    state.patientDirectory.push(patient);
    patientByBed.set(bedKey, patient);
  });

  sortPatientDirectory();
  state.rosterVersion = rosterVersion;
  return true;
}

function updateCartItem(productName, action, value) {
  const patient = getActivePatient();
  if (!patient) {
    return;
  }

  const index = patient.cart.findIndex((entry) => entry.name === productName);
  if (index < 0) {
    return;
  }

  if (action === "increase") {
    patient.cart[index].quantity += 1;
  }

  if (action === "decrease") {
    patient.cart[index].quantity -= 1;
    if (patient.cart[index].quantity <= 0) {
      patient.cart.splice(index, 1);
    }
  }

  if (action === "remove") {
    patient.cart.splice(index, 1);
  }

  if (action === "set-quantity") {
    const nextValue = Number(value || 0);
    if (!Number.isFinite(nextValue) || nextValue <= 0) {
      patient.cart.splice(index, 1);
    } else {
      patient.cart[index].quantity = Math.floor(nextValue);
    }
  }

  markPatientUpdated(patient);
  persist();
  render();
}

function getPatientTotal(patient) {
  return patient.cart.reduce((sum, entry) => sum + entry.price * entry.quantity, 0);
}

function getPatientLimitTotal(patient) {
  return patient.cart.reduce((sum, entry) => {
    const category = entry.category || getProductCategory(entry.name);
    return limitExemptCategories.has(category)
      ? sum
      : sum + Number(entry.price || 0) * Number(entry.quantity || 0);
  }, 0);
}

function getPatientLimit(patient) {
  const limit = Number(patient?.shoppingLimit);
  return Number.isFinite(limit) && limit >= 0 ? limit : Number(state.session.budgetLimit || 0);
}

function markPatientUpdated(patient) {
  patient.updatedAt = new Date().toISOString();
}

function getActivePatient() {
  return state.patients.find((patient) => patient.id === state.activePatientId) || null;
}

function normalizeActivePatient() {
  if (state.patients.length === 0) {
    state.activePatientId = null;
    return;
  }

  const activeExists = state.patients.some((patient) => patient.id === state.activePatientId);
  if (!activeExists) {
    state.activePatientId = state.patients[0].id;
  }
}

function normalizeState() {
  state = mergeState(state);

  if (!state.completedPurchases || typeof state.completedPurchases !== "object") {
    state.completedPurchases = {};
  }

  if (!state.completedDistribution || typeof state.completedDistribution !== "object") {
    state.completedDistribution = {};
  }

  const nextThreshold = Number(state.session.monthlyAlertThreshold);
  state.session.monthlyAlertThreshold = Number.isFinite(nextThreshold)
    ? Math.max(0, Math.floor(nextThreshold))
    : defaultMonthlyAlertThreshold;

  normalizeActivePatient();
}

function findProduct(productName) {
  for (const group of products) {
    const match = group.items.find((item) => item.name === productName);
    if (match) {
      return { ...match, category: group.category };
    }
  }
  return null;
}

function getProductCategory(productName) {
  for (const group of products) {
    if (group.items.some((item) => item.name === productName)) return group.category;
  }
  return "其他";
}

function formatSessionTitle() {
  return `${state.session.date || "未設定日期"} 採買總表`;
}

function exportCsv() {
  const rows = [["類型", "床號", "姓名", "品項", "單價", "數量", "小計"]];

  state.patients.forEach((patient) => {
    patient.cart.forEach((entry) => {
      rows.push([
        "病人清單",
        patient.bed,
        patient.name,
        entry.name,
        String(entry.price),
        String(entry.quantity),
        String(entry.price * entry.quantity)
      ]);
    });
  });

  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll("\"", "\"\"")}"`).join(","))
    .join("\n");

  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.session.date || "shopping"}-採買清單.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getDischargePatientOptions() {
  const patientMap = new Map(state.patientDirectory.map((patient) => [patient.id, patient]));
  Object.values(state.dailySessions || {}).forEach((daily) => {
    (daily.patients || []).forEach((patient) => {
      if (!patientMap.has(patient.id)) patientMap.set(patient.id, patient);
    });
  });
  return [...patientMap.values()].sort((left, right) =>
    normalizeBed(left.bed).localeCompare(normalizeBed(right.bed), "zh-Hant", { numeric: true }));
}

function getPatientSessionDates(patientId) {
  return Object.entries(state.dailySessions || {})
    .filter(([, daily]) => (daily.patients || []).some((patient) => patient.id === patientId &&
      (patient.cart?.length || Number(patient.confirmedTotal || 0) > 0)))
    .map(([date]) => date)
    .sort();
}

function setDischargeDateRangeForPatient(patientId) {
  const dates = getPatientSessionDates(patientId);
  elements.dischargeStartDate.value = dates[0] || state.session.date || getTodayDate();
  elements.dischargeEndDate.value = dates.at(-1) || state.session.date || getTodayDate();
}

function buildDischargeSummary() {
  const patientId = elements.dischargePatientSelect.value;
  const startDate = elements.dischargeStartDate.value || "0000-01-01";
  const endDate = elements.dischargeEndDate.value || "9999-12-31";
  const directoryPatient = getDirectoryPatient(patientId);
  const rows = [];

  Object.entries(state.dailySessions || {})
    .filter(([date]) => date >= startDate && date <= endDate)
    .sort(([left], [right]) => left.localeCompare(right))
    .forEach(([date, daily]) => {
      const patient = (daily.patients || []).find((entry) => entry.id === patientId);
      if (!patient || (!patient.cart?.length && !Number(patient.confirmedTotal || 0))) return;
      const total = getPatientTotal(patient);
      const items = (patient.cart || []).map((entry) => `${entry.name}×${entry.quantity}`).join("、") || "購物紀錄";
      rows.push({
        date,
        bed: patient.bed,
        name: patient.name,
        items,
        total,
        balanceAfter: Number(patient.balance || 0) - total
      });
    });

  const fallbackPatient = getDischargePatientOptions().find((patient) => patient.id === patientId);
  const patient = directoryPatient || fallbackPatient || null;
  const totalSpent = rows.reduce((sum, row) => sum + row.total, 0);
  const currentBalance = directoryPatient
    ? Number(directoryPatient.balance || 0)
    : (rows.at(-1)?.balanceAfter ?? Number(patient?.balance || 0));
  return { patient, startDate, endDate, rows, totalSpent, currentBalance };
}

function renderDischargeSummary() {
  const options = getDischargePatientOptions();
  const previousId = elements.dischargePatientSelect.value;
  const selectedId = options.some((patient) => patient.id === previousId)
    ? previousId
    : (options.some((patient) => patient.id === state.activePatientId) ? state.activePatientId : options[0]?.id || "");
  elements.dischargePatientSelect.innerHTML = options.length
    ? options.map((patient) => `<option value="${escapeHtml(patient.id)}" ${patient.id === selectedId ? "selected" : ""}>${escapeHtml(patient.bed)}床 ${escapeHtml(patient.name)}</option>`).join("")
    : '<option value="">尚無病人資料</option>';

  if (!elements.dischargeStartDate.value && selectedId) setDischargeDateRangeForPatient(selectedId);
  const summary = buildDischargeSummary();
  elements.printDischargeReport.disabled = !summary.rows.length;
  if (!summary.patient || !summary.rows.length) {
    elements.dischargeSummary.className = "summary-list empty-state";
    elements.dischargeSummary.textContent = "所選期間沒有此病人的購物資料。";
    return;
  }

  elements.dischargeSummary.className = "discharge-summary";
  elements.dischargeSummary.innerHTML = `
    <div class="discharge-totals">
      <article><strong>${escapeHtml(summary.patient.bed)}床 ${escapeHtml(summary.patient.name)}</strong><span>${summary.startDate}～${summary.endDate}</span></article>
      <article><strong>期間購物總額</strong><span>NT$${summary.totalSpent}</span></article>
      <article><strong>目前零用金餘額</strong><span>NT$${summary.currentBalance}</span></article>
    </div>
    <div class="discharge-table-wrap"><table class="discharge-table">
      <thead><tr><th>日期</th><th>每日購買品項</th><th>支出</th><th>購後餘額</th></tr></thead>
      <tbody>${summary.rows.map((row) => `<tr><td>${row.date}</td><td>${escapeHtml(row.items)}</td><td>NT$${row.total}</td><td>NT$${row.balanceAfter}</td></tr>`).join("")}</tbody>
    </table></div>`;
}

function renderDischargePrintSheet(summary) {
  elements.printSheet.innerHTML = `
    <header class="print-header">
      <h1>住院期間購物與零用金餘額確認表</h1>
      <p>病人：${escapeHtml(summary.patient.bed)}床 ${escapeHtml(summary.patient.name)}　統計期間：${summary.startDate}～${summary.endDate}</p>
    </header>
    <section>
      <table class="print-discharge-table"><thead><tr><th>日期</th><th>每日購買品項</th><th>支出</th><th>購後餘額</th></tr></thead>
      <tbody>${summary.rows.map((row) => `<tr><td>${row.date}</td><td class="print-items">${escapeHtml(row.items)}</td><td>NT$${row.total}</td><td>NT$${row.balanceAfter}</td></tr>`).join("")}</tbody>
      <tfoot><tr><th colspan="2">住院期間購物總額</th><th colspan="2">NT$${summary.totalSpent}</th></tr><tr><th colspan="2">目前零用金餘額</th><th colspan="2">NT$${summary.currentBalance}</th></tr></tfoot>
      </table>
    </section>
    <p class="print-confirmation">本人已確認上述購物紀錄及零用金剩餘金額無誤。</p>
    <footer class="print-signatures discharge-signatures"><span>病人簽名：________________</span><span>護理人員：________________</span><span>日期：____年____月____日</span></footer>`;
}

function exportWeeklyCsv() {
  const referenceDate = elements.weekReferenceDate.value || state.session.date || getTodayDate();
  const range = getWeekRange(referenceDate);
  const logs = getLogsInRange(range.start, range.end);
  const summary = buildPeriodSummary(logs);
  if (!logs.length) {
    window.alert("此週沒有可匯出的消費資料。");
    return;
  }

  const label = `${range.start}~${range.end}`;
  const rows = buildPeriodCsvRows("週報", label, logs, summary);
  downloadCsv(rows, `${range.start}-週報.csv`);
}

function exportMonthlyCsv() {
  const monthValue = elements.monthReference.value || toMonthValue(state.session.date || getTodayDate());
  const range = getMonthRange(monthValue);
  const logs = getLogsInRange(range.start, range.end);
  const summary = buildPeriodSummary(logs);
  if (!logs.length) {
    window.alert("此月份沒有可匯出的消費資料。");
    return;
  }

  const rows = buildPeriodCsvRows("月報", monthValue, logs, summary);
  downloadCsv(rows, `${monthValue}-月報.csv`);
}

function exportYearlyCsv() {
  const yearValue = getYearReference();
  const range = getYearRange(yearValue);
  const logs = getLogsInRange(range.start, range.end);
  const summary = buildPeriodSummary(logs);
  if (!logs.length) {
    window.alert("此年度沒有可匯出的消費資料。");
    return;
  }

  const rows = buildPeriodCsvRows("年報", yearValue, logs, summary);
  downloadCsv(rows, `${yearValue}-年報.csv`);
}

function renderPeriodReports() {
  const weekReferenceDate = elements.weekReferenceDate.value || state.session.date || getTodayDate();
  const weekRange = getWeekRange(weekReferenceDate);
  const weeklyLogs = getLogsInRange(weekRange.start, weekRange.end);
  const weeklySummary = buildPeriodSummary(weeklyLogs);

  if (!weeklyLogs.length) {
    elements.weeklySummary.className = "summary-list empty-state";
    elements.weeklySummary.textContent = `本週（${weekRange.start}~${weekRange.end}）尚無資料。`;
  } else {
    elements.weeklySummary.className = "summary-list";
    elements.weeklySummary.innerHTML = buildPeriodSummaryMarkup("週", `${weekRange.start}~${weekRange.end}`, weeklySummary);
  }

  const monthValue = elements.monthReference.value || toMonthValue(state.session.date || getTodayDate());
  const monthRange = getMonthRange(monthValue);
  const monthlyLogs = getLogsInRange(monthRange.start, monthRange.end);
  const monthlySummary = buildPeriodSummary(monthlyLogs);

  if (!monthlyLogs.length) {
    elements.monthlySummary.className = "summary-list empty-state";
    elements.monthlySummary.textContent = `本月（${monthValue}）尚無資料。`;
  } else {
    elements.monthlySummary.className = "summary-list";
    elements.monthlySummary.innerHTML = buildPeriodSummaryMarkup("月", monthValue, monthlySummary, getMonthlyAlertThreshold());
  }

  const yearValue = getYearReference();
  const yearRange = getYearRange(yearValue);
  const yearlyLogs = getLogsInRange(yearRange.start, yearRange.end);
  const yearlySummary = buildPeriodSummary(yearlyLogs);

  if (!yearlyLogs.length) {
    elements.yearlySummary.className = "summary-list empty-state";
    elements.yearlySummary.textContent = `本年度（${yearValue}）尚無資料。`;
  } else {
    elements.yearlySummary.className = "summary-list";
    elements.yearlySummary.innerHTML = buildPeriodSummaryMarkup("年", yearValue, yearlySummary);
  }
}

function getYearReference() {
  const fallback = Number((state.session.date || getTodayDate()).slice(0, 4));
  const value = Number(elements.yearReference?.value || fallback);
  return String(Number.isInteger(value) && value >= 2020 && value <= 2100 ? value : fallback);
}

function getMonthlyAlertThreshold() {
  const rawValue = Number(elements.monthAlertThreshold?.value || state.session.monthlyAlertThreshold || defaultMonthlyAlertThreshold);
  if (!Number.isFinite(rawValue) || rawValue < 0) {
    return defaultMonthlyAlertThreshold;
  }

  return Math.floor(rawValue);
}

function buildPeriodSummaryMarkup(reportType, periodLabel, summary, alertThreshold = 0) {
  const topPatients = summary.patients.slice(0, 8);
  const isMonthly = reportType === "月";
  const alertPatients = isMonthly
    ? summary.patients.filter((patient) => patient.total > alertThreshold)
    : [];
  const patientCards = topPatients
    .map((patient) => {
      const isAlert = isMonthly && patient.total > alertThreshold;
      return `
        <article class="summary-card compact ${isAlert ? "is-alert" : ""}">
          <div class="summary-header">
            <div>
              <strong>${patient.bed}床 ${patient.name}</strong>
              <div class="summary-meta">
                ${reportType}內累計 ${patient.itemsCount} 件
                ${isAlert ? `<span class="alert-text">，已超過 NT$${alertThreshold}</span>` : ""}
              </div>
            </div>
            <span class="tag">NT$${patient.total}</span>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <article class="summary-card">
      <div class="summary-header">
        <div>
          <strong>${reportType}報期間：${periodLabel}</strong>
          <div class="summary-meta">
            ${summary.daysCount} 天有消費資料，${summary.patients.length} 位病人
            ${isMonthly ? `，超過門檻 ${alertPatients.length} 位` : ""}
          </div>
        </div>
        <span class="tag">合計 NT$${summary.totalAmount}</span>
      </div>
    </article>
    ${patientCards}
  `;
}

function buildPeriodSummary(logs) {
  const patientMap = new Map();
  let totalAmount = 0;

  logs.forEach((log) => {
    totalAmount += Number(log.totalAmount || 0);
    (log.patientTotals || []).forEach((entry) => {
      const key = `${entry.bed}|${entry.name}`;
      const existing = patientMap.get(key) || {
        bed: entry.bed,
        name: entry.name,
        total: 0,
        itemsCount: 0
      };
      existing.total += Number(entry.total || 0);
      existing.itemsCount += Number(entry.itemsCount || 0);
      patientMap.set(key, existing);
    });
  });

  return {
    totalAmount,
    daysCount: logs.length,
    patients: [...patientMap.values()].sort((left, right) => right.total - left.total)
  };
}

function buildPeriodCsvRows(reportType, periodLabel, logs, summary) {
  const isMonthly = reportType === "月報";
  const monthlyThreshold = getMonthlyAlertThreshold();
  const rows = [["報表類型", "期間", "日期", "床號", "姓名", "消費總額", "件數", "超過門檻"]];
  rows.push([reportType, periodLabel, "期間合計", "", "", String(summary.totalAmount), "", ""]);

  summary.patients.forEach((patient) => {
    const isAlert = isMonthly && patient.total > monthlyThreshold;
    rows.push([
      reportType,
      periodLabel,
      "病人期間合計",
      patient.bed,
      patient.name,
      String(patient.total),
      String(patient.itemsCount),
      isAlert ? "是" : "否"
    ]);
  });

  rows.push(["", "", "", "", "", "", "", ""]);
  rows.push(["報表類型", "期間", "日期", "床號", "姓名", "每日消費", "每日件數", "超過門檻"]);

  logs.forEach((log) => {
    (log.patientTotals || []).forEach((entry) => {
      const isAlert = isMonthly && Number(entry.total) > monthlyThreshold;
      rows.push([
        reportType,
        periodLabel,
        log.date,
        entry.bed,
        entry.name,
        String(entry.total),
        String(entry.itemsCount),
        isAlert ? "是" : "否"
      ]);
    });
  });

  return rows;
}

function downloadCsv(rows, fileName) {
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replaceAll("\"", "\"\"")}"`).join(","))
    .join("\n");

  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function syncCurrentSessionToHistory() {
  const nextDate = state.session.date || getTodayDate();
  const patientTotals = state.patients
    .map((patient) => ({
      patientId: patient.id,
      bed: patient.bed,
      name: patient.name,
      total: getPatientTotal(patient),
      itemsCount: patient.cart.reduce((sum, entry) => sum + entry.quantity, 0)
    }))
    .filter((entry) => entry.total > 0 || entry.itemsCount > 0);

  const totalAmount = patientTotals.reduce((sum, entry) => sum + entry.total, 0);
  const logs = Array.isArray(state.historyLogs) ? [...state.historyLogs] : [];
  const existingIndex = logs.findIndex((entry) => entry.date === nextDate);

  if (!patientTotals.length) {
    return;
  }

  const nextContent = {
    date: nextDate,
    note: state.session.note || "",
    totalAmount,
    patientTotals
  };
  const existing = existingIndex >= 0 ? logs[existingIndex] : null;
  const existingContent = existing ? {
    date: existing.date,
    note: existing.note || "",
    totalAmount: Number(existing.totalAmount || 0),
    patientTotals: existing.patientTotals || []
  } : null;
  if (existingContent && JSON.stringify(existingContent) === JSON.stringify(nextContent)) {
    return;
  }

  const nextLog = { ...nextContent, updatedAt: new Date().toISOString() };
  if (existingIndex >= 0) {
    logs[existingIndex] = nextLog;
  } else {
    logs.push(nextLog);
  }

  state.historyLogs = logs.sort((left, right) => left.date.localeCompare(right.date));
}

function getLogsInRange(startDate, endDate) {
  const logs = Array.isArray(state.historyLogs) ? state.historyLogs : [];
  return logs.filter((entry) => entry.date >= startDate && entry.date <= endDate);
}

function getWeekRange(referenceDate) {
  const baseDate = parseInputDate(referenceDate);
  const weekDay = baseDate.getDay();
  const distanceToMonday = weekDay === 0 ? 6 : weekDay - 1;
  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() - distanceToMonday);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  return {
    start: formatDate(startDate),
    end: formatDate(endDate)
  };
}

function getMonthRange(monthValue) {
  const [yearText, monthText] = (monthValue || toMonthValue(getTodayDate())).split("-");
  const year = Number(yearText);
  const month = Number(monthText);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  return {
    start: formatDate(startDate),
    end: formatDate(endDate)
  };
}

function getYearRange(yearValue) {
  const year = Number(yearValue);
  return {
    start: `${year}-01-01`,
    end: `${year}-12-31`
  };
}

function parseInputDate(dateText) {
  if (!dateText) {
    return parseInputDate(getTodayDate());
  }

  const [yearText, monthText, dayText] = dateText.split("-");
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayDate() {
  return formatDate(new Date());
}

function toMonthValue(dateText) {
  return (dateText || getTodayDate()).slice(0, 7);
}

function loadLocalState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) {
      return structuredClone(defaultState);
    }

    const parsed = JSON.parse(saved);
    return mergeState(parsed);
  } catch (error) {
    console.error("無法讀取購物資料", error);
    return structuredClone(defaultState);
  }
}

function persist() {
  if (!isInitialized || !storageAdapter) {
    return;
  }

  saveCurrentDailySession();
  syncCurrentSessionToHistory();
  backupLocalState(state);
  if (saveTimerId) {
    window.clearTimeout(saveTimerId);
  }

  updateSyncBanner(storageAdapter.getBannerState("正在儲存資料..."));
  saveTimerId = window.setTimeout(async () => {
    try {
      const savedState = await storageAdapter.saveState(state);
      if (savedState) {
        state = reconcileSharedState(state, savedState);
        normalizeState();
        backupLocalState(state);
        render();
      }
      updateSyncBanner(storageAdapter.getBannerState());
    } catch (error) {
      console.error("無法同步資料", error);
      updateSyncBanner(storageAdapter.getBannerState("雲端同步失敗，資料已暫存在本機。", "is-warning"));
    }
  }, storageAdapter.mode === "cloud" ? 450 : 0);
}

function backupLocalState(nextState) {
  localStorage.setItem(storageKey, JSON.stringify(mergeState(nextState)));
}

function mergeState(nextState) {
  const parsed = nextState || {};
  const normalizeDirectory = (patient) => ({
    id: patient.id,
    bed: patient.bed || "",
    name: maskPatientName(patient.name),
    balance: Number(patient.balance || 0),
    shoppingLimit: Number.isFinite(Number(patient.shoppingLimit)) ? Math.max(0, Number(patient.shoppingLimit)) : 100,
    updatedAt: patient.updatedAt || ""
  });
  const normalizeStoredDailyPatient = (patient) => ({
    ...normalizeDirectory(patient),
    cart: Array.isArray(patient.cart) ? patient.cart : [],
    confirmedTotal: Number(patient.confirmedTotal || 0),
    confirmedAt: patient.confirmedAt || ""
  });
  const dailySessions = Object.fromEntries(Object.entries(parsed.dailySessions || {}).map(([date, daily]) => [date, {
    date,
    note: daily?.note || "",
    patients: Array.isArray(daily?.patients) ? daily.patients.map(normalizeStoredDailyPatient) : [],
    completedPurchases: { ...(daily?.completedPurchases || {}) },
    completedDistribution: { ...(daily?.completedDistribution || {}) },
    updatedAt: daily?.updatedAt || ""
  }]));
  return {
    ...structuredClone(defaultState),
    ...parsed,
    session: {
      ...defaultState.session,
      ...(parsed.session || {})
    },
    completedPurchases: {
      ...defaultState.completedPurchases,
      ...(parsed.completedPurchases || {})
    },
    completedDistribution: {
      ...defaultState.completedDistribution,
      ...(parsed.completedDistribution || {})
    },
    historyLogs: Array.isArray(parsed.historyLogs)
      ? parsed.historyLogs
          .filter((entry) => entry && typeof entry.date === "string")
          .map((entry) => ({
            date: entry.date,
            note: entry.note || "",
            totalAmount: Number(entry.totalAmount || 0),
            patientTotals: Array.isArray(entry.patientTotals)
              ? entry.patientTotals.map((patient) => ({
                  patientId: patient.patientId || "",
                  bed: patient.bed || "",
                  name: maskPatientName(patient.name),
                  total: Number(patient.total || 0),
                  itemsCount: Number(patient.itemsCount || 0)
                }))
              : [],
            updatedAt: entry.updatedAt || ""
          }))
      : [],
    balanceTransactions: Array.isArray(parsed.balanceTransactions)
      ? parsed.balanceTransactions
          .filter((entry) => entry && entry.id)
          .map((entry) => ({
            id: entry.id,
            patientId: entry.patientId || "",
            bed: entry.bed || "",
            name: maskPatientName(entry.name),
            date: entry.date || "",
            type: entry.type || "deposit",
            amount: Number(entry.amount || 0),
            balanceAfter: Number(entry.balanceAfter || 0),
            note: entry.note || "",
            createdAt: entry.createdAt || ""
          }))
      : [],
    deletedPatients: Object.fromEntries(Object.entries(parsed.deletedPatients || {})
      .filter(([patientId, deletedAt]) => patientId && typeof deletedAt === "string")),
    removedDailyPatients: Object.fromEntries(Object.entries(parsed.removedDailyPatients || {}).map(([date, removals]) => [
      date,
      Object.fromEntries(Object.entries(removals || {})
        .filter(([patientId, deletedAt]) => patientId && typeof deletedAt === "string"))
    ])),
    patients: Array.isArray(parsed.patients)
      ? parsed.patients.map((patient) => ({
          ...patient,
          name: maskPatientName(patient.name),
          shoppingLimit: Number.isFinite(Number(patient.shoppingLimit))
            ? Math.max(0, Number(patient.shoppingLimit))
            : Number(parsed.session?.budgetLimit || defaultState.session.budgetLimit),
          cart: Array.isArray(patient.cart) ? patient.cart : [],
          updatedAt: patient.updatedAt || ""
        }))
      : [],
    patientDirectory: Array.isArray(parsed.patientDirectory)
      ? parsed.patientDirectory.map(normalizeDirectory)
          .filter((patient) => !parsed.deletedPatients?.[patient.id])
      : [],
    dailySessions,
    rosterVersion: Number(parsed.rosterVersion || 0),
    dataVersion: Number(parsed.dataVersion || 0)
  };
}

function reconcileSharedState(localState, remoteState) {
  const local = mergeState(localState);
  const remote = mergeState(remoteState);
  const activeDate = local.session.date || getTodayDate();
  const deletedPatients = { ...remote.deletedPatients };
  Object.entries(local.deletedPatients).forEach(([patientId, deletedAt]) => {
    deletedPatients[patientId] = newerTimestamp(deletedPatients[patientId], deletedAt);
  });
  const directoryMap = new Map(remote.patientDirectory.map((patient) => [patient.id, patient]));

  local.patientDirectory.forEach((patient) => {
    const remotePatient = directoryMap.get(patient.id);
    directoryMap.set(patient.id, remotePatient ? newerEntity(patient, remotePatient) : patient);
  });
  Object.keys(deletedPatients).forEach((patientId) => directoryMap.delete(patientId));

  const removedDailyPatients = structuredClone(remote.removedDailyPatients);
  Object.entries(local.removedDailyPatients).forEach(([date, removals]) => {
    removedDailyPatients[date] ||= {};
    Object.entries(removals).forEach(([patientId, deletedAt]) => {
      removedDailyPatients[date][patientId] = newerTimestamp(removedDailyPatients[date][patientId], deletedAt);
    });
  });

  const dailySessionMap = new Map(Object.entries(remote.dailySessions));
  Object.entries(local.dailySessions).forEach(([date, daily]) => {
    const remoteDaily = dailySessionMap.get(date);
    dailySessionMap.set(date, remoteDaily ? mergeDailySessionEntities(daily, remoteDaily) : daily);
  });
  Object.entries(removedDailyPatients).forEach(([date, removals]) => {
    const daily = dailySessionMap.get(date);
    if (daily) daily.patients = (daily.patients || []).filter((patient) => !removals[patient.id]);
  });
  const dailySessions = Object.fromEntries(dailySessionMap);
  const activeDaily = dailySessions[activeDate] || { note: "", patients: [], completedPurchases: {}, completedDistribution: {} };

  const logMap = new Map(remote.historyLogs.map((log) => [log.date, log]));
  local.historyLogs.forEach((log) => {
    const remoteLog = logMap.get(log.date);
    logMap.set(log.date, remoteLog ? newerEntity(log, remoteLog) : log);
  });

  const transactionMap = new Map(remote.balanceTransactions.map((entry) => [entry.id, entry]));
  local.balanceTransactions.forEach((entry) => transactionMap.set(entry.id, entry));

  const reconciled = mergeState({
    ...remote,
    ...local,
    session: {
      ...newerEntity(local.session, remote.session),
      date: activeDate,
      note: activeDaily.note || ""
    },
    patients: activeDaily.patients || [],
    patientDirectory: [...directoryMap.values()].sort((left, right) =>
      `${left.bed}|${left.name}`.localeCompare(`${right.bed}|${right.name}`, "zh-Hant")
    ),
    dailySessions,
    activePatientId: local.activePatientId,
    completedPurchases: activeDaily.completedPurchases || {},
    completedDistribution: activeDaily.completedDistribution || {},
    historyLogs: [...logMap.values()].sort((left, right) => left.date.localeCompare(right.date)),
    balanceTransactions: [...transactionMap.values()],
    deletedPatients,
    removedDailyPatients,
    rosterVersion: Math.max(Number(local.rosterVersion || 0), Number(remote.rosterVersion || 0)),
    dataVersion: Math.max(Number(local.dataVersion || 0), Number(remote.dataVersion || 0))
  });
  if (!reconciled.patients.some((patient) => patient.id === reconciled.activePatientId)) {
    reconciled.activePatientId = reconciled.patients[0]?.id || null;
  }
  return reconciled;
}

function mergeDailySessionEntities(localDaily, remoteDaily) {
  const patientMap = new Map((remoteDaily.patients || []).map((patient) => [patient.id, patient]));
  (localDaily.patients || []).forEach((patient) => {
    const remotePatient = patientMap.get(patient.id);
    patientMap.set(patient.id, remotePatient ? newerEntity(patient, remotePatient) : patient);
  });
  const newer = newerEntity(localDaily, remoteDaily);
  return {
    ...newer,
    patients: [...patientMap.values()].sort((left, right) =>
      normalizeBed(left.bed).localeCompare(normalizeBed(right.bed), "zh-Hant", { numeric: true })
    ),
    completedPurchases: { ...(remoteDaily.completedPurchases || {}), ...(localDaily.completedPurchases || {}) },
    completedDistribution: { ...(remoteDaily.completedDistribution || {}), ...(localDaily.completedDistribution || {}) },
    updatedAt: newerTimestamp(localDaily.updatedAt, remoteDaily.updatedAt)
  };
}

function newerEntity(localEntity, remoteEntity) {
  const localTime = String(localEntity?.updatedAt || localEntity?.createdAt || "");
  const remoteTime = String(remoteEntity?.updatedAt || remoteEntity?.createdAt || "");
  return localTime > remoteTime ? localEntity : remoteEntity;
}

function refreshCurrentHistoryLog(targetState) {
  const date = targetState.session.date || getTodayDate();
  const patientTotals = targetState.patients.map((patient) => ({
    patientId: patient.id,
    bed: patient.bed,
    name: patient.name,
    total: patient.cart.reduce((sum, entry) => sum + Number(entry.price || 0) * Number(entry.quantity || 0), 0),
    itemsCount: patient.cart.reduce((sum, entry) => sum + Number(entry.quantity || 0), 0)
  })).filter((entry) => entry.total > 0 || entry.itemsCount > 0);
  const logIndex = targetState.historyLogs.findIndex((log) => log.date === date);

  if (!patientTotals.length) {
    if (logIndex >= 0) targetState.historyLogs.splice(logIndex, 1);
    return;
  }

  const latestUpdate = targetState.patients.reduce((latest, patient) =>
    String(patient.updatedAt || "") > latest ? String(patient.updatedAt) : latest,
  String(targetState.session.updatedAt || ""));
  const log = {
    date,
    note: targetState.session.note || "",
    totalAmount: patientTotals.reduce((sum, entry) => sum + entry.total, 0),
    patientTotals,
    updatedAt: latestUpdate || new Date().toISOString()
  };
  if (logIndex >= 0) targetState.historyLogs[logIndex] = log;
  else targetState.historyLogs.push(log);
  targetState.historyLogs.sort((left, right) => left.date.localeCompare(right.date));
}

async function buildStorageAdapter() {
  const localAdapter = createLocalStorageAdapter();
  if (syncConfig.provider !== "supabase") {
    return localAdapter;
  }

  if (!syncConfig.supabaseUrl || !syncConfig.supabaseAnonKey) {
    return createLocalStorageAdapter("雲端同步未設定，已退回本機模式。");
  }

  const createClient = window.supabase?.createClient;
  if (typeof createClient !== "function") {
    return createLocalStorageAdapter("無法載入雲端同步元件，已退回本機模式。", "is-warning");
  }

  return createSupabaseStorageAdapter(createClient, localAdapter);
}

function createLocalStorageAdapter(message = "目前資料只存在本機瀏覽器。", tone = "") {
  return {
    mode: "local",
    async loadState() {
      return loadLocalState();
    },
    async saveState(nextState) {
      backupLocalState(nextState);
    },
    getBannerState(overrideMessage, overrideTone) {
      return {
        title: "同步模式：本機",
        message: overrideMessage || message,
        tone: overrideTone || tone
      };
    }
  };
}

function createSupabaseStorageAdapter(createClient, localAdapter) {
  const client = createClient(syncConfig.supabaseUrl, syncConfig.supabaseAnonKey);
  let lastRemoteUpdatedAt = "";

  async function fetchRow() {
    const { data, error } = await client
      .from("shared_sessions")
      .select("payload, updated_at")
      .eq("ward_id", syncConfig.wardId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }

  async function upsertRemote(mergedState) {
    const updatedAt = new Date().toISOString();
    const { error } = await client.from("shared_sessions").upsert(
      {
        ward_id: syncConfig.wardId,
        payload: mergedState,
        updated_at: updatedAt
      },
      { onConflict: "ward_id" }
    );

    if (error) {
      throw error;
    }

    lastRemoteUpdatedAt = updatedAt;
  }

  async function saveRemote(nextState) {
    const remoteBeforeSave = await fetchRow();
    let mergedState = remoteBeforeSave?.payload
      ? reconcileSharedState(nextState, remoteBeforeSave.payload)
      : mergeState(nextState);
    await upsertRemote(mergedState);

    const remoteAfterSave = await fetchRow();
    if (remoteAfterSave?.payload) {
      const verifiedState = reconcileSharedState(mergedState, remoteAfterSave.payload);
      if (JSON.stringify(verifiedState) !== JSON.stringify(mergeState(remoteAfterSave.payload))) {
        mergedState = verifiedState;
        await upsertRemote(mergedState);
      } else {
        mergedState = verifiedState;
      }
    }

    backupLocalState(mergedState);
    return mergedState;
  }

  return {
    mode: "cloud",
    async loadState() {
      const localState = loadLocalState();

      try {
        const remoteRow = await fetchRow();
        if (remoteRow?.payload) {
          lastRemoteUpdatedAt = remoteRow.updated_at || "";
          const reconciledState = reconcileSharedState(localState, remoteRow.payload);
          backupLocalState(reconciledState);
          return reconciledState;
        }

        if (localState.patientDirectory.length > 0 || Object.keys(localState.dailySessions).length > 0) {
          await saveRemote(localState);
          return localState;
        }

        return localState;
      } catch (error) {
        console.error("無法載入雲端資料", error);
        return localState;
      }
    },
    async saveState(nextState) {
      return saveRemote(nextState);
    },
    async fetchRemoteState() {
      try {
        const remoteRow = await fetchRow();
        if (!remoteRow?.payload) {
          return null;
        }

        lastRemoteUpdatedAt = remoteRow.updated_at || lastRemoteUpdatedAt;
        return mergeState(remoteRow.payload);
      } catch (error) {
        console.error("無法重新整理雲端資料", error);
        return null;
      }
    },
    startPolling(onRemoteState) {
      return window.setInterval(async () => {
        try {
          const remoteRow = await fetchRow();
          if (!remoteRow?.payload) {
            return;
          }

          if (remoteRow.updated_at && remoteRow.updated_at === lastRemoteUpdatedAt) {
            return;
          }

          lastRemoteUpdatedAt = remoteRow.updated_at || lastRemoteUpdatedAt;
          onRemoteState(remoteRow.payload);
        } catch (error) {
          console.error("雲端輪詢失敗", error);
        }
      }, syncConfig.pollIntervalMs);
    },
    getBannerState(overrideMessage, overrideTone) {
      const timestamp = lastRemoteUpdatedAt
        ? `上次同步 ${new Date(lastRemoteUpdatedAt).toLocaleTimeString("zh-TW", { hour12: false })}`
        : "已連線到雲端共享資料。";
      return {
        title: `同步模式：雲端共享（${syncConfig.wardId}）`,
        message: overrideMessage || timestamp,
        tone: overrideTone || "is-cloud"
      };
    }
  };
}
