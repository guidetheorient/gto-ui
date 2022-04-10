import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // ref suger
      reactivityTransform: true
    }),
    vueJsx()
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
