<template>
  <div :class="[ns]" :style="rootStyle" v-if="visible">
    <div :class="[ns + '__content']">
      <GIcon :class="[ns + '__icon']">
        <LoadingOutlined />
      </GIcon>
      <p :class="[ns + '__desc']" v-if="title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GLoading'
}
</script>

<script setup>
import { ref, computed } from 'vue'

import GIcon from '../GIcon/index.vue'
import { LoadingOutlined } from '@vicons/antd'

const visible = ref(true)
const title = ref('')
const background = ref(null)
const fullscreen = ref(null)

const ns = 'g-loading'

const rootStyle = computed(() => {
  const style = {}
  if (background.value) {
    style.background = background.value
  }
  if (fullscreen.value) {
    console.log(fullscreen.value)
    style.position = 'fixed'
  }

  return style
})

const close = () => {
  visible.value = false
}

defineExpose({ visible, title, background, fullscreen, close })
</script>

<style lang="scss">
$ns: '.g-loading';

.g-loading {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  &__content {
    text-align: center;
    #{$ns}__icon {
      color: $colorPrimary;
      animation: rotate 1s linear infinite;
    }
    #{$ns}__desc {
      line-height: 20px;
      font-size: 12px;
      color: $textColor;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
