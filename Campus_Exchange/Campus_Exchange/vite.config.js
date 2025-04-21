import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
    rewrites: [
      { source: '/(.*)', destination: '/index.html' }
    ]
  }
})
