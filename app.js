const products = [
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
const defaultState = {
  session: {
    date: new Date().toISOString().slice(0, 10),
    budgetLimit: 100,
    note: ""
  },
  patients: [],
  activePatientId: null,
  completedPurchases: {},
  completedDistribution: {}
};

let state = loadState();
let catalogState = {
  category: products[0]?.category || "",
  subGroup: "all"
};

const elements = {
  shoppingDate: document.querySelector("#shopping-date"),
  budgetLimit: document.querySelector("#budget-limit"),
  sessionNote: document.querySelector("#session-note"),
  patientForm: document.querySelector("#patient-form"),
  patientBed: document.querySelector("#patient-bed"),
  patientName: document.querySelector("#patient-name"),
  patientBalance: document.querySelector("#patient-balance"),
  patientSelector: document.querySelector("#patient-selector"),
  patientOverview: document.querySelector("#patient-overview"),
  categoryNav: document.querySelector("#category-nav"),
  subcategoryNav: document.querySelector("#subcategory-nav"),
  productSearch: document.querySelector("#product-search"),
  customItemForm: document.querySelector("#custom-item-form"),
  customItemName: document.querySelector("#custom-item-name"),
  customItemPrice: document.querySelector("#custom-item-price"),
  catalogGroups: document.querySelector("#catalog-groups"),
  cartItems: document.querySelector("#cart-items"),
  aggregateSummary: document.querySelector("#aggregate-summary"),
  distributionList: document.querySelector("#distribution-list"),
  exportCsv: document.querySelector("#export-csv"),
  printReport: document.querySelector("#print-report"),
  statPatients: document.querySelector("#stat-patients"),
  statOrders: document.querySelector("#stat-orders"),
  statTotal: document.querySelector("#stat-total")
};

initialize();

function initialize() {
  normalizeState();
  bindSessionForm();
  bindPatientForm();
  bindPatientOverviewInteraction();
  bindToolbar();
  bindCatalogInteraction();
  bindCartInteraction();
  bindReportInteraction();
  render();
}

function bindSessionForm() {
  elements.shoppingDate.value = state.session.date;
  elements.budgetLimit.value = state.session.budgetLimit;
  elements.sessionNote.value = state.session.note;

  [elements.shoppingDate, elements.budgetLimit, elements.sessionNote].forEach((input) => {
    input.addEventListener("input", () => {
      state.session.date = elements.shoppingDate.value;
      state.session.budgetLimit = Number(elements.budgetLimit.value || 0);
      state.session.note = elements.sessionNote.value.trim();
      persist();
      render();
    });
  });
}

function bindPatientForm() {
  elements.patientForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const patient = {
      id: crypto.randomUUID(),
      bed: elements.patientBed.value.trim(),
      name: elements.patientName.value.trim(),
      balance: Number(elements.patientBalance.value || 0),
      cart: []
    };

    state.patients.push(patient);
    state.activePatientId = patient.id;
    elements.patientForm.reset();
    elements.patientBalance.value = state.session.budgetLimit || 100;
    persist();
    render();
  });
}

function bindPatientOverviewInteraction() {
  elements.patientOverview.addEventListener("submit", (event) => {
    const form = event.target.closest("#edit-patient-form");
    if (!form) {
      return;
    }

    event.preventDefault();
    const patient = getActivePatient();
    if (!patient) {
      return;
    }

    const bed = form.querySelector("#edit-patient-bed")?.value.trim() || "";
    const name = form.querySelector("#edit-patient-name")?.value.trim() || "";
    const balance = Number(form.querySelector("#edit-patient-balance")?.value || 0);
    if (!bed || !name || balance < 0) {
      return;
    }

    patient.bed = bed;
    patient.name = name;
    patient.balance = balance;
    persist();
    render();
  });
}

function bindToolbar() {
  elements.patientSelector.addEventListener("change", (event) => {
    state.activePatientId = event.target.value;
    persist();
    render();
  });

  elements.productSearch.addEventListener("input", () => {
    renderCatalog();
  });

  elements.customItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomItemToActivePatient();
  });

  elements.exportCsv.addEventListener("click", () => {
    exportCsv();
  });

  elements.printReport.addEventListener("click", () => {
    window.print();
  });
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

    addProductToActivePatient(card.dataset.productName);
  });
}

function bindCartInteraction() {
  elements.cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button || !elements.cartItems.contains(button)) {
      return;
    }

    updateCartItem(button.dataset.productName, button.dataset.action);
  });

  elements.cartItems.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-action='set-quantity']");
    if (!input || !elements.cartItems.contains(input)) {
      return;
    }

    updateCartItem(input.dataset.productName, "set-quantity", input.value);
  });
}

