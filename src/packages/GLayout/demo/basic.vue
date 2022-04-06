<template>
  <div>
    <GRow>
      <GCol :span="24"><div class="grid-content bg-purple-dark"></div></GCol>
    </GRow>
    <GRow>
      <GCol :span="12"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="12"><div class="grid-content bg-purple-light"></div></GCol>
    </GRow>
    <GRow>
      <GCol :span="8"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="8"><div class="grid-content bg-purple-light"></div></GCol>
      <GCol :span="8"><div class="grid-content bg-purple"></div></GCol>
    </GRow>
    <GRow>
      <GCol :span="6"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="6"><div class="grid-content bg-purple-light"></div></GCol>
      <GCol :span="6"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="6"><div class="grid-content bg-purple-light"></div></GCol>
    </GRow>
    <GRow>
      <GCol :span="4"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="4"><div class="grid-content bg-purple-light"></div></GCol>
      <GCol :span="4"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="4"><div class="grid-content bg-purple-light"></div></GCol>
      <GCol :span="4"><div class="grid-content bg-purple"></div></GCol>
      <GCol :span="4"><div class="grid-content bg-purple-light"></div></GCol>
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
