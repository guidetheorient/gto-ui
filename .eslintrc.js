module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    $ref: 'readonly'
  },
  extends: ['alloy', 'plugin:vue/essential'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  plugins: ['vue'],
  rules: {}
}
