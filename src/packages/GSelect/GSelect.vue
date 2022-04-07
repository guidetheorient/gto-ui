<template>
  <div
    :class="[ns, { active: visible, disabled }]"
    :style="{ width: _width }"
    ref="selectRootRef"
    v-click-outside:[optionsRef]="onClose"
  >
    <div :class="[ns + '__input-wrapper']" @click="toggleShowOptions">
      <template v-if="multiple">
        <div :class="[ns + '__tags']" ref="tagsRef">
          <span :class="[ns + '__tag']" v-for="option in selected" :key="option.value">
            {{ option.label }}
            <GIcon :class="[ns + '__icon-close']" @click.stop="deleteTag(option)">
              <CloseOutlined />
            </GIcon>
          </span>
          <!-- 多选时的 filter input -->
          <input
            v-if="filterable"
            ref="filterInputRef"
            v-model="query"
            :class="[ns + '__filter-input']"
            type="text"
            :style="{ width: filterInputWidth + 'px' }"
            @input="debouncedQueryChange"
            @compositionstart="onComposition"
            @compositionupdate="onComposition"
            @compositionend="onComposition"
            @blur="onBlur"
          />
        </div>
      </template>
      <input
        :class="[ns + '__input', { multiple }]"
        ref="inputRef"
        :value="valueLabel"
        :readonly="inputReadonly"
        :disabled="disabled"
      />
      <GIcon :class="[ns + '__icon-select', { active: visible }]">
        <DownOutlined />
      </GIcon>
    </div>

    <Teleport to="body">
      <transition name="select-options">
        <div :class="[ns + '__options']" v-show="visible" :style="optionsStyle" ref="optionsRef">
          <div :class="[ns + '__options-content']">
            <span v-if="allOptionInVisible">no data available</span>
            <!-- 这里其实修改了 props.modelValue，不符合规范的 -->
            <GCheckboxGroup
              v-if="multiple"
              :modelValue="modelValue"
              @update:modelValue="onCheckboxGroupModelValueUpdate"
            >
              <slot></slot>
            </GCheckboxGroup>
            <slot v-else></slot>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'GSelect'
}
</script>

<script setup>
/**
 * 功能：
 * - 基础
 *   - 点击 input 展开 options
 *   - 点击页面空白处 options 关闭
 *   - option 支持 disabled，disabled option 不响应点击事件
 */

/**
 * 1. input label 如何与 modelValue 值对应
 * 2. input 使用 v-model 还是直接 input.value 设置
 */
import { provide, computed, ref, watch, toRefs, nextTick, onMounted } from 'vue'

import GCheckboxGroup from '../GCheckbox/GCheckboxGroup.vue'
import GIcon from '../GIcon/index.vue'
import { DownOutlined, CloseOutlined } from '@vicons/antd'

import vClickOutside from '../../directives/clickOutside'
import { selectContextKey } from '../../tokens/index'
import { debounce } from 'lodash-es'

const ns = 'g-select'

const props = defineProps({
  modelValue: {
    required: true
  },
  width: {
    type: String,
    default: '200px'
  },
  disabled: {
    type: Boolean
  },
  filterable: {
    type: Boolean
  },
  filterMethod: {
    type: Function
  },
  multiple: {
    type: Boolean
  }
})

const optionsStyle = ref(null)

const visible = ref(false)
// 所有 GOption 选项
const options = ref([])
// 选中项，多选时为数组，单选时为对象 {value: '', label: ''}
const selected = ref(null)
// input 初始高度
const initialInputHeight = ref(0)

const isOnComposition = ref(false)

const filterInputWidth = ref(50)
const query = ref('')

const selectRootRef = ref(null)
const inputRef = ref(null)
const optionsRef = ref(null)
const tagsRef = ref(null)
const filterInputRef = ref(null)

const _width = computed(() => {
  return props.width || '200px'
})

const valueLabel = computed({
  get() {
    return getValueLabel()
  },
  set(v) {
    console.log(v)
  }
})

const inputReadonly = computed(() => {
  return !props.filterable
})

const debounceTime = computed(() => (props.remote ? 300 : 0))

const allOptionInVisible = computed(() => {
  return options.value.every((option) => {
    return !option.visible
  })
})

