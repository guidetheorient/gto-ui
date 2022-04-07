<template>
  <div>
    <p>{{ radio1 }}</p>
    <GRadio v-model="radio1" label="1">Option 1</GRadio>
    <GRadio v-model="radio1" label="2">Option 2</GRadio>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let radio1 = ref('')
</script>
