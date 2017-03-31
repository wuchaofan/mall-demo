<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-ad">
    <!-- slides -->
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/ada.png" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/adb.png" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/adc.png" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/add.png" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/ada.png" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/adb.png" width="100%">
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="#">
        <img class="sliderBanner" src="../assets/img/adc.png" width="100%">
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
