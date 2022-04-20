<template>
  <label
    :class="[
      ns,
      {
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': isIndeterminate
      }
    ]"
  >
    <span :class="[ns + '__input-wrapper']">
      <span :class="[ns + '__input-border']">
        <GIcon :class="[ns + '__icon']">
          <CheckOutlined v-if="isChecked" />
          <MinusOutlined v-else-if="isIndeterminate" />
        </GIcon>
      </span>
      <input type="checkbox" :class="[ns + '__input']" :disabled="isDisabled" @change="onChange" />
    </span>
    <span :class="[ns + '__label']">
      <slot>{{ label || value }}</slot>
    </span>
  </label>
</template>

<script>
import GIcon from '../GIcon/index.vue'
import { CheckOutlined, MinusOutlined } from '@vicons/antd'

export default {
  name: 'GCheckbox'
}
</script>

<script setup>
import { computed, nextTick, inject } from 'vue'

import { isNumber } from 'lodash-es'

import { checkboxGroupContextKey } from '../../tokens/index'

const ns = 'g-checkbox'

const checkboxGroupContext = inject(checkboxGroupContextKey, null)

const props = defineProps({
  modelValue: {
    type: Boolean
  },
  label: {},
  value: {},
  disabled: {
    type: Boolean
  },
  indeterminate: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const _modelValue = computed(() => {
  return props.modelValue
})

const isGroup = computed(() => {
  return !!checkboxGroupContext
})

const isChecked = computed(() => {
  if (isGroup.value) {
    return checkboxGroupContext.modelValue.value?.includes(props.value)
  }

  return !!_modelValue.value
})

const isDisabled = computed(() => {
  if (isGroup.value) {
    const { modelValue, min, max } = checkboxGroupContext
    if (isNumber(min.value) && modelValue.value?.length <= min.value) {
      return isChecked.value
    } else if (isNumber(max.value) && modelValue.value?.length >= max.value) {
      return !isChecked.value
    }
  }

  return props.disabled
})

const isIndeterminate = computed(() => props.indeterminate)

function onChange(e) {
  if (isGroup.value) {
    checkboxGroupContext.updateModelValue(props.value)
  } else {
    emit('update:modelValue', !props.modelValue)
    nextTick(() => {
      emit('change', !props.modelValue)
    })
  }
}
</script>

<style lang="scss">
$root: '.g-checkbox';

#{$root} {
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
  &__input-wrapper {
    position: relative;
    display: inline-flex;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  &__input-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    transition: all 0.25s ease;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid rgb(200, 200, 200);
  }
  &__icon {
    opacity: 0;
    transform: scale(0.1);
    color: $light;
    transition: all 0.25s ease;
  }
  &__input-border {
  }

  &__input {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    margin: 0;
    opacity: 0;
  }
  &__label {
    margin-left: 5px;
    cursor: pointer;
  }
  &.is-disabled {
    #{$root}__input-border {
      border-color: #d2d2d2;
      background-color: #d2d2d2;
      box-shadow: none;
    }
    #{$root}__input-wrapper,
    #{$root}__label {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
  &.is-checked,
  &.is-indeterminate {
    #{$root}__input-border {
      background-color: $colorPrimary;
      border-color: $colorPrimary;
      box-shadow: 0px 3px 12px 0px rgba($color: $colorPrimary, $alpha: 0.4);
    }
    #{$root}__icon {
      opacity: 1;
      transform: scale(0.8);
    }
  }
}
</style>
