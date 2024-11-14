// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/FSD/", // Замініть 'my-react-app' на назву вашого репозиторію, якщо потрібно
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src/app"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@features": resolve(__dirname, "./src/features"),
      "@widgets": resolve(__dirname, "./src/widgets"),
      "@entities": resolve(__dirname, "./src/entities"),
      "@shared": resolve(__dirname, "./src/shared"),
      '@layouts': resolve(__dirname, 'src/layouts'),
   },
  },
});