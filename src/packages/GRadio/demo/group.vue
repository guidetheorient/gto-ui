<template>
  <div>
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

let radio3 = ref('')
let radio4 = ref(6)
</script>
