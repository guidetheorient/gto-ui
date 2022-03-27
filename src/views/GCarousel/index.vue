<template>
  <div class="">
    <h2>基础用法</h2>
    <GCarousel height="150px" :autoplay="true" :interval="3000" :loop="false">
      <GCarouselItem v-for="item in 4" :key="item" label="xxx">
        <h3 class="small">{{ item }}</h3>
      </GCarouselItem>
    </GCarousel>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.g-carousel__item h3 {
  color: #475669;
}
.g-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.g-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.g-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
