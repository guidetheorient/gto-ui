import GEmpty from './index.vue'

import emptyDirective from './directive'

export default {
  install(app) {
    app.directive('empty', emptyDirective)

    app.component(GEmpty.name, GEmpty)
  }
}
