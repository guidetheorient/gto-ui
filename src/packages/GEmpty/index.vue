<template>
  <div :class="[ns]">
    <img :style="{ width: imageWidth + 'px' }" :src="image" alt="" />
    <p :class="[ns + '__desc']">{{ description }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GEmpty'
}
</script>

<script setup>
const ns = 'g-empty'

import defaultImage from './undraw_handcrafts_box.svg'

const props = defineProps({
  image: {
    type: String,
    default: defaultImage
  },
  imageWidth: {
    type: Number,
    default: 100
  },
  description: {
    type: String,
    default: '没有数据'
  }
})
</script>

<style lang="scss">
$ns: '.g-empty';

#{$ns} {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  image {
    color: #909399;
  }
  &__desc {
    margin-top: 20px;
    color: #909399;
  }
}
</style>
