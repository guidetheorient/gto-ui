const { getRouterConfig } = require('./router')
const { kebabCase } = require('lodash')
const { resolve } = require('path')

const base = process.env.NODE_ENV === 'production' ? '/gto-ui' : ''

module.exports = {
  title: 'GTO UI',
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
          { text: '主页', link: '/' },
          { text: '组件', link: `/${kebabCase('GButton')}/` },
          { text: 'GitHub', link: `https://github.com/guidetheorient/gto-ui` }
        ],
        sidebar: getRouterConfig('/')
      }
      // '/en/': {
      //   lang: 'en-US',
      //   title: 'ahooks-vue',
      //   description: 'vue hooks',
      //   label: 'English',
      //   selectText: 'Languages',
      //   nav: [
      //     { text: 'Homepage', link: '/en/' },
      //     { text: 'Components', link: `/en/${kebabCase('GButton')}/` }
      //   ],
      //   sidebar: getRouterConfig('/en/')
      // }
    }
  }
}
