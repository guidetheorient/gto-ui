<template>
  <div>
    <h2>基础用法</h2>
    <GSelect v-model="value" placeholder="Select">
      <GOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </GSelect>

    <h2>禁用选项</h2>
    <GSelect v-model="value2" placeholder="Select">
      <GOption
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </GSelect>

    <h2>禁用状态</h2>
    <GSelect v-model="value3" disabled placeholder="Select">
      <GOption
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </GSelect>

    <h2>多选</h2>
    <GSelect v-model="value4" multiple placeholder="Select">
      <GOption
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </GSelect>

    <h2>筛选</h2>
    <GSelect v-model="value4" multiple filterable placeholder="Select">
      <GOption
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </GSelect>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const value = ref('2')
const options = [
  {
    value: '1',
    label: 'Option1'
  },
  {
    value: '2',
    label: 'Option2'
  },
  {
    value: '3',
    label: 'Option3'
  },
  {
    value: '4',
    label: 'Option4'
  },
  {
    value: '5',
    label: 'Option5'
  }
]

const value2 = ref('4')
const options2 = [
  {
    value: '1',
    label: 'Option1'
  },
  {
    value: '2',
    label: 'Option2',
    disabled: true
  },
  {
    value: '3',
    label: 'Option3'
  },
  {
    value: '4',
    label: 'Option4'
  },
  {
    value: '5',
    label: 'Option5'
  }
]

const value3 = ref('1')
const options3 = [
  {
    value: '1',
    label: 'Option1'
  },
  {
    value: '2',
    label: 'Option2',
    disabled: true
  },
  {
    value: '3',
    label: 'Option3'
  },
  {
    value: '4',
    label: 'Option4'
  },
  {
    value: '5',
    label: 'Option5'
  }
]

const value4 = ref(['1', '2', '3'])
const options4 = [
  {
    value: '1',
    label: 'Option1'
  },
  {
    value: '2',
    label: 'Option2',
    disabled: true
  },
  {
    value: '3',
    label: 'Option3'
  },
  {
    value: '4',
    label: 'Option4'
  },
  {
    value: '5',
    label: 'Option5'
  }
]

watchEffect(() => {
  console.log(value4.value)
})
</script>

<style lang="scss"></style>
