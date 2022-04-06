const { kebabCase } = require('lodash')

const Router = {
  基础: ['GButton', 'GLayout', 'GIcon'],
  通知: ['GMessage'],
  表单: [
    'GForm',
    'GInput',
    'GInputNumber',
    'GRadio',
    'GCheckbox',
    'GSelect',
    'GCascader',
    'GSwitch',
    'GDatePicker',
    'GTimePicker',
    'GUpload'
  ],
  展示: ['GCarousel', 'GEmpty'],
  导航: ['GTabs', 'GDropdown'],
  反馈: ['GTooltip', 'GDialog', 'GLoading']
}

function getRouterConfig(langPrefix = '/') {
  return [
    {
      text: langPrefix === '/' ? 'Getting started' : '介绍',
      link: `${langPrefix}`
    },
    ...Object.entries(Router).map(([text, children]) => ({
      text,
      children: children.map((hookName) => ({
        link: `${langPrefix}${kebabCase(hookName)}/`,
        text: hookName
      }))
    }))
  ]
}

module.exports = {
  getRouterConfig
}
