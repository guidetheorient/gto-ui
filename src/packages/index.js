import GButton from './GButton'
import GLayout from './GLayout'
import GMessage from './GMessage'
import GIcon from './GIcon'
import GTooltip from './GTooltip'
import GForm from './GForm'
import GInput from './GInput'
import GInputNumber from './GInputNumber'
import GCarousel from './GCarousel'
import GRadio from './GRadio'
import GCheckbox from './GCheckbox'
import GSelect from './GSelect'
import GLoading from './GLoading'
import GSwitch from './GSwitch'
import GDialog from './GDialog'
import GEmpty from './GEmpty'

import '../scss/index.scss'

const comps = [
  GButton,
  GLayout,
  GMessage,
  GIcon,
  GTooltip,
  GForm,
  GInput,
  GInputNumber,
  GCarousel,
  GRadio,
  GCheckbox,
  GSelect,
  GLoading,
  GSwitch,
  GDialog,
  GEmpty
]

export default {
  install(app) {
    comps.forEach((comp) => {
      app.use(comp)
    })
  }
}
