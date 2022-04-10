<template>
  <div>
    <GDatePicker v-model="date"></GDatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref('2022-04-10')
</script>
