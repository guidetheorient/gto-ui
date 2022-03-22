<template>
  <div :class="[ns]" ref="formItemRef">
    <label v-if="label" :class="[ns + '__label', { 'g-form-item__label-required': isRequired }]">{{ label }}</label>
    <div :class="[ns + '__content']">
      <slot></slot>
      <div v-if="validateState === 'error'" class="g-form-item__message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GFormItem'
}
</script>

<script setup>
import { reactive, ref, toRefs, provide, onMounted, computed, inject, onBeforeUnmount, nextTick } from 'vue'
import { castArray, cloneDeep } from 'lodash-es'
import AsyncValidator from 'async-validator'
import { formContextKey, formItemContextKey } from '../../tokens'

const ns = 'g-form-item'

const formContext = inject(formContextKey)

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String
  },
  rules: {
    type: [Array, Object]
  },
  required: {
    type: Boolean,
    default: undefined
  }
})

const validateState = ref('')
const validateMessage = ref('')

let initialValue

const isRequired = computed(() => {
  return rules.value.some((rule) => rule.required === true)
})

const formItemRef = ref(null)

const rules = computed(() => {
  let rules = props.rules ? castArray(props.rules) : []

  const formRules = formContext.rules
  if (formRules && props.prop) {
    const _rules = formRules[props.prop]

    if (_rules) {
      rules.push(...castArray(_rules))
    }
  }

  if (props.required !== undefined) {
    rules.push({ required: !!props.required })
  }

  return rules
})

const fieldValue = computed({
  get() {
    const model = formContext.model
    if (!model || !props.prop) return

    return model[props.prop]
  },
  set(v) {
    const model = formContext.model
    model[props.prop] = v
  }
})

function getFilteredRules(trigger) {
  const rulesVal = rules.value

  return rulesVal.filter((rule) => {
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger)
    } else {
      return rule.trigger === trigger
    }
  })
}

function validate(trigger, callback = () => {}) {
  const rules = getFilteredRules(trigger)

  if (!rules || !rules.length) return true

  validateState.value = 'validating'

  let descriptor = {}
  descriptor[props.prop] = rules

  const validator = new AsyncValidator(descriptor)

  let model = {
    [props.prop]: fieldValue.value
  }

  return validator
    .validate(model, { firstFields: true })
    .then(() => {
      callback(true)
    })
    .catch((e) => {
      validateState.value = 'error'
      validateMessage.value = e.errors[0].message
      callback(e.fields)
      return Promise.reject(e.fields)
    })
}

function resetField() {
  const model = formContext.model
  if (!model || !props.prop) return

  fieldValue.value = initialValue
  nextTick(() => clearValidate())
}

function clearValidate() {
  validateState.value = ''
  validateMessage.value = ''
}

const context = reactive({
  ...toRefs(props),
  $el: formItemRef,
  validateState,
  validate,
  resetField,
  clearValidate
})

provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    initialValue = cloneDeep(fieldValue.value)
    formContext.addField(context)
  }
})
onBeforeUnmount(() => {
  formContext.removeField(context)
})

defineExpose({
  validateMessage,
  validate,
  clearValidate,
  resetField
})
</script>

<style lang="scss">
.g-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-size: 14px;
  &__label {
    display: block;
    line-height: 22px;
    color: #606266;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    &-required:before {
      content: '*';
      margin-right: 4px;
      color: $colorDanger;
    }
  }
  &__content {
    position: relative;
  }
  &__message {
    position: absolute;
    top: 100%;
    padding-top: 2px;
    left: 0;
    color: $colorDanger;
    font-size: 12px;
    line-height: 1;
    color: $colorDanger;
  }
}
</style>
