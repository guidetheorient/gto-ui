<template>
  <div>
    <GTooltip content="default prompts info">
      <GButton>default</GButton>
    </GTooltip>
    <GTooltip content="top prompts info" placement="top">
      <GButton>top</GButton>
    </GTooltip>
    <GTooltip content="right prompts info" placement="right">
      <GButton>right</GButton>
    </GTooltip>
    <GTooltip content="bottom prompts info" placement="bottom">
      <GButton>bottom</GButton>
    </GTooltip>
    <GTooltip content="left prompts info" placement="left">
      <GButton>left</GButton>
    </GTooltip>
  </div>
</template>

<style lang="scss">
.g-button {
  margin: 0 15px;
}
</style>
