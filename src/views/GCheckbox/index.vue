<template>
  <div>
    <h2>基础用法</h2>
    <div>
      <p>单个使用，绑定值为 boolean 值</p>
      <GCheckbox v-model="checked1" value="Option 1" />
      <GCheckbox v-model="checked2" value="Option 2" disabled />
      <GCheckbox v-model="checked3" value="Option 2" disabled />
    </div>

    <h2>多选框组</h2>
    <p>{{ checkList }}</p>
    <GCheckboxGroup v-model="checkList">
      <GCheckbox value="Option A" />
      <GCheckbox value="Option B" />
      <GCheckbox value="Option C" />
      <GCheckbox value="disabled" disabled />
      <GCheckbox value="selected and disabled" disabled />
    </GCheckboxGroup>

    <p>{{ checkList2 }}</p>
    <GCheckboxGroup v-model="checkList2">
      <GCheckbox :value="{ a: 1 }" />
      <GCheckbox :value="{ a: 2 }" />
      <GCheckbox :value="{ a: 3 }" />
    </GCheckboxGroup>

    <p>可选数量限制</p>
    <GCheckboxGroup v-model="checkedCities" :min="1" :max="2">
      <GCheckbox v-for="city in cities" :key="city" :value="city">{{ city }}</GCheckbox>
    </GCheckboxGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)

const checkList = ref(['selected and disabled', 'Option A'])
const checkList2 = ref([])

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

<style lang="scss"></style>
