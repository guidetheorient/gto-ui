<template>
  <div>
    <h2>基础用法</h2>
    <g-button @click="open">Show message</g-button>
  </div>
</template>

<script>
import { GMessage } from "../../packages/GMessage"

export default {
  mounted() {
    console.log('this.$mesaage')
    this.$message({ message: '奉天承运，皇帝诏曰: $message', type: 'primary' })
  },
  setup() {
    const open = () => {
      console.log('GMessage')
      GMessage({ message: '奉天承运，皇帝诏曰: GMessage 调用', type: 'danger', placement: 'bottom-center' })
    }

    return {
      open
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
