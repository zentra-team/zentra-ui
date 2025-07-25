import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts"
  },
  resolve: {
    alias: {
      "@/tests": path.resolve(__dirname, "./tests"),
      "@": path.resolve(__dirname, "./src")
    }
  }
})
