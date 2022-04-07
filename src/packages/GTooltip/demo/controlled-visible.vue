<template>
  <div>
    <GTooltip v-model:visible="visible" content="default prompts info">
      <div style="display: flex; align-items: center">
        <GIcon style="margin: 0 10px">
          <SmileOutlined></SmileOutlined>
        </GIcon>
        tooltip 容器
        <GIcon style="margin: 0 10px">
          <SmileOutlined></SmileOutlined>
        </GIcon>
      </div>
    </GTooltip>

    <GButton @click="toggleVisible">取反 visible</GButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmileOutlined } from '@vicons/antd'

let visible = ref(false)

function toggleVisible() {
  visible.value = !visible.value
}
</script>
