/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sass from 'sass'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: '@import "@/styles/defaults.scss";',
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // testMatch: ['./src/**/*.test.tsx'],
    globals: true,
  },
})
