<template>
  <div>
    <p>$loading，在 Options API 中使用</p>
    <GButton @click="onLoading3Click" id="gbutton3">容器内 loading</GButton>
    <GButton @click="onLoading4Click">全屏 loading</GButton>
    <GButton @click="onLoading5Click">添加文字、背景色 loading</GButton>

    <p>GLoading，在 setup 或任意函数中使用</p>
    <GButton @click="onLoading6Click" id="gbutton6">容器内 loading</GButton>
    <GButton @click="onLoading7Click">全屏 loading</GButton>
    <GButton @click="onLoading8Click">添加文字、背景色 loading</GButton>
  </div>
</template>

<script>
export default {
  methods: {
    onLoading3Click() {
      const close = this.$loading({ target: '#gbutton3' })
      setTimeout(() => {
        close()
      }, 3000)
    },
    onLoading4Click() {
      const close = this.$loading()
      setTimeout(() => {
        close()
      }, 3000)
    },
    onLoading5Click() {
      const close = this.$loading({ background: 'rgba(0, 0, 0, 0.5)', title: '加载中……' })
      setTimeout(() => {
        close()
      }, 3000)
    }
  }
}
</script>

<script setup>
import { GLoading } from '@/../lib/GLoading/index.es.js'

function onLoading6Click() {
  const close = GLoading({ target: '#gbutton6' })
  setTimeout(() => {
    close()
  }, 3000)
}
function onLoading7Click() {
  const close = GLoading()
  setTimeout(() => {
    close()
  }, 3000)
}
function onLoading8Click() {
  const close = GLoading({ background: 'rgba(0, 0, 0, 0.5)', title: '加载中……' })
  setTimeout(() => {
    close()
  }, 3000)
}
</script>
