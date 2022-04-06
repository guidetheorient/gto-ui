<template>
  <div>
    <GRow :gutter="10">
      <GCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </GCol>
      <GCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </GCol>
      <GCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </GCol>
      <GCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </GCol>
    </GRow>
  </div>
</template>

<style lang="scss" scoped>
.g-row {
  margin-bottom: 20px;
}
.g-row:last-child {
  margin-bottom: 0;
}
.bg-purple-dark {
  background: #ffb5a7;
}
.bg-purple {
  background: #fcd5ce;
}
.bg-purple-light {
  background: #f8edeb;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
