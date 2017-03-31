<template>
  <div class="muen-list">
    <p class="title"><span>女装</span></p>
    <div class="list">
      <a href="#" class="list-a">
        <img src="../../assets/img/nz1.png">
        <span>羽绒服</span>
      </a>
      <a href="#" class="list-a">
        <img src="../../assets/img/nz2.png">
        <span>棉衣</span>
      </a>
      <a href="#" class="list-a">
        <img src="../../assets/img/nz3.png">
        <span>毛呢外套</span>
      </a>
    </div>
    <div class="list">
      <a href="#" class="list-a">
        <img src="../../assets/img/nz4.png">
        <span>衬衫</span>
      </a>
      <a href="#" class="list-a">
        <img src="../../assets/img/nz5.png">
        <span>针织衫</span>
      </a>
      <a href="#" class="list-a">
        <img src="../../assets/img/nz6.png">
        <span>牛仔裤</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeKinda',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.muen-list,
.list-a{
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
.list{
  display: flex;
  margin-bottom: 4px;
}
.title{
  height: 50px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 6px;
  font-size: 16px;
}
img{
  width: 100%;
  height: 80px;
}
</style>
