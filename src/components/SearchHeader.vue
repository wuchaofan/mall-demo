<template>
  <div class="header-flex">
    <div class="menu">
      <a class="menu-icon" @click="showMenu=!showMenu"></a>
    </div>
    <div class="search-box">
      <div class="bar">
        <p>搜索商品/店铺</p>
      </div>
      <div class="search-icon">
      </div>
    </div>
    <div class="menu">
      <a href="javascript:void(0);" class="menu-user">登录</a>
    </div>
    <goods-types :show="showMenu" @on-emnu-show="onEmuuShow"></goods-types>
  </div>
</template>

<script>

import GoodsTypes from './goodstypes/GoodsTypes.vue'

export default {
  name: 'SearchHeader',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    showMenucall () {
      console.log(this.showMenu)
      this.showMenu = !this.showMenu
    },
    onEmuuShow (val) {
      this.showMenu = val
    }
  },
  watch: {
  },
  components: {
    GoodsTypes
  }
}
</script>

<style scoped>
.header-flex{
  height: 45px;
  display: flex;
  background-color: black;
  box-sizing: border-box;
  background: -webkit-linear-gradient(top,rgba(0,0,0,.8),rgba(0,0,0,0));
  background: linear-gradient(top,rgba(0,0,0,.8),rgba(0,0,0,0));
  -webkit-transition: background-color .2s linear;
  -moz-transition: background-color .2s linear;
  -o-transition: background-color .2s linear;
  transition: background-color .2s linear;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  align-items: center;
}
.menu{
  box-sizing: border-box;
  flex-basis: 15%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
}
.menu-icon{
  box-sizing: border-box;
  display: block;
  height: 33px;
  width: 28px;
  background: url(../assets/img/p1.png) no-repeat 2px 0px;
  background-size: 282px 31px;
}
.menu-user{
  box-sizing: border-box;
  align-self: center;
  color: white;
  font-size: 15px;
}
.search-box{
  box-sizing: border-box;
  flex-basis: 70%;
  background-color: white;
  border-radius: 0.05rem;
  display: flex;
  font-size: 14px;
  height: 33px;
}
.bar{
  display: flex;
  flex-grow: 1;
  align-content: center;
}
.bar p{
  font-size: 14px;
  color: gray;
  text-align: left;
  margin-left: 10px;
  align-self: center;
}
.search-icon{
  flex-basis: 30px;
  background-color: black;
  background: url(../assets/img/p1.png) no-repeat -82px 0px;
  background-size: 294px 36px;
}
</style>
