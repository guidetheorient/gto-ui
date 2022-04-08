<template>
  <div>
    <GSwitch v-model="value5" :loading="loading"></GSwitch>
    <GSwitch v-model="value6" :loading="loading"></GSwitch>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value5 = ref(false)
const value6 = ref(true)
const loading = ref(true)
</script>

<style>
.g-switch{
  margin-right: 15px;
}
</style>