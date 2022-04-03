import GSelect from './GSelect.vue'
import GOptionGroup from './GOptionGroup.vue'
import GOption from './GOption.vue'

export default {
  install(app) {
    app.component(GSelect.name, GSelect)
    app.component(GOptionGroup.name, GOptionGroup)
    app.component(GOption.name, GOption)
  }
}
