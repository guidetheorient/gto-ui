<template>
  <div>
    <p>$message，在 Options API 中使用</p>
    <GButton @click="$message({ type: 'primary', message: '奉天承运，皇帝诏曰' })">通过 this.$message 调用</GButton>

    <p>GMessage，在 setup 或任意函数中使用</p>
    <GButton @click="gMessageOpen">通过 GMessage 调用</GButton>
  </div>
</template>

<script setup>
import { GMessage } from '@/../lib/GMessage/index.es.js'

const gMessageOpen = () => {
  GMessage({
    message: '奉天承运，皇帝诏曰: GMessage 调用'
  })
}
</script>
