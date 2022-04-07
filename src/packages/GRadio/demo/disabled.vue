<template>
  <div>
    <GRadio v-model="radio1" label="1" disabled>Option 1</GRadio>
    <GRadio v-model="radio2" label="2" disabled>Option 2</GRadio>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let radio1 = ref('1')
let radio2 = ref('')
</script>