function bindReportInteraction() {
  elements.aggregateSummary.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-purchase-name]");
    if (!checkbox) {
      return;
    }

    const productName = checkbox.dataset.purchaseName;
    state.completedPurchases[productName] = checkbox.checked;
    persist();
    renderReports();
  });

  elements.distributionList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-distribution-id]");
    if (!checkbox) {
      return;
    }

    const patientId = checkbox.dataset.distributionId;
    state.completedDistribution[patientId] = checkbox.checked;
    persist();
    renderReports();
  });
}

function render() {
  renderPatientSelector();
  renderPatientOverview();
  renderCatalogNavigation();
  renderCatalog();
  renderCart();
  renderReports();
  renderHeroStats();
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
    elements.patientOverview.textContent = "請先新增病人。";
    return;
  }

  const total = getPatientTotal(patient);
  const remaining = patient.balance - total;
  const budgetRemaining = state.session.budgetLimit - total;
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
      ${overBudget ? "已超過病人零用金或本次購物上限，請調整品項。" : "目前金額在可支出範圍內。"}
    </p>
    <form id="edit-patient-form" class="patient-edit-form" aria-label="修改病人資料">
      <input id="edit-patient-bed" type="text" maxlength="10" value="${patient.bed}" required />
      <input id="edit-patient-name" type="text" maxlength="30" value="${patient.name}" required />
      <input id="edit-patient-balance" type="number" min="0" step="1" value="${patient.balance}" required />
      <button type="submit" class="secondary-button">更新病人資料</button>
    </form>
  `;
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
      return `<button type="button" class="category-chip ${isActive ? "is-active" : ""}" data-category="${group.category}">${group.category}</button>`;
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
    elements.catalogGroups.innerHTML = '<div class="empty-state">新增病人後即可開始選購。</div>';
    return;
  }

  const activeGroup = products.find((group) => group.category === catalogState.category);
  if (!activeGroup) {
    elements.catalogGroups.innerHTML = '<div class="empty-state">找不到符合的商品。</div>';
    return;
  }

  const filteredItems = activeGroup.items.filter((item) => item.name.toLowerCase().includes(keyword));
  const subGroups = getPriceSubGroups(filteredItems);
  const visibleGroups =
    catalogState.subGroup === "all"
      ? subGroups
      : subGroups.filter((group) => group.key === catalogState.subGroup);

  const sections = visibleGroups
    .map((group) => {
      const cards = group.items
        .map(
          (item) => `
            <button type="button" class="product-card" data-product-name="${item.name}">
              <span class="product-name">${item.name}</span>
              <span class="product-price">NT$${item.price}</span>
            </button>
          `
        )
        .join("");

      return `
        <section class="catalog-group">
          <header>
            <div>
              <h3>${group.label}</h3>
              <p>${activeGroup.description}</p>
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

  if (!patient || patient.cart.length === 0) {
    elements.cartItems.className = "cart-items empty-state";
    elements.cartItems.textContent = patient ? "尚未加入任何商品。" : "請先新增病人。";
    return;
  }

  elements.cartItems.className = "cart-items";
  elements.cartItems.innerHTML = patient.cart
    .map((entry) => {
      const subtotal = entry.price * entry.quantity;
      return `
        <article class="cart-item">
          <div class="cart-item-header">
            <div>
              <strong>${entry.name}</strong>
              <div class="summary-meta">單價 NT$${entry.price}</div>
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
  const patient = getActivePatient();
  const product = findProduct(productName);

  if (!patient || !product) {
    return;
  }

  const existing = patient.cart.find((entry) => entry.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    patient.cart.push({ ...product, quantity: 1 });
  }

  persist();
  render();
}

function addCustomItemToActivePatient() {
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
    patient.cart.push({ name, price, quantity: 1 });
  }

  elements.customItemForm.reset();
  persist();
  render();
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

  persist();
  render();
}

function getPatientTotal(patient) {
  return patient.cart.reduce((sum, entry) => sum + entry.price * entry.quantity, 0);
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
  if (!state.completedPurchases || typeof state.completedPurchases !== "object") {
    state.completedPurchases = {};
  }

  if (!state.completedDistribution || typeof state.completedDistribution !== "object") {
    state.completedDistribution = {};
  }

  normalizeActivePatient();
}

function findProduct(productName) {
  for (const group of products) {
    const match = group.items.find((item) => item.name === productName);
    if (match) {
      return match;
    }
  }
  return null;
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

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) {
      return structuredClone(defaultState);
    }

    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      session: {
        ...defaultState.session,
        ...parsed.session
      },
      completedPurchases: {
        ...defaultState.completedPurchases,
        ...(parsed.completedPurchases || {})
      },
      completedDistribution: {
        ...defaultState.completedDistribution,
        ...(parsed.completedDistribution || {})
      }
    };
  } catch (error) {
    console.error("無法讀取購物資料", error);
    return structuredClone(defaultState);
  }
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}
