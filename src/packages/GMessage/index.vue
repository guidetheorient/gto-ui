<template>
  <transition name="message" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="visible" class="g-message" :class="classes">
      <div class="g-message__content">{{ message }}</div>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from "vue"

function useTransition() {
  function beforeEnter(el) {
    el.style.opacity = 0
  }
  function enter(el, done) {
    el.style.opacity = 1
    done()
  }
  function leave(el, done) {
    // done()
  }

  return {
    beforeEnter,
    enter,
    leave
  }
}

function usePosition(props) {
  const position = ref({
    left: null,
    right: null,
    top: null,
    bottom: null
  })

  const transform = ref({
    translateX: 0
  })

  const isNegativeVerticalStart = ref(false)

  const placements = computed(() => props.placement.split('-'))
  placements.value.forEach(key => {
    const positionVal = position.value
    const transformVal = transform.value

    if (key in positionVal) positionVal[key] = 0
    if (key === 'center') {
      positionVal.left = '50%'
      transformVal.translateX = '-50%'
    }
    if (key === 'bottom') isNegativeVerticalStart.value = true
  })

  return {
    position,
    transform,
    isNegativeVerticalStart
  }
}

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (v) => ['primary', 'success', 'warning', 'danger'].includes(v)
  },
  message: {
    type: String,
    default: ''
  },
  duartion: {
    type: Number,
    default: 3000
  },
  placement: {
    type: String,
    default: 'top-center',
    validator: v => ['top-center', 'bottom-center', 'top-left', 'bottom-left', 'top-right', 'bottom-right'].includes(v)
  },
  onClick: {
    type: Function
  }
})

const ns = 'g-message'

let visible = $ref(true)

const duartion = computed(() => props.duartion)
const classes = computed(() => {
  const classes = ['g-message-' + props.placement]
  if (props.type) {
    classes.push(`${ns}--${props.type}`)
  }
  return classes
})

const { beforeEnter, enter, leave } = useTransition()

const calcPosition = () => {
  const messageEls = document.querySelectorAll('.g-message-' + props.placement)
  for (let i = 0; i < messageEls.length; i++) {
    let verticalStart = 10
    for (let j = 0; j < i; j++) {
      verticalStart += messageEls[j].clientHeight + 6
    }

    const { position, transform, isNegativeVerticalStart } = usePosition(props)
    for (let key in position.value) {
      if (position.value[key] !== null) {
        messageEls[i].style[key] = position.value[key]
      }
    }
    messageEls[i].style.transform = `translate3d(
          ${transform.value.translateX}, 
          ${(isNegativeVerticalStart.value ? '-' : '') + verticalStart}px,
           0
          )`
  }
}

const close = () => {
  visible = false
}

onMounted(async () => {
  await nextTick()
  calcPosition()

  const duartionVal = duartion.value
  if (duartionVal) {
    setTimeout(() => {
      close()
    }, duartionVal)
  }
})
</script>

<style lang="scss">
.g-message {
  position: fixed;
  z-index: 3000;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
  max-width: 350px;
  min-width: 200px;
  @each $name, $color in $colors {
    &.g-message--#{$name} {
      background-color: $color;
    }
  }
  &__content {
    padding: 5px;
    color: $light;
    font-size: 14px;
    animation: open 0.4s;
  }
}

@keyframes open {
  0% {
    opacity: 0;
    transform: translate(-30px);
  }
  100% {
    transform: translate(0px);
    opacity: 1;
  }
}
