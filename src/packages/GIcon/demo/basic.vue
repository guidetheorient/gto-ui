<template>
  <div>
    <!-- 使用 GIcon 包裹 -->
    <GIcon>
      <SmileOutlined></SmileOutlined>
    </GIcon>
    <!-- 直接使用 -->
    <SmileOutlined width="18px" height="18px"></SmileOutlined>

    <GIcon :size="28">
      <SmileOutlined></SmileOutlined>
    </GIcon>

    <GIcon :size="28" color="#ffb5a7">
      <SmileOutlined></SmileOutlined>
    </GIcon>
  </div>
</template>

<script setup>
import { SmileOutlined } from '@vicons/antd'
</script>
