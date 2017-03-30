<template>
  <transition name="leftshow">
  <div class="goods" :style="{height: dyheight}" v-show="show">
    <div class="left">
      <div class="left-title">
        <p>全部分类</p>
      </div>
      <div class="left-menu">
        <types-list></types-list>
        <div class="muen-goods">
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>
          <type-kinda></type-kinda>

        </div>
      </div>
    </div>
    <div class="right" @click="m_show=!m_show">
      <span>点击此处返回</span>
      <img src="../../assets/img/left.png" alt="">
    </div>
  </div>
  </transition>
</template>

<script>

import TypesList from './TypesList.vue'
import TypeKinda from './TypeKinda.vue'

export default {
  name: 'GoodsTypes',
  data () {
    return {
      m_show: this.show,
      dyheight: window.innerHeight + 'px'
    }
  },
  watch: {
    m_show (newval) {
      this.$emit('on-emnu-show', newval)
    },
    show () {
      this.m_show = this.show
    }
  },
  props: ['show'],
  components: {
    TypesList,
    TypeKinda
  }
}
</script>

<style scoped>
.left-title{
  background-color: #e7e7e7;
  align-self: flex-start;
  flex-flow: 0;
  width: 100%;
  flex-basis: 5%;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 16px;
}
.left-menu{
  display: flex;
  flex-basis: 95%;
  background-color: white;
}
.goods{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
}
.left{
  flex-basis: 90%;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow: hidden;
}
.right{
  flex-basis: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  flex-direction: column;
}
.right span{
  width: 15px;
  color: white;
}
.right img{
  width: 18px;
  height: 18px;
  margin-top: 4px;
}
.leftshow-enter{
  transition: all .3s ease;
  transform: translate(-100%);
}
.leftshow-enter-to{
  transition: all .3s ease;
  transform: translate(0);
}
.leftshow-leave-active{
  transition: all .3s ease;
  transform: translate(-100%);

}
.muen-goods{
  overflow: auto;
}

</style>
