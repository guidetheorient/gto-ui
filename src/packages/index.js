import GButton from "./GButton";
import GLayout from "./GLayout";

const comps = [
  GButton,
  GLayout
]

export default {
  install(app) {
    comps.map(comp => {
      app.use(comp)
    }) 
  }
}