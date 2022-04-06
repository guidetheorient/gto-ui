const { getRouterConfig } = require('./router')
const { kebabCase } = require('lodash')
const { resolve } = require('path')

const base = process.env.NODE_ENV === 'production' ? '/gto-ui' : ''

module.exports = {
  title: 'gto-ui',
  description: 'gto ui',
  alias: {
    '@': resolve('./src/')
  },
  base,
  themeConfig: {
    lang: 'zh-CN',
    lastUpdated: '最近更新',
    // repo: 'dewfall123/ahooks-vue',
    // repoLabel: 'Github',
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'ahooks-vue',
        description: 'vue hooks',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/' },
          { text: '文档', link: `/${kebabCase('GButton')}/` }
        ],
        sidebar: getRouterConfig('/')
      },
      '/en/': {
        lang: 'en-US',
        title: 'ahooks-vue',
        description: 'vue hooks',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/en/' },
          { text: 'Document', link: `/en/${kebabCase('GButton')}/` }
        ],
        sidebar: getRouterConfig('/en/')
      }
    }
  }
}
