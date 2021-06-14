<template>
  <van-row gutter="8" class="item">
    <van-col span="9">
      <img src="@/assets/img/home/img8.png" class="img" alt="">
    </van-col>
    <van-col span="15">
      <p class="title">杨枝甘露芒果多[[第{{index}}数据]]</p>
      <van-row>
        <van-col span="18" class="price">
          ￥20元
        </van-col>
        <van-col span="6" @click="addgouwu">
          <span class="icon iconfont icon-add-fill-hover add"></span>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
  <van-row gutter="8" class="item">
    <van-col span="9">
      <img src="@/assets/img/home/img8.png" class="img" alt="">
    </van-col>
    <van-col span="15">
      <p class="title">杨枝甘露芒果多[[第{{index}}数据]]</p>
      <van-row>
        <van-col span="18" class="price">
          ￥20元
        </van-col>
        <van-col span="6" @click="addgouwu">
          <span class="icon iconfont icon-add-fill-hover add"></span>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: "menuList",
  props:{
    index:Number
  },
  methods:{
    addgouwu: function() {
      this.$store.commit('setisgouwu')
    }
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
}
.title{
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price{
  font-size: 16px;
}
.add{
  font-size: 24px;
  vertical-align: middle;
}
</style>