(() => {
  const config = window.APP_CONFIG || {};
  const authConfig = config.auth || {};
  const enabled = Boolean(authConfig.enabled);
  const loginScreen = document.querySelector("#login-screen");
  const protectedApp = document.querySelector("#protected-app");
  const loginForm = document.querySelector("#login-form");
  const cardInput = document.querySelector("#login-card-number");
  const passwordInput = document.querySelector("#login-password");
  const loginError = document.querySelector("#login-error");
  const loginSubmit = document.querySelector("#login-submit");
  const togglePassword = document.querySelector("#toggle-password");
  const currentUser = document.querySelector("#current-user");
  const logoutButton = document.querySelector("#logout-button");
  const SESSION_KEY = "psych-shopping-local-auth";
  const AUDIT_KEY = "psych-shopping-local-audit";
  let session = null;
  let profile = null;
  let resolveReady;
  const ready = new Promise((resolve) => { resolveReady = resolve; });

  function normalizeCard(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
  }

  async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function setAuthenticatedView() {
    loginScreen.hidden = true;
    protectedApp.hidden = false;
    currentUser.hidden = false;
    logoutButton.hidden = false;
    currentUser.textContent = `${profile.display_name}｜${profile.role === "admin" ? "管理者" : "工作人員"}`;
  }

  function setLoginView(message = "") {
    protectedApp.hidden = true;
    loginScreen.hidden = false;
    currentUser.hidden = true;
    logoutButton.hidden = true;
    loginError.textContent = message;
    cardInput.focus();
  }

  async function logAction(action, patientId = null, details = {}) {
    if (!enabled || !profile) return;
    const records = JSON.parse(localStorage.getItem(AUDIT_KEY) || "[]");
    records.push({
      at: new Date().toISOString(),
      card_number: profile.card_number,
      display_name: profile.display_name,
      role: profile.role,
      action,
      patient_id: patientId,
      details
    });
    localStorage.setItem(AUDIT_KEY, JSON.stringify(records.slice(-1000)));
  }

  async function logout(message = "您已安全登出。") {
    if (session) await logAction("logout");
    session = null;
    profile = null;
    sessionStorage.removeItem(SESSION_KEY);
    setLoginView(message);
  }

  function acceptUser(user) {
    profile = {
      card_number: user.cardNumber,
      display_name: user.displayName,
      role: user.role === "admin" ? "admin" : "staff",
      ward_id: config.sync?.wardId || "psych-ward-a",
      active: true
    };
    session = { user: { id: `local:${user.cardNumber}` }, created_at: new Date().toISOString() };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ cardNumber: user.cardNumber }));
    setAuthenticatedView();
    return logAction("login");
  }

  function startIdleTimer() {
    const timeoutMs = Math.max(5, Number(authConfig.idleTimeoutMinutes || 30)) * 60 * 1000;
    let timer;
    const reset = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => logout("因閒置時間過長，系統已自動登出。"), timeoutMs);
    };
    ["click", "keydown", "touchstart", "pointerdown"].forEach((eventName) =>
      document.addEventListener(eventName, reset, { passive: true }));
    reset();
  }

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cardNumber = normalizeCard(cardInput.value);
    const users = Array.isArray(authConfig.users) ? authConfig.users : [];
    loginSubmit.disabled = true;
    loginError.textContent = "正在驗證身分…";
    try {
      const passwordHash = await sha256(passwordInput.value);
      const user = users.find((candidate) =>
        normalizeCard(candidate.cardNumber) === cardNumber &&
        candidate.active !== false &&
        candidate.passwordHash === passwordHash);
      if (!user) throw new Error("卡號或密碼錯誤。");
      await acceptUser(user);
      cardInput.value = "";
      passwordInput.value = "";
    } catch (error) {
      passwordInput.value = "";
      loginError.textContent = error.message || "登入失敗，請稍後再試。";
    } finally {
      loginSubmit.disabled = false;
    }
  });

  togglePassword.addEventListener("click", () => {
    const show = passwordInput.type === "password";
    passwordInput.type = show ? "text" : "password";
    togglePassword.textContent = show ? "隱藏" : "顯示";
  });
  logoutButton.addEventListener("click", () => logout());

  window.AUTH_GATE = {
    enabled,
    client: null,
    ready,
    getSession: () => session,
    getProfile: () => profile,
    isAdmin: () => !enabled || profile?.role === "admin",
    logAction,
    logout
  };

  if (!enabled) {
    protectedApp.hidden = false;
    loginScreen.hidden = true;
    resolveReady({ session: null, profile: null });
    return;
  }

  setLoginView();
  try {
    const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    const user = authConfig.users?.find((candidate) =>
      candidate.active !== false && normalizeCard(candidate.cardNumber) === normalizeCard(saved?.cardNumber));
    if (user) acceptUser(user).then(() => resolveReady({ session, profile }));
    else resolveReady({ session: null, profile: null });
  } catch {
    resolveReady({ session: null, profile: null });
  }
  startIdleTimer();
})();
