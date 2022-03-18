<template>
  <div class="g-icon-examples">
    <h2>基础用法</h2>
    <GIcon>
      <AlertTwotone />
    </GIcon>
    <GIcon>
      <ArrowRightOutlined />
    </GIcon>
    <GIcon>
      <CloseCircleOutlined />
    </GIcon>

    <h2>颜色</h2>
    <GIcon color="red">
      <CloseCircleOutlined />
    </GIcon>
    <GIcon color="rgb(70, 150, 0)">
      <CloseCircleOutlined />
    </GIcon>
    <GIcon color="#BC1254">
      <CloseCircleOutlined />
    </GIcon>

    <h2>大小</h2>
    <GIcon :size="20">
      <CloseCircleOutlined />
    </GIcon>
    <GIcon size="30px">
      <CloseCircleOutlined />
    </GIcon>
    <GIcon size="2rem">
      <CloseCircleOutlined />
    </GIcon>
  </div>
</template>

<script setup>
// https://www.xicons.org/
import { AlertTwotone, ArrowRightOutlined, CloseCircleOutlined } from '@vicons/antd'
// import GIcon from '../../packages/GIcon/index.vue'
</script>

<style lang="scss" scoped>
.g-icon-examples {
  // font-size: 30px;
}
</style>
