import GButton from "./GButton";

const comps = [
  GButton
]

export default {
  install(app) {
    comps.map(comp => {
      app.use(comp)
    }) 
  }
}