<template>
  <form :class="[ns]">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'GForm'
}
</script>

<script setup>
import { isBoolean, isFunction } from 'lodash'
import { provide, reactive, toRefs } from 'vue'
import { formContextKey } from '../../tokens/index'
import { filterFields } from './utils'

const ns = 'g-form'

const props = defineProps({
  model: {
    type: Object,
    default: () => ({})
  },
  rules: {
    type: Object,
    default: () => ({})
  }
})

const fields = []

const addField = (field) => {
  fields.push(field)
}

const removeField = (field) => {
  if (field.prop) fields.splice(fields.indexOf(field), 1)
}

function validate(callback) {
  return validateField(undefined, callback)
}

function validateField(properties = [], callback) {
  return new Promise((resolve, reject) => {
    let valid = true
    let count = 0
    let invalidFields = {}
    let fiteredFields = filterFields(fields, properties)

    fiteredFields.forEach((field) => {
      field.validate('', (errors) => {
        if (!isBoolean(errors)) {
          Object.assign(invalidFields, errors)
          valid = false
        }

        if (++count === fiteredFields.length) {
          if (isFunction(callback)) {
            callback(valid, invalidFields)
          }

          valid ? resolve(valid) : reject(invalidFields)
        }
      })
    })
  })
}

function resetFields(properties = []) {
  filterFields(fields, properties).forEach((field) => field.resetField())
}

function clearValidate() {}

const context = reactive({
  ...toRefs(props),
  addField,
  removeField
})

provide(formContextKey, context)

defineExpose({
  validate,
  validateField,
  resetFields,
  clearValidate
})
</script>

<style lang="scss">
.g-form{
  
}
</style>
