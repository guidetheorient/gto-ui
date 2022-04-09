<template>
  <div>
    <h2>基础用法</h2>
    <GEmpty></GEmpty>

    <h2>指令</h2>
    <GButton @click="empty = !empty">toggle Empty</GButton>
    <div
      v-empty="empty"
      g-empty-description="我对自由的向往"
      :g-empty-image="image"
      style="margin-top: 20px; height: 300px; width: 100%"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const empty = ref(true)
const image = new URL('./undraw_no_data_re_kwbl.svg', import.meta.url).href
</script>
