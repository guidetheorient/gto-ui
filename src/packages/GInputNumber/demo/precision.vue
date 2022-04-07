<template>
  <div>
    <GInputNumber :min="-1" :max="5" :precision="0.001" :step="0.13" v-model="number5"></GInputNumber>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let number5 = ref(1.222)
</script>
