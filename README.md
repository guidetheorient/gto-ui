# Gto UI

- 实现一个自己的组件库，巩固基础，学习组件库设计与实现
- 最终想实现一个渐变色主题的组件库，采集英雄联盟英雄或系列皮肤主题色，定制出专属主题组件库

## 文档

https://guidetheorient.github.io/gto-ui/

## 组件

### 基础

- [x] GButton 按钮
- [x] GRow / GCol 布局
- [x] GIcon 图标

### 通知

- [x] GMessage 消息提示

### 表单

- [x] GForm / GFormItem 表单
- [x] GInput 输入框
- [x] GInputNumber 数字输入框
- [x] GRadio 单选框
- [x] GCheckbox 多选框
- [x] GSelect 选择器
- [ ] GCascader 级联选择器
- [x] GSwitch 开关
- [x] GDatePicker 日期选择器
- [ ] GTimePicker 时间选择器
- [ ] GUpload 上传

### 展示

- [x] GCarousel 轮播
- [x] GEmpty 空状态

### 导航

- [ ] GTabs 标签页
- [ ] GDropdown 下拉菜单

### 反馈

- [x] GTooltip 文字提示
- [x] GDialog 对话框
- [x] GLoading 加载

## 开发构建

```sh
# 安装依赖
npm install
# 启动开发服务器
npm run dev
# 构建
npm run lib:build
```

## 编写文档

```sh
# 构建 lib
npm run lib:build
# 启动文档服务器
npm run docs:dev
# 构建文档
npm run docs:build
# 发布文档到 github pages
npm run docs:deploy
```
