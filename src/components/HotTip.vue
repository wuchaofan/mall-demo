<template>
  <div class="weui-flex">
    <div class="header-img">
      <img src="../assets/img/hottip.webp" height="100%" width="54px">
    </div>
    <img src="../assets/img/vedio.webp" height="22px" width="22px">
    <swiper-tip class="swiper-tip"></swiper-tip>
  </div>
</template>

<script>

import SwiperTip from '../components/SwiperTip.vue'

export default {
  name: 'HotTip',
  data () {
    return {
    }
  },
  components: {
    SwiperTip
  }
}
</script>

<style scoped>
.weui-flex{
  align-items: center;
}
.header-img{
  width: 60px;
  height: 40px;
  box-sizing: border-box;
  padding: 4px;
  border-right: 1px solid #e7e7e7;
  margin-right: 4px;
}
.header-img img{
  width: 100%;
  height: 100%;
}
.swiper-tip{
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 5px;
}
</style>
