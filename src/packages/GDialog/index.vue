<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div :class="[ns + '__wrapper']" v-show="modelValue">
        <div :class="[ns + '__mask']" @click="onModalClick"></div>
        <div :class="[ns]" :style="{ width }" @click.stop ref="contentRef">
          <div :class="[ns + '__header']" v-if="$slots.header || title || showClose">
            <span :class="[ns + '__title']">{{ title }}</span>
            <slot name="header"></slot>
            <GIcon :class="[ns + '__close']" @click="close"><CloseOutlined /></GIcon>
          </div>
          <div :class="[ns + '__content']">
            <slot></slot>
          </div>
          <div :class="[ns + '__footer']" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'GDialog'
}
</script>

<script setup>
import { ref, watch, computed } from 'vue'

import GIcon from '../GIcon/index.vue'
import { CloseOutlined } from '@vicons/antd'

import { isNumber, set } from 'lodash-es'

const ns = 'g-dialog'

const props = defineProps({
  modelValue: {
    type: Boolean
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number],
    default: '50%'
  },
  title: {
    type: String
  },
  showClose: {
    type: Boolean,
    default: true
  },
  appendToBody: {
    type: Boolean
  }
})

const width = computed(() => {
  return isNumber(props.width) ? props.width + 'px' : props.width
})

const contentRef = ref(null)

watch(
  () => props.modelValue,
  (val) => {
    console.log(val)
  }
)

const emit = defineEmits(['update:modelValue'])

function open() {
  emit('update:modelValue', true)
}
function close() {
  emit('update:modelValue', false)
}

function onModalClick() {
  if (props.closeOnClickModal) {
    close()
  }
}

function beforeEnter(el) {
  el.style.opacity = 0
  contentRef.value.style.transform = 'scale(0)'
}
function enter(el, done) {
  setTimeout(() => {
    el.style.opacity = 1
    contentRef.value.style.transform = 'scale(1)'
    el.style.transition = 'all .3s ease'
    contentRef.value.style.transition = 'all .3s ease'

    contentRef.value.addEventListener('transitionend', next)

    function next() {
      contentRef.value.removeEventListener('transitionend', next)
      done()
    }
  })
}
function afterEnter(el) {
  el.style.opacity = ''
  contentRef.value.style.transform = ''
  el.style.transition = ''
  contentRef.value.style.transition = ''
}

function leave(el, done) {
  el.style.opacity = 0
  contentRef.value.style.transform = 'scale(0)'
  el.style.transition = 'all .3s ease'
  contentRef.value.style.transition = 'all .3s ease'

  contentRef.value.addEventListener('transitionend', next)

  function next() {
    contentRef.value.removeEventListener('transitionend', next)
    done()
  }
}
function afterLeave(el) {
  el.style.opacity = ''
  contentRef.value.style.transform = ''
}

defineExpose({ open })
</script>

<style lang="scss">
$ns: '.g-dialog';
#{$ns}__wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
}
#{$ns}__mask {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
}
#{$ns} {
  position: relative;
  z-index: 10;
  width: 100px;
  background-color: $light;
  border-radius: 4px;
  &__header {
    position: relative;
    padding: 15px 20px 10px;
    color: $textColor;
    #{$ns}__title {
      font-size: 18px;
    }
    #{$ns}__close {
      font-size: 18px;
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 10px;
      &:hover {
        color: $colorPrimary;
      }
    }
  }
  &__content {
    padding: 20px 30px;
  }
  &__footer {
    padding: 10px 20px 15px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
