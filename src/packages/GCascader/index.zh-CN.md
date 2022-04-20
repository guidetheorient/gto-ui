---
map:
  path: /g-cascader
---

# Cascader 级联选择器

我单选，多选，父节点选，子节点也能选，各种乱七八糟的选

## 基础用法

v-model 为选项 path 数组，如`[v-1, v-1-1, v-1-1-1]`

<demo src="./demo/basic.vue"></demo>

## 多选

v-model 嵌套数组，如`[[v-1, v-1-1, v-1-1-1], [v-1, v-1-1, v-1-1-2]]`

<demo src="./demo/multi-select.vue"></demo>
