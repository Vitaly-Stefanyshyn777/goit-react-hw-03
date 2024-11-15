// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/goit-react-hw-03/", // Замініть на назву вашого репозиторію
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
      '@data': resolve(__dirname, './src/components/data'),
    },
  },
});