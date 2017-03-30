<template>
  <div class="muen-list">
    <div v-for="(item,key) in types"
     :key="key"
     @click="selecttype(item,key)"
     :class="['typeitem',{'typeitem-selected': isselected == key}]"><p>{{item}}</p></div>
  </div>
</template>

<script>
export default {
  name: 'TypesList',
  data () {
    return {
      isselected: -1,
      types: [
        '为您推荐',
        '国际大牌',
        '天猫国际',
        '女装',
        '女鞋',
        '男装',
        '男鞋',
        '内衣',
        '母婴',
        '手机',
        '数码',
        '家电',
        '美妆',
        '箱包',
        '运动',
        '户外',
        '家装',
        '家纺',
        '居家',
        '饰品',
        '食品',
        '生鲜',
        '汽车摩托',
        '医药',
        '图书',
        '通信',
        '洗护',
        '乐器'
      ]
    }
  },
  methods: {
    selecttype (item, key) {
      this.isselected = key
    }
  }
}
</script>

<style scoped>
.muen-list{
  flex-basis: 25%;
  background-color: #EEE;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-shrink: 0;
}
.typeitem{
  flex-basis: 60px;
  background-color: inherit;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border-bottom: 1px solid #E1E1E1;
  box-sizing: border-box;
  cursor: pointer;
}
.typeitem-selected{
  background-color: white;
}
</style>
