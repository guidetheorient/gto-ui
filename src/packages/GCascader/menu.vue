<template>
  <ul :class="[ns + '__menu']">
    <Node v-for="(item, i) in nodes" :key="i" :node="item"></Node>
  </ul>
</template>

<script>
export default {
  name: 'GCascaderMenu'
}
</script>

<script setup>
import Node from './node.vue'

const ns = 'g-cascader'

const props = defineProps({
  nodes: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
$ns: '.g-cascader';

#{$ns}__menu {
  min-width: 180px;
  height: 240px;
  overflow: auto;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding-left: 0;
}
</style>
