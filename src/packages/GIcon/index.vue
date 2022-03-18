<template>
  <i class="g-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script>
const isValidCssSize = (v) => ['px', 'em', 'rem'].some((unit) => String(v).endsWith(unit))

export default {
  name: 'GIcon'
}
</script>

<script setup>
import { computed } from 'vue'

import { isNumber } from '../../utils/index'

const props = defineProps({
  size: {
    type: [String, Number],
    validator: (v) => isNumber(v) || isValidCssSize(v)
  },
  color: {
    type: String
  }
})

const style = computed(() => {
  let style = {}

  const { size, color } = props

  if (size) {
    style.fontSize = isValidCssSize(size) ? size : isNumber(size) ? size + 'px' : ''
  }
  if (color) {
    style.color = color
  }

  return style
})
</script>

<style lang="scss">
.g-icon {
  font-size: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  line-height: 1em;
  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
