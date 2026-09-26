import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "accounts",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: ["react", "react-dom"],
});
