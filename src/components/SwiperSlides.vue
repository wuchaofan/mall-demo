<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-slides">
    <swiper-slide>
      <a href="#" class="tips-a">
        <img src="../assets/img/today.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#" class="tips-a">
        <img src="../assets/img/today1.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#" class="tips-a">
        <img src="../assets/img/today2.png" alt="">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#" class="tips-a">
        <img src="../assets/img/today3.png" alt="">
      </a>
    </swiper-slide>
    <div class="more">查看更多</div>
  </swiper>
</template>

<script>

export default {
  name: 'SwiperSlides',
  data () {
    return {
      swiperOption: {
        // notNextTick: true,
        autoplay: 3200,
        slidesPerView: 2.1,
        spaceBetween: 5,
        onTransitionStart (swiper) {
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style scoped>
.swiper-slides{

}
.tips-a{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  background-color: white;
  height: 120px;
}
.tips-a img{
  text-align: left;
  color: red;
  height: 100%;
  width: 100%;
}
.more{
  align-self: center;
}
</style>
