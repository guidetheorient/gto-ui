import GButton from './GButton'
import GLayout from './GLayout'
import GMessage from './GMessage'
import GIcon from './GIcon'
import GTooltip from './GTooltip'
import GForm from './GForm'
import GInput from './GInput'
import GInputNumber from './GInputNumber'

const comps = [GButton, GLayout, GMessage, GIcon, GTooltip, GForm, GInput, GInputNumber]

export default {
  install(app) {
    comps.forEach((comp) => {
      app.use(comp)
    })
  }
}
