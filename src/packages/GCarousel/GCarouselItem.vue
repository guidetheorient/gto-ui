<template>
  <div :class="[ns, { 'is-animating': animating }]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GCarouselItem'
}
</script>

<script setup>
import { watch, ref, getCurrentInstance, computed, onMounted, onUnmounted, inject } from 'vue'
import { carouselContextKey } from '../../tokens'

const ns = 'g-carousel__item'

const instance = getCurrentInstance()

const carouselContext = inject(carouselContextKey)

let translate = $ref(0)
let animating = $ref(false)

const style = computed(() => {
  const style = {
    transform: `translateX(${translate}px)`
  }

  return style
})

function calcTranslate(offsetIndex) {
  return offsetIndex * carouselContext.rootRef.value?.offsetWidth
}

/**
 * 保证 activeIndex 左右都有一个可切换
 */
function processIndex(index, activeIndex, length) {
  console.log(index, activeIndex, length)
  if (activeIndex === 0 && index === length - 1) {
    return -1
  } else if (activeIndex === length - 1 && index === 0) {
    return 1
  }

  return index - activeIndex
}

function translateItem(index, activeIndex, oldIndex) {
  animating = index === activeIndex || index === oldIndex
  const length = carouselContext.items.value.length
  if (length > 2) {
    let i = processIndex(index, activeIndex, length)
    translate = calcTranslate(i)
  } else {
    translate = calcTranslate(index - activeIndex)
  }
}

onMounted(() => {
  carouselContext.addItem({
    uid: instance.uid,
    translate,
    animating,
    translateItem
  })
})

onUnmounted(() => {
  carouselContext.removeItem(instance.uid)
})
</script>

<style lang="scss">
.g-carousel__item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &.is-animating {
    transition: transform 0.4s ease-in-out;
  }
}
</style>
