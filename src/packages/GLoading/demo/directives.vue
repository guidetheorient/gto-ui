<template>
  <div>
    <GButton v-loading="state.loading1" @click="onLoadingClick('loading1')">指令绑定元素的 loading</GButton>

    <GButton v-loading="state.loading2" g-loading-background="rgba(0,0,0,0.7)" @click="onLoadingClick('loading2')">
      添加了各种属性的 loading
    </GButton>

    <GButton
      v-loading.fullscreen="state.loading3"
      g-loading-background="rgba(0,0,0,0.7)"
      g-loading-text="加载中……"
      @click="onLoadingClick('loading3')"
      >全屏 loading</GButton
    >
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  loading1: false,
  loading2: false,
  loading3: false
})

const onLoadingClick = (key) => {
  state[key] = true
  setTimeout(() => {
    state[key] = false
  }, 2000)
}
</script>
