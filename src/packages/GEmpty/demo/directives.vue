<template>
  <div>
    <GButton @click="empty = !empty">toggle Empty</GButton>
    <div
      g-empty-description="我对自由的向往"
      :g-empty-image="image"
      v-empty="empty"
      style="margin-top: 20px; height: 300px"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import image from '../undraw_no_data_re_kwbl.svg'

const empty = ref(true)
</script>
