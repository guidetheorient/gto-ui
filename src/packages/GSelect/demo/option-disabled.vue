<template>
  <div>
    <GSelect v-model="value" placeholder="Select">
      <GOption
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </GSelect>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('1')
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
    label: 'Yangzhou',
    disabled: true
  },
  {
    value: '4',
    label: 'Xuzhou',
    disabled: true
  },
  {
    value: '5',
    label: 'Jaxing'
  }
]
</script>
