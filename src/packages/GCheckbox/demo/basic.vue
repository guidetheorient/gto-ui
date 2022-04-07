<template>
  <div>
    
    <GCheckbox v-model="checked1" value="Option 1" />
    <GCheckbox v-model="checked2" value="Option 2" disabled />
    <GCheckbox v-model="checked3" value="Option 3" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
