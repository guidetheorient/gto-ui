<template>
  <div>
    <GSwitch v-model="value7" :active-icon="AndroidFilled" :inactive-icon="AppleFilled"></GSwitch>

    <GSwitch
      v-model="value7"
      activeText="Y"
      inactiveText="N"
      :active-icon="AndroidFilled"
      :inactive-icon="AppleFilled"
    ></GSwitch>

    <GSwitch v-model="value7" :activeText="AndroidFilled" :inactiveText="AppleFilled"></GSwitch>
  </div>
</template>

<script setup>
import { AndroidFilled, AppleFilled } from '@vicons/antd'

import { ref } from 'vue'

const value7 = ref(true)
</script>
