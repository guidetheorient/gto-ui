<template>
  <div>
    <g-button @click="open">一直显示</g-button>
  </div>
</template>

<script setup>
import { GMessage } from '@/../lib/GMessage/index.es.js'

let close
const open = () => {
  close = GMessage({
    duartion: 0,
    message: '奉天承运，皇帝诏曰',
    type: 'danger',
    onClick: () => {
      close()
      GMessage({ message: '再来一个' })
    }
  })
}
</script>
