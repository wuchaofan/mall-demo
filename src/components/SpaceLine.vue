<template>
  <div class="weui-flex qiang">
    <span class="line" :style="{'background-color': bgcolor}"></span>
    <img :src="img" alt="">
    <span class="qiang-title" :style="{'color': bgcolor}">{{title}}</span>
    <span class="line" :style="{'background-color': bgcolor}"></span>
  </div>
</template>

<script>
export default {
  name: 'SpaceLine',
  data () {
    return {
    }
  },
  props: ['img', 'title', 'bgcolor'],
  methods: {
  }
}
</script>
<style scoped>
.qiang{
  justify-content: center;
  align-items: center;
  margin: 4px 0 4px 0;
}
.qiang img{
  width: 20px;
  height: 20px;

}
.qiang-title{
  font-size: 16px;
  color: orangered;
  margin-left: 5px;
  font-weight: bold;
}
.line{
  width: 60px;
  height: 1px;
  background-color: orangered;
  margin: auto 10px;
}
</style>
