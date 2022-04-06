<template>
  <div>
    <GRow>
      <GButton size="large">large</GButton>
      <GButton>default</GButton>
      <GButton size="small">GButton</GButton>
    </GRow>

    <GRow>
      <GButton size="large" round>large</GButton>
      <GButton round>default</GButton>
      <GButton size="small" round>GButton</GButton>
    </GRow>

    <GRow>
      <GButton size="large" circle>
        <GIcon>
          <AndroidOutlined />
        </GIcon>
      </GButton>
      <GButton circle>
        <GIcon>
          <YuqueOutlined />
        </GIcon>
      </GButton>
      <GButton size="small" circle>
        <GIcon>
          <BulbOutlined />
        </GIcon>
      </GButton>
    </GRow>
  </div>
</template>

<script setup>
import { YuqueOutlined, AndroidOutlined, BulbOutlined } from '@vicons/antd'
</script>

<style lang="scss">
.g-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
