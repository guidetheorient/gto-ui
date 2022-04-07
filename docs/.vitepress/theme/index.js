import DefaultTheme from 'vitepress/theme'

import GUi from '@/../lib/index.es.js'
import '@/../lib/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(GUi)
  }
}
