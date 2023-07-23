import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'perfume',
  plugins: [
    vue(),
    // FontsPlugin({
    //   google: {
    //     families: ['Material Icons'], // 告诉插件我们要加载 Material Icons 字体
    //   },
    // }),
  ],
})