watch(visible, (val) => {
  if (val) {
    setPosition()
  }
})

watch(
  () => props.modelValue,
  () => {
    nextTick(() => {
      //  option 一开始还没加入到 options 中
      calcSelected()
      calcFilterInputWidth()
    })

    if (props.multiple) {
      setInputHeight()
      if (props.filterable) {
        query.value = ''
      }
    }
  },
  { deep: true, immediate: true }
)

const emit = defineEmits(['update:modelValue', 'change'])

const debouncedQueryChange = debounce((e) => {
  onQueryChange(e.target.value)
}, debounceTime.value)

function onQueryChange(val) {
  console.log(val)
  if (isOnComposition.value) return
  if (props.filterMethod) {
    props.filterMethod(val)
  } else {
    options.value.forEach((option) => {
      option.visible = option.label?.includes(val)
    })
  }

  calcFilterInputWidth()
}
function calcFilterInputWidth() {
  nextTick(() => {
    if (!props.filterable) return

    let rect = selectRootRef.value.getBoundingClientRect()

    filterInputWidth.value = query.value.length
      ? Math.min(rect.width - 35, Math.max(50, filterInputRef.value.scrollWidth))
      : selected.value.length === 0
      ? rect.width - 35
      : 50
  })

  if (visible.value) {
    setPosition()
  }
}

function onBlur() {
  query.value = ''
  options.value.forEach((option) => {
    option.visible = true
  })
}

function onComposition(e) {
  if (e.type === 'compositionend') {
    isOnComposition.value = false
  } else {
    isOnComposition.value = true
  }
}

function calcSelected() {
  console.log('calclSelected')
  if (props.multiple) {
    if (Array.isArray(props.modelValue)) {
      selected.value = props.modelValue.reduce((acc, value) => {
        let option = getOption(value)
        if (option) acc.push(option)
        return acc
      }, [])
    }
  } else {
    selected.value = getOption(props.modelValue)
  }
}
function getOption(value) {
  // 为什么这里不是 option.value.value，明明 option.value 是 ref 啊？？
  let option = options.value.find((option) => {
    return option.value === value
  })

  return option
}

// 1. 设置 input 高度撑开 input__wrapper
// 2. 重新计算下拉菜单位置
function setInputHeight() {
  nextTick(() => {
    if (!props.multiple) return

    const initialInputHeightVal = initialInputHeight.value
    const tagsRefVal = tagsRef.value

    inputRef.value.style.height = selected.value.length
      ? Math.max(
          initialInputHeightVal,
          tagsRefVal ? tagsRefVal.clientHeight + (tagsRefVal.clientHeight > initialInputHeightVal ? 6 : 0) : 0
        ) + 'px'
      : initialInputHeightVal + 'px'

    if (visible.value) {
      setPosition()
    }
  })
}

function deleteTag({ value }) {
  let _modelValue = props.modelValue.slice()
  let i = _modelValue.indexOf(value)
  if (i > -1) _modelValue.splice(i, 1)

  emit('update:modelValue', _modelValue)
  emit('change', _modelValue)
}

function addOption(option) {
  options.value.push(option)
}
function removeOption(uid) {
  let i = options.value.findIndex((option) => option.uid === uid)
  if (i > -1) {
    options.value.splice(i, 1)
  }
}
function onOptionClick({ value }) {
  if (props.multiple) {
    // 交给 checkboxGroup 来处理
    return
  }

  const valueVal = value.value
  emit('update:modelValue', valueVal)
  emit('change', valueVal)
  visible.value = false
}

function onCheckboxGroupModelValueUpdate(value) {
  emit('update:modelValue', value)
  emit('change', value)
}

function getValueLabel() {
  if (props.multiple) {
    return selected.value?.map((option) => option.label).join(',')
  }
  console.log(selected)
  return selected.value?.label
}

function toggleShowOptions() {
  if (props.disabled) return
  visible.value = !visible.value
}

function setPosition() {
  const scrollY = window.scrollY || document.body.scrollTop
  const scrollX = window.scrollX || document.body.scrollLeft
  const { left, height, bottom } = inputRef.value.getBoundingClientRect()
  const width = selectRootRef.value.clientWidth

  optionsStyle.value = {
    width: width + 'px',
    top: bottom + scrollY + 'px',
    left: left + scrollX + 'px'
  }
}

