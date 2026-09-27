import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import mgConfig from "./module-federation.config.ts";
import { federation } from "@module-federation/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation(mgConfig)],
  server: {
    port: 3001,
    strictPort: true,
    origin: "http://localhost:3001",
    cors: {
      origin: "http://localhost:3000",
    },
  },
  base: "http://localhost:3001/",
  test: {
    environment: "node",
    globals: true,
  },
  preview: {
    port: 3001,
    strictPort: true,
    cors: {
      origin: "http://localhost:3000",
    },
  },
});
