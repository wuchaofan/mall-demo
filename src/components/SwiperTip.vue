<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item in tips">
      <a href="#" class="tips-a">
        <div class="title">
          {{item.title}}
        </div>
        <span>{{item.content}}</span>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>

export default {
  name: 'SwiperTip',
  data () {
    return {
      swiperOption: {
        // notNextTick: true,
        autoplay: 2200,
        loop: true,
        direction: 'vertical',
        pagination: '.swiper-pagination',
        onTransitionStart (swiper) {
          console.log(swiper)
        }
      },
      tips: [
        { title: '露出袜子追随时尚脚步，多款买一送一', content: '低至9.9元+热款买5送5' },
        { title: '露出袜子追随时尚脚步，多款买一送一', content: '低至9.9元+热款买5送5' },
        { title: '露出袜子追随时尚脚步，多款买一送一', content: '低至9.9元+热款买5送5' },
        { title: '露出袜子追随时尚脚步，多款买一送一', content: '低至9.9元+热款买5送5' },
        { title: '露出袜子追随时尚脚步，多款买一送一', content: '低至9.9元+热款买5送5' }
      ]
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
.tips-a{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.tips-a span{
  text-align: left;
  color: red;
}
</style>
