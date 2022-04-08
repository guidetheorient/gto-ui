<template>
  <div>
    <h2>基础用法</h2>
    <GSwitch v-model="value1"></GSwitch>
    <GSwitch v-model="value2"></GSwitch>
    <GSwitch v-model="value3" disabled></GSwitch>
    <GSwitch v-model="value4" disabled></GSwitch>

    <h2>loading</h2>
    <GSwitch v-model="value5" :loading="loading"></GSwitch>
    <GSwitch v-model="value6" :loading="loading"></GSwitch>

    <h2>active icon / inactive icon</h2>
    <GSwitch v-model="value7" :active-icon="AndroidFilled" :inactive-icon="AppleFilled"></GSwitch>

    <h2>active text / inactive text</h2>
    <GSwitch
      v-model="value7"
      activeText="Y"
      inactiveText="N"
      :active-icon="AndroidFilled"
      :inactive-icon="AppleFilled"
    ></GSwitch>

    <GSwitch v-model="value7" :activeText="AndroidFilled" :inactiveText="AppleFilled"></GSwitch>

    <GSwitch v-model="value7" activeColor="#ff4d6d" inactiveColor="#ffb3c1"></GSwitch>
  </div>
</template>

<script setup>
import { AndroidFilled, AppleFilled } from '@vicons/antd'

import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(true)

const value5 = ref(false)
const value6 = ref(true)
const loading = ref(true)

const value7 = ref(true)
</script>
