import DefaultTheme from 'vitepress/theme'

import GUi from '@/../dist/index.es.js'
import '@/../dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(GUi)
  }
}
