import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // ref suger
      reactivityTransform: true
    })
  ],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use  "./src/scss/_variables.scss" as *;
        `
      }
    }
  }
})
