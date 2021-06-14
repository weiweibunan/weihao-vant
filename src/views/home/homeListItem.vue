<template>
  <van-row gutter="8" class="item">
    <van-col span="8">
      <img src="@/assets/img/home/img8.png" class="img" alt="">
    </van-col>
    <van-col span="16">
      <p class="title">杨枝甘露芒果多[[第{{index}}数据]]</p>
      <van-row>
        <van-col span="20" class="price">
          ￥20元
        </van-col>
        <van-col span="4">
          <span class="icon iconfont icon-add-fill-hover add"></span>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: "homeListItem",
  props:{
    index:Number
  }
}
</script>

<style scoped>
.item{
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
.img {
  width: 100%;
  /*width: 150px;*/
  /*height: 150px;*/
}
.title{
  margin-bottom: 43px;
}
.price{
  font-size: 16px;
}
.add{
  font-size: 24px;
  vertical-align: middle;
}
</style>