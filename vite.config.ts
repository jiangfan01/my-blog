import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  base: '/my-blog/', // ✅ GitHub Pages 仓库名
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      writeBundle() {
        const indexPath = resolve(__dirname, 'dist/index.html');
        const notFoundPath = resolve(__dirname, 'dist/404.html');

        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
          console.log('✅ Copied index.html → 404.html');
        } else {
          console.warn('⚠️ index.html not found in dist/');
        }
      }
    }
  ]
});
