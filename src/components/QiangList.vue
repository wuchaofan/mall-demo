<template>
  <div class="weui-flex">
      <qiang-item v-for="(item,index) in datalist"
      :imgurl="item.img"
      :title="item.title"
      :key="index"
      ></qiang-item>
  </div>
</template>

<script>
import QiangItem from '../components/QiangItem.vue'

export default {
  name: 'QiangList',
  data () {
    return {
      datalist: [
        { title: '今日必抢', img: this.imagePath('qiang1.webp'), newval: 39, oldval: 78 },
        { title: '趋势榜', img: this.imagePath('qtop.webp'), newval: 39, oldval: 78 },
        { title: '进口必抢', img: this.imagePath('qjin.webp'), newval: 39, oldval: 78 },
        { title: '巨超值', img: this.imagePath('qchip.webp'), newval: 39, oldval: 78 }
      ]
    }
  },
  methods: {
    imagePath: function (name) {
      return require('../assets/img/' + name)
    }
  },
  components: {
    QiangItem
  }
}
</script>
<style scoped>
  .weui-flex{
    box-sizing: border-box;
    padding-bottom: 5px;
    background-color: white;
  }
</style>
