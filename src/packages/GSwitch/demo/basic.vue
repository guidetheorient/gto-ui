<template>
  <div>
    <GSwitch v-model="value1"></GSwitch>
    <GSwitch v-model="value2"></GSwitch>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
</script>
