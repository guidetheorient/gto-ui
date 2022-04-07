<template>
  <div>
    <GButton @click="$message({ type: 'primary', message: '奉天承运，皇帝诏曰' })">primary</GButton>
    <GButton @click="$message({ type: 'success', message: '奉天承运，皇帝诏曰' })">success</GButton>
    <GButton @click="$message({ type: 'warning', message: '奉天承运，皇帝诏曰' })">warning</GButton>
    <GButton @click="$message({ type: 'danger', message: '奉天承运，皇帝诏曰' })">danger</GButton>
  </div>
</template>
