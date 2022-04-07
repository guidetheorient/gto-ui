<template>
  <div>
    <GTooltip :disabled="disabled" content="default prompts info">
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

    <GButton @click="toggleDisabled">
      <template v-if="disabled">哎呀，前面的 tooltip 无论如何都显示不了了</template>
      <template v-else>前面的 tooltip 可以显示哦</template>
    </GButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmileOutlined } from '@vicons/antd'

let disabled = ref(false)

function toggleDisabled() {
  disabled.value = !disabled.value
}
</script>
