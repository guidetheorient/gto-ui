<template>
  <div>
    <!-- <h2>单选</h2>
    <GCascader :options="options" v-model="value" @change="onChange"></GCascader> -->

    <h2>多选</h2>
    <GCascader :options="options" :config="{ multiple: true }" v-model="value" @change="onChange"></GCascader>

    <!-- <h3>appendToBody</h3>
    <GCascader :options="options" appendToBody v-model="value" @change="onChange"></GCascader> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, '' + String(i))
      })
    } else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    } else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const value = ref([])
const options = getOptions()

function onChange(v) {
  console.log('onChange', JSON.parse(JSON.stringify(v)))
}
</script>
