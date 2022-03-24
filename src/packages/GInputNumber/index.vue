<template>
  <div :class="[ns, { 'is-disabled': disabled }]">
    <button :class="[ns + '__minus', { 'is-disabled': min >= modelValue || disabled }]" v-long-mouse-down="minus">
      <GIcon>
        <MinusOutlined></MinusOutlined>
      </GIcon>
    </button>
    <input
      type="number"
      :class="[ns + '__inner']"
      :value="modelValue"
      ref="inputRef"
      :disabled="disabled"
      @change="onChange"
    />
    <button :class="[ns + '__plus', , { 'is-disabled': max <= modelValue || disabled }]" v-long-mouse-down="plus">
      <GIcon>
        <PlusOutlined></PlusOutlined>
      </GIcon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'GInputNumber',
  inheritAttrs: false,
  directives: {
    longMouseDown: {
      /**
       * 支持长按按钮，每隔 100ms 执行一次加减函数，直到 mouseup 或 mouseleave 时停止
       */
      mounted(el, binding, vnode) {
        let timer

        function action(e) {
          if (e.button !== 0) return

          timer = setInterval(() => {
            binding.value()
          }, 100)
        }

        function stopAction() {
          clearInterval(timer)
          timer = null
        }

        el.addEventListener('mouseup', stopAction)
        el.addEventListener('mouseleave', stopAction)

        el.addEventListener('mousedown', action, false)
      }
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'
import GIcon from '../GIcon/index.vue'
import { MinusOutlined, PlusOutlined } from '@vicons/antd'

const ns = 'g-input-number'

const props = defineProps({
  modelValue: {
    type: Number
  },
  disabled: {
    type: Boolean
  },
  step: {
    type: Number,
    default: 1
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  precision: {
    type: Number
  }
})

const emit = defineEmits(['update:modelValue'])

const inputRef = ref(null)

function onChange(e) {
  emit('update:modelValue', calcLimitedValue(e.target.value))
}

function minus() {
  let newVal = calcLimitedValue(fixPrecision(Number(props.modelValue) - props.step))

  emit('update:modelValue', newVal)
}

function plus() {
  let newVal = calcLimitedValue(fixPrecision(Number(props.modelValue) + props.step))

  emit('update:modelValue', newVal)
}

function calcLimitedValue(n) {
  let newVal = Number.isFinite(props.min) ? Math.max(props.min, n) : n
  newVal = Number.isFinite(props.max) ? Math.min(props.max, n) : n
  return newVal
}

function fixPrecision(n) {
  const precision = String(props.precision || props.step).split('.')[1]
  return parseFloat(n.toFixed(precision ? precision.length : 0), 10)
}
</script>

<style lang="scss">
.g-input-number {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 5px 10px;
  padding: 5px;
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  &__minus,
  &__plus {
    position: relative;
    min-width: 22px;
    min-height: 22px;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba($color: $colorPrimary, $alpha: 1);
    transition: all 0.3s ease;
    backface-visibility: hidden;
    outline: none;
    border: 0;
    &.is-disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
  }
  &__minus {
    transform: translate3d(-10px, 0, 0);
    &:active {
      transform: translate3d(-10px, 0, 0) scale(0.9);
    }
  }
  &__plus {
    transform: translate3d(10px, 0, 0);
    &:active {
      transform: translate3d(10px, 0, 0) scale(0.9);
    }
  }
  &__inner {
    flex: 1 0 40px;
    margin: 0;
    padding: 4px;
    border: 0;
    -webkit-appearance: none;
    outline: none;
    transition: all 0.2s ease;
    width: 40px;
    text-align: center;
    background: transparent;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &.is-change {
      transform: translate3d(0, -2px, 0);
      opacity: 0.5;
    }
  }
}
</style>
