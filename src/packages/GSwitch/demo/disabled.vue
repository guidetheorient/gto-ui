<template>
  <div>
    <GSwitch v-model="value3" disabled></GSwitch>
    <GSwitch v-model="value4" disabled></GSwitch>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value3 = ref(false)
const value4 = ref(true)
</script>
