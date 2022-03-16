import GMessageComp from './index.vue'
import { createApp } from 'vue'

const message = (options = {}) => {
  const messageApp = createApp(GMessageComp, options)
  const instance = messageApp.mount(document.createElement('div'))
  document.body.insertBefore(instance.$el, document.body.firstChild)
}

export { message as GMessage }

export default {
  install(app) {
    app.config.globalProperties.$message = message
  }
}