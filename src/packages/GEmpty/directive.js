import createLoadingLikeDirective from '../../utils/create-loading-like-directive'

import Comp from './index.vue'

function getProps(el, binding) {
  return {
    description: el.getAttribute('g-empty-description') || undefined,
    imageWidth: el.getAttribute('g-empty-image-width') || undefined,
    image: el.getAttribute('g-empty-image') || undefined
  }
}

export default createLoadingLikeDirective(Comp, getProps)
