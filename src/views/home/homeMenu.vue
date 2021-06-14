<template>
  <van-row justify="space-between" gutter="10" class="home-menu">
    <van-col span="10">
      <img src="@/assets/img/home/img1.png" alt="" />
    </van-col>
    <van-col span="14">
      <van-row>
        <van-col span="24">
          <img src="@/assets/img/home/img2.png" alt="" />
        </van-col>
        <van-row>
          <van-col span="12">
            <img src="@/assets/img/home/img3.png" alt="" />
          </van-col>
          <van-col span="12">
            <img src="@/assets/img/home/img4.png" alt="" />
          </van-col>
        </van-row>
      </van-row>
    </van-col>
  </van-row>

  <van-row justify="space-between" gutter="8" class="home-menu home-menu-bg">
    <van-col span="10">
      <div class="bg bgc-1">
        <span>邀请有礼</span>
      </div>
    </van-col>
    <van-col span="14">
      <van-row gutter="8">
        <van-col span="12">
          <div class="bg bgc-2">4.8折券</div>
        </van-col>
        <van-col span="12">
          <div class="bg bgc-3">送礼品卡</div>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: "homeMenu",
};
</script>

<style scoped>
.bg {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  opacity: 0.9;
}
.bgc-1 {
  background: linear-gradient(-125deg, #ff7d7d, #fb2c95);
}
.bgc-2 {
  background: linear-gradient(-113deg, #c543d8, #925cc3);
}
.bgc-3 {
  background: linear-gradient(-141deg, #ecca1b, #f39526);
}
.home-menu {
  background: white;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
}
.home-menu img {
  width: 100%;
}
.home-menu-bg {
  background: white ;
}
</style>