<template>
  <div>
    <GCarousel height="150px" :interval="3000" loop>
      <GCarouselItem v-for="item in 4" :key="item" label="xxx">
        <h3 class="small">{{ item }}</h3>
      </GCarouselItem>
    </GCarousel>
  </div>
</template>

<style lang="scss" scoped>
.g-carousel__item h3 {
  color: #f8edeb;
}
.g-carousel__item h3 {
  color: #f8edeb;
  font-size: 18px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.g-carousel__item:nth-child(2n) {
  background-color: #ffb5a7;
}

.g-carousel__item:nth-child(2n + 1) {
  background-color: #fcd5ce;
}
</style>
