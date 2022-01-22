import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'vue-ts-starter',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
