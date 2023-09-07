/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as sass from 'sass'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'
import * as packageJson from './package.json'
import tsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    libInjectCss(),
    dts({
      include: ['src/components/'],
    })
  ],
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
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // testMatch: ['./src/**/*.test.tsx'],
    globals: true,
  },
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'JuanjoMartin95-Lib',
      formats: ['es', 'umd'],
      fileName: (format) => `juanjomartin95-lib.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
})
