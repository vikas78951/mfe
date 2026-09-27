import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { federation } from "@module-federation/vite";
import mgConfig from "./module-federation.config.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation(mgConfig)],
  server: {
    port: 3000,
    strictPort: true,
    origin: "http://localhost:3000",
  },
  base: "http://localhost:3000/",
  test: { environment: "node", globals: true },
  preview: {
    port: 3000,
    strictPort: true,
  },
});
