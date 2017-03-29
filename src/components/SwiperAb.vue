<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-ad">
    <!-- slides -->
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//gw.alicdn.com/imgextra/i3/17/TB2D2S6jmBjpuFjy1XdXXaooVXa_!!17-0-yamato.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//img.alicdn.com/tps/i4/TB1sMj8QXXXXXa0aXXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//img.alicdn.com/bao/uploaded/TB1eICVPXXXXXXrXpXXSutbFXXX.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//gw.alicdn.com/imgextra/i3/17/TB2D2S6jmBjpuFjy1XdXXaooVXa_!!17-0-yamato.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//gw.alicdn.com/imgextra/i3/17/TB2D2S6jmBjpuFjy1XdXXaooVXa_!!17-0-yamato.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//gw.alicdn.com/imgextra/i3/17/TB2D2S6jmBjpuFjy1XdXXaooVXa_!!17-0-yamato.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="//gw.alicdn.com/imgextra/i3/17/TB2D2S6jmBjpuFjy1XdXXaooVXa_!!17-0-yamato.jpg_760x760Q30s0.jpg_.webp" width="100%">
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'SwiperAb',
    data () {
      return {
        swiperOption: {
          // notNextTick: true,
          autoplay: 3000,
          loop: true,
          // setWrapperSize: true,
          pagination: '.swiper-pagination',
        //  paginationClickable: true,
        //  nextButton: '.swiper-button-next',
        //  mousewheelControl: true,
          // observeParents: true,
          // debugger: true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
    //  this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style>
  .sliderBanner{
    height: 100%;
    width: 100%;
  }
  .swiper-pagination .swiper-pagination-bullet-active{
    background-color: white;
  }
  .swiper-ad{
    height: 210px;
  }

</style>
