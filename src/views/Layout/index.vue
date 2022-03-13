<template>
  <div class="layout">
    <Sider></Sider>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import Sider from './Sider.vue'

export default {
  components: {Sider}
}
</script>

<style lang="scss" scoped>
.layout{
  display: flex;
  .sider,
  .main{
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
  }
  .sider{
    flex: 0 0 250px;
  }
  .main{
    flex: 1;
    padding: 20px 30px;
  }
}
</style>
