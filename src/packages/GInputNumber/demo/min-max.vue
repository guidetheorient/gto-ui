<template>
  <div>
    <GInputNumber :min="-1" v-model="number3"></GInputNumber>
    <GInputNumber :max="10" v-model="number4"></GInputNumber>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let number3 = ref(-1)
let number4 = ref(10)
</script>
