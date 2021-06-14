<template>
  <van-row>
    <van-col span="6">
      <menu-left></menu-left>
    </van-col>
    <van-col  span="18">
      <router-view></router-view>
    </van-col>
  </van-row>
</template>

<script>
import menuLeft from "./menuLeft";

export default {
  name: "v-menu",
  components:{
    menuLeft
  }
}
</script>

<style scoped>
deep(.van-sidebar-item){
  padding-left: 5px;
  padding-right: 0;
}
</style>