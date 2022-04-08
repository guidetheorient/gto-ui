<template>
  <div>
    <GButton @click="toggle">toggle Dialog</GButton>
    <GDialog v-model="visible" title="Dialog Title" width="30%">
      <span>弹弹弹，弹出个大西瓜……</span>
      <template #footer>
        <GButton size="small" @click="toggle('取消')">取消</GButton>
        <GButton size="small" type="primary" @click="toggle('确认')">确认</GButton>
      </template>
    </GDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { GMessage } from '@/../lib/GMessage/index.es.js'

const visible = ref(false)

const toggle = (message) => {
  console.log('----')
  visible.value = !visible.value
  if (typeof message === 'string') GMessage({ message, placement: 'bottom-right' })
}
</script>
