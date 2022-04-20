<template>
  <li :class="[ns + '__option', { active: isInPath, checked: isChecked }]" @click="onOptionClick(node, i)">
    <div :class="[ns + '__option-left']">
      <!-- 多选 -->
      <GCheckbox
        v-if="isMultiple"
        :class="[ns + '__checkbox']"
        :modelValue="node.checked"
        :indeterminate="node.indeterminate"
        @update:modelValue="onCheckboxChange"
      />
      <span :class="[ns + '__label']">{{ node.label }}</span>
    </div>
    <div :class="[ns + '__option-right']">
      <GIcon v-if="!node.isLeaf" class="g-icon-right">
        <RightOutlined />
      </GIcon>
      <GIcon v-if="isChecked">
        <CheckOutlined />
      </GIcon>
    </div>
  </li>
</template>

<script>
export default {
  name: 'GCascaderMenuNode'
}
</script>

<script setup>
import { inject, computed } from 'vue'

import GIcon from '../GIcon/index.vue'
import GCheckbox from '../GCheckbox/GCheckbox.vue'
import { RightOutlined, CheckOutlined } from '@vicons/antd'

import { cascaderContextKey } from '../../tokens/index'

import { Node } from './helper'

const ns = 'g-cascader'

const props = defineProps({
  node: {
    type: Node
  }
})

const cascaderContext = inject(cascaderContextKey, {})

const { config, checkedNodes, expandingNodes } = cascaderContext
const isInPath = computed(() => {
  const expandingNodesVal = expandingNodes.value
  if (Array.isArray(expandingNodesVal)) {
    return expandingNodesVal.some((v) => v.uid === props.node.uid)
  }
  return false
})

const isChecked = computed(() => {
  const checkedNodesVal = checkedNodes.value
  if (Array.isArray(checkedNodesVal)) {
    return checkedNodesVal.some((v) => v.uid === props.node.uid)
  }
  return false
})

const isMultiple = computed(() => {
  return config.value.multiple
})

function onOptionClick(node, i) {
  node.active = true
  cascaderContext.expandMenu(node)
}

function onCheckboxChange(v) {
  // 1. check 当前项及其所有子孙项
  // 2. 维护 checkedNodes，使其保持一致
  cascaderContext.checkNodes(props.node, v)
}
</script>

<style lang="scss">
$ns: '.g-cascader';

#{$ns}__option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 15px;
  height: 32px;
  line-height: 32px;
  color: $textColor;
  &.active {
    color: $colorPrimary;
  }
  &-left {
    flex: 1;
    display: flex;
    #{$ns}__label {
      flex: 1;
      cursor: pointer;
    }
  }
  &-right {
    display: flex;
    .g-icon {
      font-size: 14px;
      .g-icon-right {
        cursor: pointer;
      }
    }
  }
  &.checked {
    #{$ns}__option-right {
      color: $colorPrimary;
    }
  }
}
</style>
