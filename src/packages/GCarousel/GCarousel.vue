<template>
  <div :class="[ns]" ref="rootRef">
    <div :class="[ns + '__container']" :style="{ height }">
      <slot></slot>
      <div :class="[ns + '__arrow-group']">
        <button :class="[ns + '__arrow']" @click="prev">
          <GIcon>
            <LeftOutlined />
          </GIcon>
        </button>
        <button :class="[ns + '__arrow']" @click="next">
          <GIcon>
            <RightOutlined />
          </GIcon>
        </button>
      </div>
    </div>
    <ul :class="[ns + '__dots']">
      <li
        v-for="(item, i) in items"
        :class="[ns + '__dot', { 'is-active': activeIndex === i }]"
        :key="i"
        @mouseenter="throttledOnDotMouseEnter(i)"
        @click.stop="onDotClick(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GCarousel'
}
</script>

<script setup>
import { ref, onMounted, watch, provide, nextTick, onBeforeUnmount } from 'vue'
import { LeftOutlined, RightOutlined } from '@vicons/antd'

import { throttle } from 'lodash-es'

import GIcon from '../GIcon/index.vue'

import { carouselContextKey } from '../../tokens'

const ns = 'g-carousel'

const props = defineProps({
  height: {
    type: String,
    default: ''
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (v) => ['hover', 'click'].includes(v)
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  loop: {
    type: Boolean,
    default: true
  }
})

let activeIndex = $ref(-1)

const rootRef = ref(null)

let timer = null
const items = ref([])

function addItem(item) {
  items.value.push(item)
}
function removeItem(uid) {
  const i = items.value.findIndex((item) => item.uid === uid)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}

function translateItems(oldIndex) {
  items.value.forEach((item, index) => item.translateItem(index, activeIndex, oldIndex))
}

function startTimer() {
  if (!props.autoplay || timer) return
  timer = setInterval(() => {
    playSlides()
  }, props.interval)
}

function pauseTimer() {
  clearInterval(timer)
  timer = null
}

function playSlides() {
  activeIndex = activeIndex + 1 >= items.value.length ? (props.loop ? 0 : activeIndex) : activeIndex + 1
  console.log(activeIndex)
}

function prev() {
  setActiveItem(activeIndex - 1)
}
function next() {
  setActiveItem(activeIndex + 1)
}
function setActiveItem(index) {
  const length = items.value.length
  const oldIndex = activeIndex

  if (index < 0) {
    activeIndex = props.loop ? length - 1 : 0
  } else if (index > length - 1) {
    activeIndex = props.loop ? 0 : length - 1
  } else {
    activeIndex = index
  }
}

// dots
function onDotClick(i) {
  if (props.trigger === 'click' && i !== activeIndex) {
    activeIndex = i
  }
}
function onDotMouseEnter(i) {
  if (props.trigger === 'hover' && i !== activeIndex) {
    activeIndex = i
  }
}
const throttledOnDotMouseEnter = throttle(onDotMouseEnter, 300)

watch($$(activeIndex), (val, oldVal) => {
  translateItems(oldVal)
})

const context = {
  items,
  activeIndex,
  rootRef,
  addItem,
  removeItem
}

provide(carouselContextKey, context)

onMounted(() => {
  nextTick(() => {
    // translateItems()

    if (props.initialIndex >= 0 && props.initialIndex < items.value.length) {
      activeIndex = props.initialIndex
    }

    startTimer()
  })
})

onBeforeUnmount(() => {
  pauseTimer()
})
</script>

<style lang="scss">
.g-carousel {
  position: relative;
  overflow-x: hidden;

  &__container {
    position: relative;
    height: 300px;
  }

  &__arrow-group {
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: flex;
    flex-wrap: nowrap;
  }
  &__arrow {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #eee;
    background: rgba($color: #fff, $alpha: 0.2);
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    border: none;
    &:hover {
      background: rgba($color: #fff, $alpha: 0.3);
    }
    &:first-child {
      margin-right: 12px;
    }
  }

  &__dots {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  &__dot {
    width: 8px;
    height: 8px;
    background-color: rgba($color: #fff, $alpha: 0.3);
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow 0.3s, background-color 0.3s;
    outline: none;
    margin: 0 4px;
    &.is-active {
      background-color: $light;
    }
  }
}
</style>
