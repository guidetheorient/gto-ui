<template>
  <label
    :class="[
      ns,
      {
        'is-disabled': _disabled,
        'is-checked': _modelValue === label
      }
    ]"
  >
    <span :class="[ns + '__input-wrapper']">
      <span :class="[ns + '__input-border']"></span>
      <span :class="[ns + '__input-circle']"></span>
      <input
        type="radio"
        :class="[ns + '__input']"
        :disabled="_disabled"
        :checked="_modelValue === label"
        @change="onChange"
      />
    </span>
    <span :class="[ns + '__label']">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'GRadio'
}
</script>

<script setup>
import { inject, nextTick, computed } from 'vue'

import { radioGroupContextKey } from '../../tokens'

const ns = 'g-radio'

const props = defineProps({
  modelValue: {},
  label: {},
  disabled: {
    type: Boolean
  }
})

const radioGroupContext = inject(radioGroupContextKey, null)
const isRadioGroup = computed(() => !!radioGroupContext)

const _modelValue = computed(() => {
  return isRadioGroup.value ? radioGroupContext.modelValue.value : props.modelValue
})
const _disabled = computed(() => {
  return isRadioGroup.value ? radioGroupContext.disabled.value : props.disabled
})

const emit = defineEmits(['update:modelValue', 'change'])

function onChange(e) {
  if (isRadioGroup.value) {
    radioGroupContext.updateModelValue(props.label)
  } else {
    emit('update:modelValue', props.label)
    nextTick(() => {
      emit('change', props.label)
    })
  }
}
</script>

<style lang="scss">
$root: '.g-radio';

.g-radio {
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
  &__input-circle,
  &__input-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.25s ease;
    box-sizing: border-box;
  }
  &__input-border {
    background-color: transparent;
    border: 2px solid rgb(200, 200, 200);
  }
  &__input-circle {
    opacity: 0;
    transform: scale(0.1);
    background-color: $colorPrimary;
    box-shadow: 0px 3px 12px 0px rgba($color: $colorPrimary, $alpha: 0.4);
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
  &.is-checked {
    #{$root}__input-wrapper {
      cursor: default;
    }
    #{$root}__input-border {
      opacity: 0;
      transform: scale(0.3);
    }
    #{$root}__input-circle {
      opacity: 1;
      transform: scale(1);
    }
  }
  &.is-disabled {
    #{$root}__input-border {
      background-color: #d2d2d2;
    }
    #{$root}__input-wrapper,
    #{$root}__label {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}
</style>
