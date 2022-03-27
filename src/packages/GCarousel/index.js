import GCarousel from './GCarousel.vue'
import GCarouselItem from './GCarouselItem.vue'

export default {
  install(app) {
    app.component(GCarousel.name, GCarousel)
    app.component(GCarouselItem.name, GCarouselItem)
  }
}
