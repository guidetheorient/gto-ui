import GButton from './GButton'
import GLayout from './GLayout'
import GMessage from './GMessage'
import GIcon from './GIcon'
import GTooltip from './GTooltip'

const comps = [GButton, GLayout, GMessage, GIcon, GTooltip]

export default {
  install(app) {
    comps.forEach((comp) => {
      app.use(comp)
    })
  }
}
