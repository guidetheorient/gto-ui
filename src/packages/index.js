import GButton from './GButton'
import GLayout from './GLayout'
import GMessage from './GMessage'
import GIcon from './GIcon'

const comps = [GButton, GLayout, GMessage, GIcon]

export default {
  install(app) {
    comps.forEach((comp) => {
      app.use(comp)
    })
  }
}
