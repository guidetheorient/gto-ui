const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')

const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

const { kebabCase } = require('lodash')
const pkg = require('./package.json')

const entryDir = path.resolve(__dirname, './src/packages')
const outputDir = path.resolve(__dirname, './lib')

// 与 vite.config.js 种保持一致
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue({ reactivityTransform: true }), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use  "./src/scss/_variables.scss" as *;
        `
      }
    }
  }
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, 'index.js'),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
}

const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${kebabCase(name)}",
  "version": "${pkg.version}",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css"
}`

  fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileStr, 'utf-8')
}

const buildLib = async () => {
  await buildAll()
  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.js')
  })

  for (const name of components) {
    await buildSingle(name)
    createPackageJson(name)
  }
}

buildLib()
