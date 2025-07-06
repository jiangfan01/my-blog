import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "node:dns";
import * as fs from "node:fs";

// https://vite.dev/config/
// vite.config.ts
export default defineConfig({
  base: './', // 修改为相对路径
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // ✅ 构建完成后复制 index.html 为 404.html
    emptyOutDir: true,
  },
  buildEnd() {
    const indexPath = resolve(__dirname, 'dist/index.html');
    const notFoundPath = resolve(__dirname, 'dist/404.html');
    fs.copyFileSync(indexPath, notFoundPath);
  },
})