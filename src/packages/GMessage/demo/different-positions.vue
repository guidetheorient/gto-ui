<template>
  <div>
    <GButton @click="$message({ placement: 'top-left', message: '奉天承运，皇帝诏曰' })">top-left</GButton>
    <GButton @click="$message({ placement: 'top-center', message: '奉天承运，皇帝诏曰' })">top-center</GButton>
    <GButton @click="$message({ placement: 'top-right', message: '奉天承运，皇帝诏曰' })">top-right</GButton>
    <GButton @click="$message({ placement: 'bottom-left', message: '奉天承运，皇帝诏曰' })">bottom-left</GButton>
    <GButton @click="$message({ placement: 'bottom-center', message: '奉天承运，皇帝诏曰' })">bottom-center</GButton>
    <GButton @click="$message({ placement: 'bottom-right', message: '奉天承运，皇帝诏曰' })">bottom-right</GButton>
  </div>
</template>
