<template>
  <div :class="[ns, { disabled }]" :style="{ background: inactiveColor }">
    <input
      type="checkbox"
      :checked="modelValue"
      :class="[ns + '__input']"
      :disabled="disabled"
      @change="onUpdateModelValue"
    />
    <div :class="[ns + '__circle']">
      <slot name="circle">
        <GIcon v-if="loading" :class="[ns + '__loading']">
          <LoadingOutlined />
        </GIcon>
        <GIcon v-else>
          <component :is="modelValue ? activeIcon : inactiveIcon"></component>
        </GIcon>
      </slot>
    </div>
    <div :class="[ns + '__active-text']">
      <slot name="on">
        <component :is="isActiveTextComp ? activeText : 'span'">{{ activeText }}</component>
      </slot>
    </div>
    <div :class="[ns + '__inactive-text']">
      <slot name="off">
        <component :is="isInactiveTextComp ? inactiveText : 'span'">{{ inactiveText }}</component>
      </slot>
    </div>
    <div
      :class="[ns + '__background']"
      :style="{
        background: activeColor
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'GSwitch'
}
</script>

<script setup>
import { computed, watch } from 'vue'

import GIcon from '../GIcon/index.vue'
import { LoadingOutlined } from '@vicons/antd'

import { isFunction } from 'lodash-es'

const ns = 'g-switch'

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Number]
  },
  disabled: {
    type: Boolean
  },
  loading: {
    type: Boolean
  },
  // component
  activeIcon: {
    type: Object
  },
  // component
  inactiveIcon: {
    type: Object
  },
  // component or string
  activeText: {
    type: [String, Object]
  },
  inactiveText: {
    type: [String, Object]
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  }
})

const isActiveTextComp = computed(() => isFunction(props.activeText?.render))
const isInactiveTextComp = computed(() => isFunction(props.inactiveText?.render))
const emit = defineEmits(['update:modelValue'])

function onUpdateModelValue(e) {
  emit('update:modelValue', e.target.checked)
}

watch(
  () => props.modelValue,
  (val) => {
    console.log(val)
  }
)
</script>

<style lang="scss">
$ns: '.g-switch';

#{$ns} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 5px;
  min-width: 48px;
  height: 28px;
  border: none;
  color: $light;
  border-radius: 20px;
  background-color: rgb(240, 243, 244);
  transition: all 0.25s ease;
  box-sizing: border-box;
  &:hover {
    background-color: rgb(230, 233, 234);
  }
  &:active {
    transform: scale(0.9);
  }
  &__input {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    &:checked {
      ~ #{$ns}__background {
        left: 0;
      }
      ~ #{$ns}__circle {
        left: calc(100% - 24px);
        color: $colorPrimary;
        box-shadow: -5px 0 25px 0 rgba($light, 0.6);
      }
      ~ #{$ns}__inactive-text {
        transform: translate(100%);
      }
      ~ #{$ns}__active-text {
        transform: translate(0);
      }
    }
  }
  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 8;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    color: rgb(44, 62, 80);
    background-color: $light;
    transition: all 0.25s ease;
    #{$ns}__loading {
      font-size: 12px;
      animation: rotate 1s linear infinite;
    }
  }
  &__active-text,
  &__inactive-text {
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    transition: all 0.5s ease;
    box-sizing: border-box;
    z-index: 7;
  }
  &__active-text {
    padding: 5px 25px 5px 5px;
    transform: translate(-100%);
    color: $light;
  }
  &__inactive-text {
    padding: 5px 5px 5px 25px;
    transform: translate(0);
    color: $colorPrimary;
  }
  &__background {
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: 2;
    left: -100%;
    padding-bottom: 100%;
    background-color: $colorPrimary;
    transition: all 0.25s ease-out;
  }
  &.disabled {
    opacity: 0.6;
  }
}
</style>
