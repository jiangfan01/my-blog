import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.ts
export default defineConfig({
  base: './', // 修改为相对路径
  plugins: [react()],
})