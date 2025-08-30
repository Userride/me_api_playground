import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // 👇 Needed for Vercel or other static hosts
  build: {
    outDir: 'dist',
  },
})
