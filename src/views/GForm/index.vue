<template>
  <div class="views-g-form">
    <GForm :model="form" :rules="rules" ref="formRef">
      <GFormItem label="用户名" prop="name">
        <GInput v-model="form.name"></GInput>
      </GFormItem>
      <GFormItem label="邮箱" prop="mail">
        <GInput v-model="form.mail"></GInput>
      </GFormItem>
    </GForm>

    <GButton @click="validateByReceiveCallback">校验：使用 callback</GButton>
    <GButton @click="validateByReturnPromise">校验：使用 Promise</GButton>
    <GButton @click="formRef.resetFields()">重置</GButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formRef = ref(null)

const form = ref({
  name: '',
  mail: ''
})

const rules = {
  name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  mail: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
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

<style lang="scss" scoped></style>
