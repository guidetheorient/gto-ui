<template>
  <div>
    <h2>基础用法</h2>
    <div>
      <GButton>default</GButton>
      <GButton type="primary">primary</GButton>
      <GButton type="success">success</GButton>
      <GButton type="warning">warning</GButton>
      <GButton type="danger">danger</GButton>
      <GButton type="text">text</GButton>
    </div>
    <div>
      <GButton round>default</GButton>
      <GButton type="primary" round>primary</GButton>
      <GButton type="success" round>success</GButton>
      <GButton type="warning" round>warning</GButton>
      <GButton type="danger" round>danger</GButton>
      <GButton type="text" round>text</GButton>
    </div>
    <div>
      <GButton circle>default</GButton>
      <GButton type="primary" circle>primary</GButton>
      <GButton type="success" circle>success</GButton>
      <GButton type="warning" circle>warning</GButton>
      <GButton type="danger" circle>danger</GButton>
      <GButton type="text" circle>text</GButton>
    </div>


    <h2>禁用状态</h2>
    <div>
      <GButton disabled>default</GButton>
      <GButton type="primary" disabled>primary</GButton>
      <GButton type="success" disabled>success</GButton>
      <GButton type="warning" disabled>warning</GButton>
      <GButton type="danger" disabled>danger</GButton>
      <GButton type="text" disabled>text</GButton>
    </div>

    <h2>各种尺寸的按钮</h2>
    <div>
      <GButton size="large">large</GButton>
      <GButton>default</GButton>
      <GButton size="small">GButton</GButton>
    </div>
    <div>
      <GButton size="large" round>large</GButton>
      <GButton round>default</GButton>
      <GButton size="small" round>GButton</GButton>
    </div>
    <div>
      <GButton size="large" circle>large</GButton>
      <GButton circle>default</GButton>
      <GButton size="small" circle>GButton</GButton>
    </div>
  </div>
</template>

<script>
import GButton from "../../packages/GButton/index.vue";
export default {
    components: { GButton }
}
</script>

<style lang="scss" scoped>
h2 ~ div {
  padding: 10px;
}
</style>
