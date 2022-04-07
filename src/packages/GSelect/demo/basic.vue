<template>
  <div>
    <GSelect v-model="value">
      <GOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </GSelect>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('2')
const options = [
  {
    value: '1',
    label: 'Huaian'
  },
  {
    value: '2',
    label: 'Nanjing'
  },
  {
    value: '3',
    label: 'Yangzhou'
  },
  {
    value: '4',
    label: 'Xuzhou'
  },
  {
    value: '5',
    label: 'Jaxing'
  }
]
</script>
