<template>
  <div>
    <h2>基础用法</h2>
    <g-button @click="$message({ type: 'primary', message: '奉天承运，皇帝诏曰' })">通过 this.$message 调用</g-button>
    <g-button @click="gMessageOpen">通过 GMessage 调用</g-button>

    <h2>不同状态</h2>
    <g-button @click="$message({ type: 'primary', message: '奉天承运，皇帝诏曰' })">primary</g-button>
    <g-button @click="$message({ type: 'success', message: '奉天承运，皇帝诏曰' })">success</g-button>
    <g-button @click="$message({ type: 'warning', message: '奉天承运，皇帝诏曰' })">warning</g-button>
    <g-button @click="$message({ type: 'danger', message: '奉天承运，皇帝诏曰' })">danger</g-button>

    <h2>不同位置</h2>
    <g-button @click="$message({ placement: 'top-left', message: '奉天承运，皇帝诏曰' })">top-left</g-button>
    <g-button @click="$message({ placement: 'top-center', message: '奉天承运，皇帝诏曰' })">top-center</g-button>
    <g-button @click="$message({ placement: 'top-right', message: '奉天承运，皇帝诏曰' })">top-right</g-button>
    <g-button @click="$message({ placement: 'bottom-left', message: '奉天承运，皇帝诏曰' })">bottom-left</g-button>
    <g-button @click="$message({ placement: 'bottom-center', message: '奉天承运，皇帝诏曰' })">bottom-center</g-button>
    <g-button @click="$message({ placement: 'bottom-right', message: '奉天承运，皇帝诏曰' })">bottom-right</g-button>

    <h2>一直显示，响应点击事件</h2>
    <g-button @click="open">一直显示</g-button>
  </div>
</template>

<script>
import { GMessage } from '../../packages/GMessage'

export default {
  setup() {
    const gMessageOpen = () => {
      GMessage({
        message: '奉天承运，皇帝诏曰: GMessage 调用'
      })
    }

    let close
    const open = () => {
      close = GMessage({
        duartion: 0,
        message: '奉天承运，皇帝诏曰: GMessage 调用',
        type: 'danger',
        onClick: () => {
          close()
          GMessage({ message: '再来一个' })
        }
      })
    }

    return {
      gMessageOpen,
      open
    }
  }
}
</script>

<style lang="scss" scoped></style>
