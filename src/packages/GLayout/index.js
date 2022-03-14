import GRow from './GRow.vue'
import GCol from './GCol.vue'

export default {
  install(app) {
    app.component(GRow.name, GRow)
    app.component(GCol.name, GCol)
  }
}