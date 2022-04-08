<template>
  <div>
    <h2>基础用法</h2>
    <GButton @click="visible = !visible">toggle Dialog</GButton>
    <GDialog v-model="visible" title="Dialog Title" width="30%">
      <span>弹弹弹，弹出个大西瓜……</span>
      <template #footer>
        <GButton size="small" @click="visible = !visible">取消</GButton>
        <GButton size="small" type="primary" @click="visible = !visible">确认</GButton>
      </template>
    </GDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
