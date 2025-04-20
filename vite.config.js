// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    // 让 Vite 的 watcher 用 polling 而不是 inotify
    watch: {
      usePolling: true,
      // 默认 100 毫秒，你也可以根据需要调大或调小
      interval: 100,
    },
    // 如果你通过 Windows 浏览器访问，也可以加上：
    host: '0.0.0.0',
    // strictPort: true // 如有端口冲突，可按需开启
  }
})
