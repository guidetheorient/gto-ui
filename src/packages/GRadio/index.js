import GRadio from './GRadio.vue'
import GRadioGroup from './GRadioGroup.vue'

export default {
  install(app) {
    app.component(GRadio.name, GRadio)
    app.component(GRadioGroup.name, GRadioGroup)
  }
}
