<template>
  <div>
    <h2>基础用法</h2>
    <g-tooltip content="default prompts info">
      <g-button>default</g-button>
    </g-tooltip>
    <g-tooltip content="top prompts info" placement="top">
      <g-button>top</g-button>
    </g-tooltip>
    <g-tooltip content="bottom prompts info" placement="bottom">
      <g-button>bottom</g-button>
    </g-tooltip>
    <g-tooltip content="left prompts info" placement="left">
      <g-button>left</g-button>
    </g-tooltip>
    <g-tooltip content="right prompts info" placement="right">
      <g-button>right</g-button>
    </g-tooltip>

    <h2>多行</h2>
    <g-tooltip placement="top" content="right prompts info info info info info info info info info info">
      <g-button>top</g-button>
    </g-tooltip>
    <g-tooltip placement="bottom" content="right prompts info info info info info info info info info info">
      <g-button>bottom</g-button>
    </g-tooltip>
    <g-tooltip placement="left" content="right prompts info info info info info info info info info info">
      <g-button>left</g-button>
    </g-tooltip>
    <g-tooltip placement="right" content="right prompts info info info info info info info info info info">
      <g-button>right</g-button>
    </g-tooltip>

    <h2>v-model:visible</h2>
    <g-tooltip v-model:visible="visible" content="default prompts info">
      <g-button @click="toggleVisible">显示 tooltip: {{ visible }}</g-button>
    </g-tooltip>
    <g-button @click="toggleVisible">toggleVisible</g-button>

    <h2>disabled</h2>
    <g-tooltip :disabled="disabled" content="default prompts info">
      <g-button @click="toggleDisabled">toggle disabled：{{ disabled }}</g-button>
    </g-tooltip>
  </div>
</template>

<script setup>
let visible = $ref(false)
let disabled = $ref(true)

function toggleVisible() {
  visible = !visible
}

function toggleDisabled() {
  disabled = !disabled
}
</script>

<style lang="scss"></style>
