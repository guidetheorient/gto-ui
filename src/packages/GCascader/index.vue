<template>
  <div :class="[ns]" v-click-outside:[menusRef]="onClose">
    <div :class="[ns + '__input-wrapper']" ref="cascaderInputRef" @click="toggleShowOptions">
      <input type="text" :class="[ns + '__input']" placeholder="cascader select" :value="inputValue" />
    </div>

    <Teleport to="body" :disabled="!appendToBody">
      <Transition name="cascader-menus">
        <div :class="[ns + '__menus']" v-show="visible" ref="menusRef" :style="menusStyle">
          <Menu v-for="(menu, i) in menus" :nodes="menu" :key="i"></Menu>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'GCascader'
}
</script>

<script setup>
import { ref, watch, provide, computed } from 'vue'

import Menu from './menu.vue'

import vClickOutside from '../../directives/clickOutside'

import { cascaderContextKey } from '../../tokens/index'

import { useConfig, Store } from './helper'

const ns = 'g-cascader'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array,
    default: () => []
  },
  appendToBody: {
    type: Boolean,
    default: false
  },
  config: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const visible = ref(false)
// 用于显示下拉菜单，子项也是一个 Array，一项就是级联的一个层级
const menus = ref([])
// 当前展开的节点，包含多个，不包含叶子节点
const expandingNodes = ref(null)
// input 显示 label
const inputValue = ref('')
// 当前选中项
const checkedNodes = ref(null)

const menusStyle = ref({})

const menusRef = ref(null)
const cascaderInputRef = ref(null)

const config = useConfig(props)

const isMultiple = computed(() => {
  return config.value.multiple
})

let store

function toggleShowOptions() {
  visible.value = !visible.value
}

watch(
  () => props.options,
  () => {
    initStore()
  },
  {
    deep: true,
    immediate: true
  }
)

watch(checkedNodes, () => {
  let modelValue
  if (isMultiple.value) {
    modelValue = checkedNodes.value.map((v) => v.pathValues)
    inputValue.value = checkedNodes.value.map((v) => v.pathLabels.join(' / '))
  } else {
    modelValue = checkedNodes.value?.[0].pathValues
    inputValue.value = checkedNodes.value?.[0].pathLabels.join(' / ')
  }
  emit('update:modelValue', modelValue)
  emit('change', modelValue)
})

watch(visible, (val) => {
  if (val && props.appendToBody) {
    menusStyle.value = useOptionsPosition(cascaderInputRef)
  }
})

function initStore() {
  store = new Store(props.options, config.value)
  menus.value = [store.getNodes()]
}

function expandMenu(node) {
  const { level, isLeaf } = node

  let newMenus = menus.value.slice(0, level)

  if (isLeaf) {
    // 选中节点
    if (!isMultiple.value) {
      checkedNodes.value = [node]
      visible.value = false
    }
  } else {
    // 展开下级节点
    newMenus.push(node.children)
  }

  expandingNodes.value = node.pathNodes
  menus.value = newMenus
}

function checkNodes(node, checked) {
  if (isMultiple.value) {
    node.doCheck(checked)
    calcCheckedNodes()
    checked && expandMenu(node)
  }
}

function calcCheckedNodes() {
  if (isMultiple.value) {
    checkedNodes.value = store.getFlattedNodes(true).filter((v) => v.checked)
  }
}

function onClose(e) {
  console.log('----', e.target)
  visible.value = false
}

function useOptionsPosition(relativeElRef) {
  const scrollY = window.scrollY || document.body.scrollTop
  const scrollX = window.scrollX || document.body.scrollLeft
  const { width, left, bottom } = relativeElRef.value.getBoundingClientRect()

  return {
    position: 'fixed',
    width: width + 'px',
    left: left + scrollX + 'px',
    top: bottom + scrollY + 'px'
  }
}

function getCheckedNodes(leafOnly) {
  return store.getFlattedNodes(leafOnly).filter((v) => v.checked)
}

defineExpose({
  getCheckedNodes
})

const context = {
  expandMenu,
  checkNodes,
  config,
  expandingNodes,
  checkedNodes
}

provide(cascaderContextKey, context)
</script>

<style lang="scss">
$ns: '.g-cascader';

#{$ns} {
  &__input-wrapper {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 1px;
    display: inline-flex;
  }
  &__input {
    padding: 5px 10px;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border: none;
    outline: none;
    -webkit-appearance: none;
  }
  &__menus {
    position: absolute;
    z-index: 2000;
    background-color: #fff;
    display: flex;
    margin-top: 5px;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      margin-right: 2px;
      width: 6px;
      border-radius: 4px;
      background-color: #dcdfe6;
    }
  }
}

.cascader-menus-enter-from,
.cascader-menus-leave-to {
  opacity: 0;
  transform: translate(0, -10px);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  &::after {
    opacity: 0;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  }
}
.cascader-menus-enter-active,
.cascader-menus-leave-active {
  transition: all 0.25s ease;
}
</style>
