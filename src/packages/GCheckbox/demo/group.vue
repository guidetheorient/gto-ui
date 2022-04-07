<template>
  <div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
const checkList2 = ref([])
</script>
