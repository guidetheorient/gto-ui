import GForm from './GForm.vue'
import GFormItem from './GFormItem.vue'

export default {
  install(app) {
    app.component(GForm.name, GForm)
    app.component(GFormItem.name, GFormItem)
  }
}
