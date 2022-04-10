<template>
  <div>
    <GDatePicker v-model="date"></GDatePicker>

    <GDatePicker v-model="date2" type="daterange"></GDatePicker>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const date = ref('2022-04-10')
const date2 = ref([])

watch(date, (val) => {
  console.log(val, typeof val)
})

watch(date2, (val) => {
  console.log(val, '----')
})
</script>
