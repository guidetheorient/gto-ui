<template>
  <div>
    <GCheckboxGroup v-model="checkedCities" :min="1" :max="3">
      <GCheckbox v-for="city in cities" :key="city" :value="city">{{ city }}</GCheckbox>
    </GCheckboxGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedCities = ref(['Huaian', 'Nanjing'])
const cities = ['Huaian', 'Yancheng', 'Nanjing', 'Suzhou', 'Suqian', 'Wuxi']
</script>
