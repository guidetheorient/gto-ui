<template>
  <GForm :model="form1">
    <GFormItem label="用户名" prop="name">
      <GInput v-model="form1.name"></GInput>
    </GFormItem>
    <GFormItem label="邮箱" prop="mail">
      <GInput v-model="form1.mail"></GInput>
    </GFormItem>
    <GFormItem label="评级" prop="rate">
      <GRadioGroup v-model="form1.rate">
        <GRadio label="好"></GRadio>
        <GRadio label="很好"></GRadio>
        <GRadio label="非常好"></GRadio>
      </GRadioGroup>
    </GFormItem>
    <GFormItem label="喜欢啥" prop="like">
      <GCheckboxGroup v-model="form1.like">
        <GCheckbox value="Vue" />
        <GCheckbox value="React" />
        <GCheckbox value="TypeScript" />
      </GCheckboxGroup>
    </GFormItem>

    <GFormItem>
      <GButton>提交</GButton>
    </GFormItem>
  </GForm>
</template>

<script setup>
import { ref } from 'vue'

const form1 = ref({
  name: '',
  mail: '',
  rate: '好',
  like: ['Vue']
})
</script>
