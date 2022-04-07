<template>
  <div class="">
    <h2>指令 v-loading</h2>
    <GButton v-loading="loading1" @click="onLoading1Click">Loading</GButton>

    <GButton v-loading="loading1" g-loading-background="rgba(0,0,0,0.7)" @click="onLoading1Click">
      Loading g-loading-background="rgba(0,0,0,0.7)"
    </GButton>

    <GButton v-loading.fullscreen="loading2" @click="onLoading2Click">Loading</GButton>
    <h2>this.$loading()</h2>
    <GButton @click="onLoading3Click" id="gbutton3">$loading({ target: '#gbutton3' })</GButton>
    <GButton @click="onLoading4Click">$loading()</GButton>
    <GButton @click="onLoading5Click">$loading({background: 'lightblue', title: '加载中……'})</GButton>

    <h2>GLoading()</h2>
    <GButton @click="onLoading6Click" id="gbutton6">GLoading({ target: '#gbutton3' })</GButton>
    <GButton @click="onLoading7Click">GLoading()</GButton>
    <GButton @click="onLoading8Click">GLoading({background: 'lightblue', title: '加载中……'})</GButton>
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
      const close = this.$loading({ background: 'rgba(0, 0, 0, 0.6)', title: '加载中……' })
      setTimeout(() => {
        close()
      }, 3000)
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'

import { GLoading } from '../../packages/GLoading'

const loading1 = ref(false)
const loading2 = ref(false)

const onLoading1Click = () => {
  loading1.value = true
  setTimeout(() => {
    loading1.value = false
  }, 2000)
}

const onLoading2Click = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}

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
  const close = GLoading({ background: 'rgba(0, 0, 0, 0.6)', title: '加载中……' })
  setTimeout(() => {
    close()
  }, 3000)
}
</script>

<style lang="scss" scoped></style>
