import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",

  use: {
    baseURL: "http://localhost:3000",
    browserName: "chromium",
    trace: "on-first-retry",
  },

  webServer: [
    {
      command: "pnpm --filter accounts dev --host 0.0.0.0",
      url: "http://localhost:3001",
      name: "Accounts MFE",
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "pnpm --filter shell dev --host 0.0.0.0",
      url: "http://localhost:3000",
      name: "Shell",
      reuseExistingServer: !process.env.CI,
    },
  ],
});
