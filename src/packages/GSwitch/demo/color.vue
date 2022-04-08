<template>
  <div>
    <GSwitch v-model="value7" activeColor="#ff4d6d" inactiveColor="#ffb3c1"></GSwitch>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value7 = ref(true)
</script>

<style lang="scss" scoped></style>
