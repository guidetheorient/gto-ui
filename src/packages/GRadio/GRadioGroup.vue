<template>
  <div :class="[ns]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GRadioGroup'
}
</script>

<script setup>
import { provide, toRefs, nextTick } from 'vue'

import { radioGroupContextKey } from '../../tokens/index'

const ns = 'g-radio-group'

const props = defineProps({
  modelValue: {
    required: true
  },
  disabled: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

function updateModelValue(v) {
  emit('update:modelValue', v)
  nextTick(() => {
    emit('change', v)
  })
}

const context = {
  ...toRefs(props),
  updateModelValue
}

provide(radioGroupContextKey, context)
</script>

<style lang="scss">
.g-radio-group {
  //
}
</style>
