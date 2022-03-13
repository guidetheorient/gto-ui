<template>
  <div class="sider">
    <router-link 
      class="comp-link" 
      v-for="route in routes" 
      :to="route.path"
    >
      {{route.meta.name}}
    </router-link>
  </div>
</template>

<script>
import router from '../../router.js'

export default {
  setup() {
    const routes = router.getRoutes().filter((item) => item.path.startsWith('/G'))

    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.sider{
  padding-top: 30px;
  border-right: 1px solid #eee;
  .comp-link{
    padding: 5px 15px;
    &.router-link-active{
      border-left: 4px solid #646cff;
      color: #646cff;
    }
  }
}

</style>
