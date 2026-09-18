import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/stscoconut/',
  server: {
    port: 5173,
  },
})
