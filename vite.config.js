import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // Für SPA-Deployment - alle Routen zu index.html weiterleiten
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  // Preview-Server Konfiguration für lokale Tests
  preview: {
    port: 4173,
    host: true
  }
})
