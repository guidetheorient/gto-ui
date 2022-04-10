<template>
  <div :class="[ns]">
    <input :class="[ns + '__inner']" :value="value" @input="onInput" @blur="onBlur" @change="onChange" type="text" />
  </div>
</template>

<script>
export default {
  name: 'GInput'
}
</script>

<script setup>
import { ref, inject, watch } from 'vue'
import { formItemContextKey } from '../../tokens'

const ns = 'g-input'

const formItemContext = inject(formItemContextKey, undefined)

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'blur'])

const value = ref(props.modelValue)

function onInput(e) {
  const v = e.target.value
  value.value = v
  emit('update:modelValue', v)
}

function onChange(e) {
  emit('change', e.target.value)
}

function onBlur(e) {
  emit('blur', e)
  formItemContext?.validate('blur').catch(console.log)
}

watch(
  () => props.modelValue,
  (val) => {
    value.value = val
    formItemContext?.validate('change').catch(console.log)
  }
)
</script>

<style lang="scss">
.g-input {
  &__inner {
    position: relative;
    -webkit-appearance: none;
    background-color: $light;
    border-radius: 4px;
    box-sizing: border-box;
    color: $textColor;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    outline: none;
    padding: 0 11px;
    width: 100%;
    box-shadow: 0 0 0 1px #dcdfe6;
    border: none;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 0 0 1px #a8abb2 inset;
    }
    &:focus {
      box-shadow: 0 0 0 1px $colorPrimary inset;
    }
    ::placeholder {
      color: #a8abb2;
    }
  }
  &.is-disabled {
    &__inner {
      box-shadow: 0 0 0 1px #e4e7ed inset;
      color: #a8abb2;
      cursor: not-allowed;
      background-color: #f5f7fa;
    }
  }
}
</style>
