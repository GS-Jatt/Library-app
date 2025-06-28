import { defineConfig } from "vite";

export default defineConfig({
  server: { allowedHosts: ["bore.pub"] },
  build: {
    target: "es2022",
  },
});
