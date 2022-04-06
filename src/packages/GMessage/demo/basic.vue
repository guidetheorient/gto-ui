<template>
  <div>
    <GButton @click="$message({ type: 'primary', message: '奉天承运，皇帝诏曰' })">通过 this.$message 调用</GButton>

    <GButton @click="gMessageOpen">通过 GMessage 调用</GButton>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$message)
  }
}
</script>

<script setup>
import { GMessage } from '@/../dist/GMessage/index.es.js'

const gMessageOpen = () => {
  GMessage({
    message: '奉天承运，皇帝诏曰: GMessage 调用'
  })
}
</script>
