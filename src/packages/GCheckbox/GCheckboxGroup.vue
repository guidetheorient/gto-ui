<template>
  <div :class="[ns]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GCheckboxGroup'
}
</script>

<script setup>
import { provide, toRefs, nextTick } from 'vue'

import { checkboxGroupContextKey } from '../../tokens/index'

const ns = 'g-checkbox-group'

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  },
  disabled: {
    type: Boolean
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

function updateModelValue(item) {
  // 为了支持对象，不能用 slice 拷贝
  let v = props.modelValue

  if (props.modelValue.includes(item)) {
    let i = props.modelValue.findIndex((v) => v === item)
    v.splice(i, 1)
  } else {
    v.push(item)
  }

  emit('update:modelValue', v)
  nextTick(() => {
    emit('change', v)
  })
}

const context = {
  ...toRefs(props),
  updateModelValue
}

provide(checkboxGroupContextKey, context)
</script>

<style lang="scss">
.g-checkbox-group {
  //
}
</style>
