<template>
  <component class="g-row" :is="tag" :style="style">
    <slot></slot>
  </component>
</template>

<script>
import { computed, provide } from "vue"
import { rowContextKey } from '../../tokens/index'

export default {
  name: 'GRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props) {
    const gutter = computed(() => props.gutter)
    provide(rowContextKey, {
      gutter
    })

    const style = computed(() => {
      const gutterVal = gutter.value

      const style = {
        marginLeft: 0,
        marginRight: 0
      }

      if (gutterVal) {
        style.marginLeft = - gutterVal / 2 + 'px'
        style.marginRight = style.marginLeft
      }

      return style
    })


    return {
      style
    }
  }
}
</script>

<style lang="scss">
.g-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
