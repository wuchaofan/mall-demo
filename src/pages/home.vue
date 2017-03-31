<template>
  <div>
    <Search-header @on-scroll-status="scrollStatus"
    :bgcolor="bgcolor"></Search-header>
    <swiper-ab></swiper-ab>

    <div class="weui-flex menu-flex">
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/fen.png" alt="" width="36" height="36">
            <p>积分乐园</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/chong.png" alt="" width="36" height="36">
            <p>充值中心</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/jinkou.png" alt="" width="36" height="36">
            <p>天猫国际</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/ju.png" alt="" width="36" height="36">
            <p>聚划算</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/mall.png" alt="" width="36" height="36">
            <p>天猫超市</p>
          </a>
        </div>
    </div>

    <div class="weui-flex menu-flex">
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/try.png"  alt="" width="36" height="36">
            <p>免费试用</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/love.png"  alt="" width="36" height="36">
            <p>尤物</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/fans.png"  alt="" width="36" height="36">
            <p>粉丝趴</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/hongpei.png"  alt="" width="36" height="36">
            <p>教你烘培</p>
          </a>
        </div>
        <div class="weui-flex__item">
          <a href="#" class="weui-flex__item">
            <img src="../assets/img/kinds.png"  alt="" width="36" height="36">
            <p>分类</p>
          </a>
        </div>
    </div>
    <hot-tip class="menu-flex"></hot-tip>
    <div class="slides">
      <swiper-slides></swiper-slides>
    </div>

    <space-line :img="q1.img" :title="q1.title" bgcolor="orangered"></space-line>
    <qiang-list></qiang-list>
    <qiang-list></qiang-list>

    <space-line :img="q2.img" :title="q2.title" bgcolor="blue"></space-line>
    <div class="weui-flex">
        <div class="weui-flex__item kuwan">
          <img  src="../assets/img/iphone7.png" alt="">
        </div>
        <div class="weui-flex__item kuwan">
          <img src="../assets/img/oppo.png" alt="">
        </div>
        <div class="weui-flex__item kuwan">
          <img src="../assets/img/route.png" alt="">
        </div>
    </div>

    <space-line :img="q3.img" :title="q3.title" bgcolor="orange"></space-line>
    <div class="weui-flex">
        <div class="weui-flex__item kuwan">
          <a href="#">
            <img  src="../assets/img/artka.png" alt="">
          </a>
        </div>
        <div class="weui-flex__item kuwan">
          <img src="../assets/img/jianmin.png" alt="">
        </div>
    </div>

    <space-line :img="q4.img" :title="q4.title" bgcolor="green"></space-line>
    <div class="weui-flex">
        <div class="weui-flex__item kuwan">
          <a href="#">
            <img  src="../assets/img/pp1.png" alt="">
          </a>
        </div>
        <div class="weui-flex__item kuwan">
          <a href="#">
            <img  src="../assets/img/pp2.png" alt="">
          </a>
        </div>
        <div class="weui-flex__item kuwan">
          <a href="#">
            <img  src="../assets/img/pp3.png" alt="">
          </a>
        </div>
    </div>
    <div class="weui-flex">
      <a href="#">
        <img class="img-50" src="../assets/img/50.png" alt="">
      </a>
    </div>

    <space-line :img="q5.img" :title="q5.title" bgcolor="green"></space-line>
    <div class="weui-flex life">
        <div class="weui-flex__item life-left">
          <a href="#">
            <img  src="../assets/img/m1.png" alt="">
          </a>
        </div>
        <div class="weui-flex__item weui-flex life-right">
          <a href="#">
            <img  src="../assets/img/b1.png" alt="">
          </a>
          <a href="#">
            <img  src="../assets/img/s1.png" alt="">
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from '../components/SearchHeader.vue'
import SwiperAb from '../components/SwiperAb.vue'
import HotTip from '../components/HotTip.vue'
import SwiperSlides from '../components/SwiperSlides.vue'
import QiangList from '../components/QiangList.vue'
import SpaceLine from '../components/SpaceLine.vue'

export default {
  name: 'Home',
  data () {
    return {
      q1: { img: this.imagePath('fire.png'), title: '必抢' },
      q2: { img: this.imagePath('box.png'), title: '潮流酷玩' },
      q3: { img: this.imagePath('star.png'), title: '品牌特卖' },
      q4: { img: this.imagePath('zixun.png'), title: '品牌资讯' },
      q5: { img: this.imagePath('lan.png'), title: '便捷生活' },
      bgcolor: false
    }
  },
  methods: {
    imagePath (name) {
      return require('../assets/img/' + name)
    },
    scrollStatus (status) {
      const body = document.getElementsByTagName('body')[0]
      if (status) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'auto'
      }
    },
    onScroll (e) {
      if (document.body.scrollTop > 40) {
        this.bgcolor = true
      } else {
        this.bgcolor = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  components: {
    SearchHeader,
    SwiperAb,
    HotTip,
    SwiperSlides,
    QiangList,
    SpaceLine
  }
}
</script>

<style scoped>
  .menu-flex{
    background-color: white;
  }
  .weui-flex__item{
    margin: 6px 0;
  }
  .slides{
    background-color: #e7e7e7;
    padding: 3px;
    box-sizing: border-box;
  }
  .kuwan img,
  .life-left img{
    width: 100%;
    height: 100%;
  }
  .kuwan{
    margin: 0;
  }
  .img-50{
    height: 100px;
    width: 100%;
  }
  .life-left{
    flex-basis: 40%;
    height: 100%;
    margin: 0;
    border-right: 1px solid #e7e7e7;
    box-sizing: border-box;
  }
  .life-right{
    flex-direction: column;
    flex-basis: 60%;
    height: 100%;
    margin: 0;
  }
  .life-right a{
    height: 50%;
    box-sizing: border-box;
  }
  .life-right a:first-child{
    border-bottom: 1px solid #e7e7e7;
  }
  .life-right img{
      width: 100%;
      height: 100%;
    }
  .life{
    height: 200px;
  }

</style>
