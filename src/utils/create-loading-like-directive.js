import { createApp } from 'vue'

import { addClass, removeClass } from './index'

export const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp, getProps) {
  return {
    mounted(el, binding) {
      const app = createApp(Comp, getProps(el, binding))
      const instance = app.mount(document.createElement('div'))

      const name = Comp.name
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance

      if (binding.value) {
        append(el)
      }

      // 只能改变 instance data，改变不了 instance props，如果使用 props，必须在 createApp 第二个参数传递进去
      if (Comp.name === 'GLoading') {
        instance.background = el.getAttribute('g-loading-background')
        instance.title = el.getAttribute('g-loading-text')
        instance._fullscreen = !!binding.modifiers.fullscreen
      }
    },
    updated(el, binding) {
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }

  function append(el) {
    const style = getComputedStyle(el)
    if (!['relative', 'absolute', 'fixed'].includes(style.position)) {
      addClass(el, relativeCls)
    }

    const $el = el[Comp.name].instance.$el
    if (el[Comp.name].instance._fullscreen) {
      document.body.appendChild($el)
    } else {
      el.appendChild($el)
    }
  }

  function remove(el) {
    removeClass(el, relativeCls)

    const $el = el[Comp.name].instance.$el
    if (el[Comp.name].instance._fullscreen) {
      document.body.removeChild($el)
    } else {
      el.removeChild($el)
    }
  }
}
