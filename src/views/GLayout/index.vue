<template>
  <div>
    <h2>基础布局</h2>
    <g-row>
      <g-col :span="24"><div class="grid-content bg-purple-dark"></div></g-col>
    </g-row>
    <g-row>
      <g-col :span="12"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="12"><div class="grid-content bg-purple-light"></div></g-col>
    </g-row>
    <g-row>
      <g-col :span="8"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="8"><div class="grid-content bg-purple-light"></div></g-col>
      <g-col :span="8"><div class="grid-content bg-purple"></div></g-col>
    </g-row>
    <g-row>
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="6"><div class="grid-content bg-purple-light"></div></g-col>
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="6"><div class="grid-content bg-purple-light"></div></g-col>
    </g-row>
    <g-row>
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple-light"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple-light"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple-light"></div></g-col>
    </g-row>

    <h2>分栏间隔</h2>
    <g-row :gutter="20">
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
    </g-row>

    <h2>混合布局</h2>
    <g-row :gutter="20">
      <g-col :span="16"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="8"><div class="grid-content bg-purple"></div></g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="8"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="8"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="16"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="4"><div class="grid-content bg-purple"></div></g-col>
    </g-row>

    <h2>列偏移</h2>
    <g-row :gutter="20">
      <g-col :span="6"><div class="grid-content bg-purple"></div></g-col>
      <g-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></g-col>
      <g-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="12" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></g-col>
    </g-row>

    <h2>响应式布局</h2>
    <g-row :gutter="10">
      <g-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </g-col>
      <g-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </g-col>
      <g-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </g-col>
      <g-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </g-col>
    </g-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.g-row {
  margin-bottom: 20px;
}
.g-row:last-child {
  margin-bottom: 0;
}
.g-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
