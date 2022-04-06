<template>
  <div>
    <GRow>
      <GButton>default</GButton>
      <GButton type="primary">primary</GButton>
      <GButton type="success">success</GButton>
      <GButton type="warning">warning</GButton>
      <GButton type="danger">danger</GButton>
      <GButton type="text">text</GButton>
    </GRow>

    <GRow>
      <GButton round>default</GButton>
      <GButton type="primary" round>primary</GButton>
      <GButton type="success" round>success</GButton>
      <GButton type="warning" round>warning</GButton>
      <GButton type="danger" round>danger</GButton>
    </GRow>

    <GRow>
      <GButton circle>
        <GIcon>
          <AndroidOutlined />
        </GIcon>
      </GButton>
      <GButton type="primary" circle>
        <GIcon>
          <YuqueOutlined />
        </GIcon>
      </GButton>
      <GButton type="success" circle>
        <GIcon>
          <BulbOutlined />
        </GIcon>
      </GButton>
      <GButton type="warning" circle>
        <GIcon>
          <CrownOutlined />
        </GIcon>
      </GButton>
      <GButton type="danger" circle>
        <GIcon>
          <SmileOutlined />
        </GIcon>
      </GButton>
    </GRow>
  </div>
</template>

<script setup>
import { YuqueOutlined, AndroidOutlined, BulbOutlined, CrownOutlined, SmileOutlined } from '@vicons/antd'
</script>

<style lang="scss">
.g-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
