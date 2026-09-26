import { createModuleFederationConfig } from "@module-federation/vite";

export default createModuleFederationConfig({
  name: "shell",
  remotes: {
    accounts: {
      type: "module",
      name: "accounts",
      entry: "http://localhost:3001/remoteEntry.js",
    },
  },
  shared: ["react", "react-dom"],
});
