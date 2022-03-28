<template>
  <div class="">
    <h2>基础用法</h2>
    <div>
      <p>{{ radio1 }}</p>
      <GRadio v-model="radio1" label="1">Option 1</GRadio>
      <GRadio v-model="radio1" label="2">Option 2</GRadio>
    </div>

    <h2>禁用</h2>
    <p>{{ radio2 }}</p>
    <GRadio v-model="radio2" label="1" disabled>Option 1</GRadio>
    <GRadio v-model="radio2" label="2" disabled>Option 2</GRadio>

    <h2>单选框组</h2>
    <GRadioGroup v-model="radio3">
      <GRadio :label="3">Option A</GRadio>
      <GRadio :label="6">Option B</GRadio>
      <GRadio :label="9">Option C</GRadio>
    </GRadioGroup>

    <GRadioGroup v-model="radio4" disabled>
      <GRadio :label="3">Option A</GRadio>
      <GRadio :label="6">Option B</GRadio>
      <GRadio :label="9">Option C</GRadio>
    </GRadioGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let radio1 = ref('')
let radio2 = ref('')
let radio3 = ref('')
let radio4 = ref(6)
</script>

<style lang="scss" scoped></style>
