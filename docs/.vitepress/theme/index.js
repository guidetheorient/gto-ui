import DefaultTheme from 'vitepress/theme'
import './custom.css'
// 不造为什么，刷新页面，css 会不生效
import('@/../lib/style.css')

let isLoaded = false

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.mixin({
      mounted() {
        if (isLoaded) return
        isLoaded = true

        import('@/../lib/index.es.js').then((GUi) => {
          app.use(GUi.default)
        })
      }
    })
  }
}
