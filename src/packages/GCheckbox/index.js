import GCheckbox from './GCheckbox.vue'
import GCheckboxGroup from './GCheckboxGroup.vue'

export default {
  install(app) {
    app.component(GCheckbox.name, GCheckbox)
    app.component(GCheckboxGroup.name, GCheckboxGroup)
  }
}
