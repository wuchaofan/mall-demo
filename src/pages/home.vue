<template>
  <div>
    <Search-header></Search-header>
    <swiper-ab></swiper-ab>

    <div class="weui-flex">
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/fen.webp" alt="" width="36" height="36">
            <p>积分乐园</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/chong.webp" alt="" width="36" height="36">
            <p>充值中心</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/jinkou.webp" alt="" width="36" height="36">
            <p>天猫国际</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/ju.webp" alt="" width="36" height="36">
            <p>聚划算</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/mall.webp" alt="" width="36" height="36">
            <p>天猫超市</p>
          </a>
        </div>
    </div>

    <div class="weui-flex">
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/try.webp"  alt="" width="36" height="36">
            <p>免费试用</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/love.webp"  alt="" width="36" height="36">
            <p>尤物</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/fans.webp"  alt="" width="36" height="36">
            <p>粉丝趴</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/hongpei.webp"  alt="" width="36" height="36">
            <p>教你烘培</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/kinds.webp"  alt="" width="36" height="36">
            <p>分类</p>
          </a>
        </div>
    </div>
    <hot-tip></hot-tip>

    <div class="weui-flex">
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
    </div>
    <div class="weui-flex">
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
        <div class="weui-flex__item"><div class="placeholder">weui</div></div>
    </div>
  </div>
</template>

<script>
import SearchHeader from '../components/SearchHeader.vue'
import SwiperAb from '../components/SwiperAb.vue'
import HotTip from '../components/HotTip.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home'
    }
  },
  components: {
    SearchHeader,
    SwiperAb,
    HotTip
  }
}
</script>

<style scoped>
  .weui-flex__item{
    margin: 6px 0;
  }
</style>
