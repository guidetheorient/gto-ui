<template>
  <div>
    <GDatePicker v-model="date2" type="daterange"></GDatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date2 = ref([])
</script>
