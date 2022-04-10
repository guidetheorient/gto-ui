export default function useTransition() {
  function beforeEnter(el) {
    el.style.opacity = 0
    el.style.transform = 'scale(0)'
  }
  function enter(el, done) {
    setTimeout(() => {
      el.style.opacity = 1
      el.style.transform = 'scale(1)'
      el.style.transformOrigin = 'top left'
      el.style.transition = 'all .3s ease'
      el.style.transition = 'all .3s ease'

      el.addEventListener('transitionend', next)

      function next() {
        el.removeEventListener('transitionend', next)
        done()
      }
    })
  }
  function afterEnter(el) {
    el.style.opacity = ''
    el.style.transform = ''
    el.style.transition = ''
    el.style.transition = ''
  }

  function leave(el, done) {
    el.style.opacity = 0
    el.style.transform = 'scale(0)'
    el.style.transition = 'all .3s ease'
    el.style.transition = 'all .3s ease'

    el.addEventListener('transitionend', next)

    function next() {
      el.removeEventListener('transitionend', next)
      done()
    }
  }
  function afterLeave(el) {
    el.style.opacity = ''
    el.style.transform = ''
  }

  return {
    beforeEnter,
    enter,
    afterEnter,
    leave,
    afterLeave
  }
}
