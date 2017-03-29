<template>
  <a class="item">
    <p class="title">{{title}}</p>
    <img class="img" :src="imgurl" alt="">
    <div class="value">
      <span>￥39</span>
      <span>￥78</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'QiangItem',
  data () {
    return {
    }
  },
  props: ['imgurl', 'title'],
  computed: {
  }
}
</script>
<style scoped>
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-sizing: border-box;
    width: 25%;
  }
  .item + .item{
    margin-left: 1px;
  }
  .img{
    min-height: 90px;
    width: 100%;
  }
  .title{
    font-size: 15px;
    margin: 2px 0;
  }
  .value{
    display: flex;
    margin: 2px 0;
    font-size: 14px;
  }
  .value span{
    margin: 0 2px;
  }
  .value span:first-child{
    color: red;
  }
  .value span:last-child{
    text-decoration: line-through;
  }
</style>
