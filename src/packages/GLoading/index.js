import { createApp } from 'vue'

import GLoading from './index.vue'
import loadingDirective from './directive'

import { addClass, removeClass } from '../../utils/index'

export const relativeCls = 'g-relative'

const loading = (options = {}) => {
  const loadingApp = createApp(GLoading, options)
  const instance = loadingApp.mount(document.createElement('div'))
  Object.assign(instance, options)

  let el = options.target instanceof Element ? options.target : document.querySelector(options.target) || document.body

  const style = getComputedStyle(el)
  if (!['relative', 'absolute', 'fixed'].includes(style.position)) {
    addClass(el, relativeCls)
  }

  el.appendChild(instance.$el)

  return () => {
    instance.close()
    removeClass(el, relativeCls)
  }
}

export { loading as GLoading }

export default {
  install(app) {
    app.directive('loading', loadingDirective)

    app.config.globalProperties.$loading = loading
  }
}
