window.APP_CONFIG = {
  auth: {
    enabled: true,
    mode: "local",
    idleTimeoutMinutes: 30,
    users: [
      {
        cardNumber: "123456",
        displayName: "王護理師",
        role: "admin",
        active: true,
        passwordHash: "0fadf52a4580cfebb99e61162139af3d3a6403c1d36b83e4962b721d1c8cbd0b"
      },
      {
        cardNumber: "234567",
        displayName: "李護理師",
        role: "staff",
        active: true,
        passwordHash: "f36807717f4e3440fa949f399deea3ff04fd7d621a1c34556b21d07172dcb679"
      }
    ]
  },
  sync: {
    provider: "supabase",
    supabaseUrl: "https://zyswxsiyrlesokpfyfdd.supabase.co",
    supabaseAnonKey: "sb_publishable_10FyXXM160WGFJ8l5ExTzg_neKNVSeI",
    wardId: "psych-ward-a",
    pollIntervalMs: 5000
  }
};
