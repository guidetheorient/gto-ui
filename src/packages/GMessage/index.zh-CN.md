---
map:
  path: /g-message
---

# Message 消息提示

一些实时的全局信息

## 基础用法

Message 既可以在 Options API 中使用 this.$message 调用，也可以 import 进组件中当作函数调用

<demo src="./demo/basic.vue"></demo>

## 不同状态

<demo src="./demo/different-types.vue"></demo>

## 不同位置

<demo src="./demo/different-positions.vue"></demo>

## 点击事件

一直显示，直到点击后关闭，再弹出一个

<demo src="./demo/manual.vue"></demo>
