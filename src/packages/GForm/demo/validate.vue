<template>
  <GForm :model="form" :rules="rules" ref="formRef">
    <GFormItem label="用户名" prop="name">
      <GInput v-model="form.name"></GInput>
    </GFormItem>
    <GFormItem label="邮箱" prop="mail">
      <GInput v-model="form.mail"></GInput>
    </GFormItem>
    <GFormItem label="评级" prop="rate">
      <GRadioGroup v-model="form.rate">
        <GRadio label="好"></GRadio>
        <GRadio label="很好"></GRadio>
        <GRadio label="非常好"></GRadio>
      </GRadioGroup>
    </GFormItem>
    <GFormItem label="喜欢啥" prop="like">
      <GCheckboxGroup v-model="form.like">
        <GCheckbox value="Vue" />
        <GCheckbox value="React" />
        <GCheckbox value="TypeScript" />
      </GCheckboxGroup>
    </GFormItem>

    <GFormItem>
      <GButton @click.prevent="validateByReceiveCallback">callback 校验</GButton>
      <GButton @click.prevent.stop="validateByReturnPromise">Promise 校验</GButton>
      <GButton @click.prevent="formRef.resetFields()">重置</GButton>
    </GFormItem>
  </GForm>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  mail: '',
  rate: '好',
  like: ['Vue']
})

const formRef = ref(null)

const rules = {
  name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  mail: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ],
  like: [
    {
      required: true,
      validator(rule, val, callback) {
        if (!val.length) callback(new Error('咋还不选啊'))

        // callback()
      }
    }
  ]
}

function validateByReceiveCallback() {
  formRef.value.validate((valid, errors) => {
    console.log(valid, errors)
  })
}

async function validateByReturnPromise() {
  try {
    let valid = await formRef.value.validate()
    console.log('validateByReturnPromise', valid)
  } catch (e) {
    console.log('validateByReturnPromise', e)
  }
}
</script>
