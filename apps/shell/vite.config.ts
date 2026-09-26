import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import mgConfig from "./module-federation.config.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation(mgConfig)],
  server: { port: 3000, strictPort: true },
});
