<template>
  <div class="">
    <h2>基础用法</h2>
    <GInputNumber v-model="number1"></GInputNumber>
    <GInputNumber v-model="number2" disabled></GInputNumber>

    <h2>最大最小值</h2>
    <GInputNumber :min="-1" v-model="number3"></GInputNumber>
    <GInputNumber :max="10" v-model="number4"></GInputNumber>

    <h2>数值精度</h2>
    <GInputNumber :min="-1" :max="5" :precision="0.001" :step="0.13" v-model="number5"></GInputNumber>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let number1 = ref(1)
let number2 = ref(1)
let number3 = ref(1)
let number4 = ref(1)
let number5 = ref(1)
</script>

<style lang="scss" scoped></style>
