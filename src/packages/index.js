import GButton from './GButton'
import GLayout from './GLayout'
import GMessage from './GMessage'

const comps = [GButton, GLayout, GMessage]

export default {
  install(app) {
    comps.forEach((comp) => {
      app.use(comp)
    })
  }
}
