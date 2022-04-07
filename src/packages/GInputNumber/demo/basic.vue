<template>
  <div>
    <GInputNumber v-model="number1"></GInputNumber>
    <GInputNumber v-model="number2" disabled></GInputNumber>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let number1 = ref(1)
let number2 = ref(1)
</script>
