(() => {
  const config = window.APP_CONFIG || {};
  const authConfig = config.auth || {};
  const syncConfig = config.sync || {};
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
  const createClient = window.supabase?.createClient;
  const client = createClient && syncConfig.supabaseUrl && syncConfig.supabaseAnonKey
    ? createClient(syncConfig.supabaseUrl, syncConfig.supabaseAnonKey)
    : null;
  let session = null;
  let profile = null;
  let resolveReady;
  const ready = new Promise((resolve) => { resolveReady = resolve; });

  function normalizeCard(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
  }

  function cardToEmail(cardNumber) {
    return `${normalizeCard(cardNumber)}@${syncConfig.wardId || "ward"}.local`;
  }

  function setAuthenticatedView() {
    loginScreen.hidden = true;
    protectedApp.hidden = false;
    currentUser.hidden = false;
    logoutButton.hidden = false;
    currentUser.textContent = `${profile?.display_name || "工作人員"}｜${profile?.role === "admin" ? "管理者" : "工作人員"}`;
  }

  function setLoginView(message = "") {
    protectedApp.hidden = true;
    loginScreen.hidden = false;
    loginError.textContent = message;
    cardInput.focus();
  }

  async function loadProfile(nextSession) {
    const { data, error } = await client.from("staff_profiles")
      .select("user_id, card_number, display_name, role, ward_id, active")
      .eq("user_id", nextSession.user.id)
      .maybeSingle();
    if (error || !data?.active || data.ward_id !== syncConfig.wardId) {
      await client.auth.signOut();
      throw new Error("此帳號尚未啟用或不屬於本病房，請聯絡管理者。");
    }
    return data;
  }

  async function acceptSession(nextSession) {
    profile = await loadProfile(nextSession);
    session = nextSession;
    setAuthenticatedView();
    resolveReady({ session, profile });
    await logAction("login");
  }

  async function logAction(action, patientId = null, details = {}) {
    if (!enabled || !client || !session || !profile) return;
    try {
      await client.from("audit_logs").insert({
        ward_id: profile.ward_id,
        user_id: session.user.id,
        action,
        patient_id: patientId,
        details
      });
    } catch (error) {
      console.warn("無法寫入操作紀錄", error);
    }
  }

  async function logout(message = "您已安全登出。") {
    if (session) await logAction("logout");
    if (client) await client.auth.signOut();
    session = null;
    profile = null;
    sessionStorage.removeItem("psych-shopping-session");
    localStorage.removeItem("psych-shopping-session");
    setLoginView(message);
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
    if (!cardNumber || passwordInput.value.length < 8) {
      loginError.textContent = "請輸入正確的卡號及至少 8 碼密碼。";
      return;
    }
    loginSubmit.disabled = true;
    loginError.textContent = "正在驗證身分…";
    const { data, error } = await client.auth.signInWithPassword({
      email: cardToEmail(cardNumber),
      password: passwordInput.value
    });
    passwordInput.value = "";
    try {
      if (error || !data.session) throw new Error("卡號或密碼錯誤。");
      await acceptSession(data.session);
    } catch (loginFailure) {
      loginError.textContent = loginFailure.message || "登入失敗，請稍後再試。";
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
    client,
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
  localStorage.removeItem("psych-shopping-session");
  if (!client) {
    setLoginView("登入服務尚未完成設定，請聯絡管理者。");
    return;
  }
  setLoginView();
  client.auth.getSession().then(async ({ data }) => {
    if (!data.session) return;
    try {
      await acceptSession(data.session);
    } catch (error) {
      setLoginView(error.message);
    }
  });
  startIdleTimer();
})();