function onClose() {
  visible.value = false
}

if (props.multiple && !Array.isArray(props.modelValue)) {
  emit('update:modelValue', [])
}
if (!props.multiple && Array.isArray(props.modelValue)) {
  emit('update:modelValue', '')
}

onMounted(() => {
  initialInputHeight.value = inputRef.value?.clientHeight

  if (props.filterable) {
    calcFilterInputWidth()
  }
})

const context = {
  ...toRefs(props),
  addOption,
  removeOption,
  onOptionClick
}

provide(selectContextKey, context)
</script>

<style lang="scss">
$ns: '.g-select';

#{$ns} {
  #{$ns}__input-wrapper {
    position: relative;
    #{$ns}__input {
      padding: 7px 30px 7px 13px;
      width: 100%;
      min-height: 38px;
      border-radius: 12px;
      border: 2px solid transparent;
      opacity: 1;
      color: $textColor;
      background-color: rgb(244, 247, 248);
      transition: all 0.25s ease, height 0s;
      user-select: none;
      cursor: pointer;
      box-sizing: border-box;
      outline: none;
      // background-color: red;
      &.multiple {
        color: transparent;
        background-color: transparent;
        pointer-events: none;
      }
    }
    #{$ns}__icon-select {
      position: absolute;
      z-index: 20;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      right: 15px;
      transition: all 0.25s ease;
    }
  }

  &.active {
    #{$ns}__input-wrapper {
      #{$ns}__input {
        background-color: #fff;
        box-shadow: 0 5px 25px -4px rgba(0, 0, 0, 0.05);
        transform: translateY(-4px);
      }
      #{$ns}__icon-select {
        margin-top: -2px;
        transform: translateY(-50%) rotate(-180deg);
      }
    }
  }

  #{$ns}__tags {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: auto;
    min-height: 38px;
    background-color: rgb(244, 247, 248);
    // background-color: blue;
    border-radius: 12px;
    padding: 5px 26px 5px 5px;
    box-sizing: border-box;
    #{$ns}__tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 2px 3px;
      padding: 0 10px 0 6px;
      font-size: 0.84rem;
      border: 2px solid rgb(244, 247, 248);
      color: $textColor;
      border-radius: 10px;
      background-color: #fff;
      #{$ns}__icon-close {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgb(230, 233, 234);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        transition: all 0.25s ease;
      }
    }
  }

  #{$ns}__filter-input {
    outline: none;
    border: none;
    min-height: 26px;
    padding: 0 4px;
    background-color: transparent;
  }
}

.g-select:not(.disabled) {
  #{$ns}__input {
    &:hover,
    &:focus {
      background-color: #fff;
      box-shadow: 0 5px 25px -4px rgba(0, 0, 0, 0.05);
      transform: translateY(-4px);
    }
    &:hover {
      ~ #{$ns}__icon-select {
        margin-top: -2px;
      }
    }
  }
  #{$ns}__tags {
    &:hover {
      background-color: rgb(255, 255, 255);
      box-shadow: 0 5px 25px -4px rgba(0, 0, 0, 0.05);
      transition: all 0.25s ease;
      transform: translateY(-4px);
      ~ #{$ns}__icon-select {
        margin-top: -2px;
      }
    }
  }
}

#{$ns} {
  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    #{$ns}__input {
      cursor: not-allowed;
    }
  }
}

#{$ns}__options {
  position: absolute;
  z-index: 2000;
  padding: 5px;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  color: $colorPrimary;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.05);
  list-style: none;
  box-sizing: border-box;
  background-color: $light;
  // background-color: aqua;
  &-content {
    max-height: 200px;
    overflow: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      display: block;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(240, 243, 244);
      border-radius: 5px;
    }
  }
}

.select-options-enter-from,
.select-options-leave-to {
  opacity: 0;
  transform: translate(0, -10px);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  &::after {
    opacity: 0;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  }
}
.select-options-enter-active,
.select-options-leave-active {
  transition: all 0.25s ease;
}
</style>
