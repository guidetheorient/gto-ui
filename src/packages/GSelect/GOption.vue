<template>
  <li :class="[ns, { active, disabled }]" @click.stop="onOptionClick" v-show="visible">
    <template v-if="multiple">
      <GCheckbox :value="value" :disabled="disabled">{{ label }}</GCheckbox>
    </template>
    <template v-else>
      {{ label || value }}
    </template>
  </li>
</template>

<script>
export default {
  name: 'GOption'
}
</script>

<script setup>
import { inject, onMounted, onBeforeUnmount, toRefs, computed, ref } from 'vue'

import { uniqueId } from 'lodash-es'

import GCheckbox from '../GCheckbox/GCheckbox.vue'

import { selectContextKey } from '../../tokens/index'

const ns = 'g-option'

const selectContext = inject(selectContextKey, null)

const props = defineProps({
  label: {
    type: [String, Number]
  },
  value: {},
  disabled: {
    type: Boolean
  }
})

const visible = ref(true)

const multiple = computed(() => selectContext.multiple.value)

const active = computed(() => {
  return multiple.value
    ? selectContext.modelValue?.value.includes(props.value)
    : selectContext.modelValue?.value === props.value
})

function onOptionClick() {
  if (props.disabled) return
  selectContext.onOptionClick(context)
}

const context = {
  uid: uniqueId(ns),
  visible,
  ...toRefs(props)
}

onMounted(() => {
  selectContext.addOption(context)
})

onBeforeUnmount(() => {
  selectContext.removeOption(context.uid)
})
</script>

<style lang="scss">
.g-option {
  margin: 2px 0;
  padding: 6px 10px;
  border: 0;
  width: 100%;
  text-align: left;
  background-color: transparent;
  transition: all 0.25s ease;
  box-sizing: border-box;
  color: $textColor;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 14px;
  &:hover:not(.disabled) {
    padding-left: 14px;
    color: $colorPrimary;
  }
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &.active {
    // pointer-events: none;
    color: $colorPrimary;
    background-color: rgba($color: $colorPrimary, $alpha: 0.05);
  }
}
</style>
