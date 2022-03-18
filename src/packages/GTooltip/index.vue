<template>
  <div :class="[ns + '__trigger']" ref="triggerRef" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <transition name="g-tooltip-fade">
      <div v-show="_visible" :class="[ns, `${ns}--${placement}`]" ref="tooltipRef" :style="style">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GTooltip'
}
</script>

<script setup>
// 非受控模式，组件自己控制显示/隐藏
// 受控模式，组件完全由父组件控制其显示/隐藏
import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue'

import { insertAsFirstChildOfBody } from '../../utils'

const ns = 'g-tooltip'

const props = defineProps({
  visible: {
    type: Boolean,
    default: null
  },
  placement: {
    type: String,
    default: 'bottom',
    validator: (v) => ['left', 'top', 'right', 'bottom'].includes(v)
  },
  content: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})

const tooltipRef = ref(null)
const triggerRef = ref(null)
const pos = ref({
  left: 0,
  top: 0,
  width: 'auto'
})
const _visible = ref(false)
let hasAppendToBody = $ref(false)

const controlled = computed(() => props.visible !== null)
const style = computed(() => {
  return pos.value
})

watch(
  () => props.visible,
  (v) => {
    _visible.value = v
    if (v) {
      show()
    }
  }
)

function onMouseEnter(e) {
  if (controlled.value) return
  show()
}
function show() {
  if (!props.disabled) {
    _visible.value = true
    nextTick(() => {
      insertAsFirstChildOfBody(tooltipRef.value)
      changePosition(triggerRef, tooltipRef)
      hasAppendToBody = true
    })
  }
}

function onMouseLeave(e) {
  if (controlled.value) return
  hide()
}
function hide() {
  _visible.value = false
}

onBeforeUnmount(() => {
  if (hasAppendToBody) {
    document.body.removeChild(tooltipRef.value)
  }
})

function changePosition(triggerRef, tooltipRef) {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  let { left, top, width, height, bottom, right } = triggerRef.value.getBoundingClientRect()
  const { width: tooltipWidth, height: tooltipHeight } = tooltipRef.value.getBoundingClientRect()
  const offset = 8

  if (props.placement === 'bottom') {
    left = left + width / 2 - tooltipWidth / 2
    top = scrollTop + bottom + offset
  } else if (props.placement === 'top') {
    left = left + width / 2 - tooltipWidth / 2
    top = scrollTop + top - tooltipHeight - offset
  } else if (props.placement === 'left') {
    top = scrollTop + top + height / 2 - tooltipHeight / 2
    left = left - tooltipWidth - offset
  } else if (props.placement === 'right') {
    top = scrollTop + top + height / 2 - tooltipHeight / 2
    left = right + offset
  }

  pos.value = {
    left: left + 'px',
    top: top + 'px'
  }
}
</script>

<style lang="scss">
.g-tooltip {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;
  color: $light;
  background-color: rgb(50, 50, 50);
  padding: 5px 7px;
  font-size: 12px;
  border-radius: 6px;
  max-width: 220px;
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: inherit;
  }
  &--top {
    &::after {
      left: 50%;
      bottom: -6px;
      transform: rotate(45deg) translate(-50%);
    }
  }
  &--bottom {
    &::after {
      left: 50%;
      top: -1px;
      transform: rotate(45deg) translate(-50%);
    }
  }
  &--left {
    &::after {
      top: 50%;
      right: -1px;
      transform: rotate(45deg) translate(0, -50%);
    }
  }
  &--right {
    &::after {
      top: 50%;
      left: -6px;
      transform: rotate(45deg) translate(0, -50%);
    }
  }
}

.g-tooltip-fade-enter-active,
.g-tooltip-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.g-tooltip-fade-enter-from,
.g-tooltip-fade-leave-to {
  opacity: 0;
  &.g-tooltip--top {
    transform: translate(0, -10px);
  }
  &.g-tooltip--bottom {
    transform: translate(0, 10px);
  }
  &.g-tooltip--left {
    transform: translate(-10px, 0%);
  }
  &.g-tooltip--right {
    transform: translate(10px, 0%);
  }
}

.g-tooltip__trigger {
  display: inline-flex;
}
</style>
