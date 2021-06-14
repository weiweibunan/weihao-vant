<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/" icon-prefix="icon" icon="shouye iconfont" @click="uptitle">首页</van-tabbar-item>
    <van-tabbar-item to="/menu" icon-prefix="icon" icon="kafei iconfont" @click="uptitle">菜单</van-tabbar-item>
    <van-tabbar-item to="/order" icon-prefix="icon" icon="shouxin iconfont" @click="uptitle">订单</van-tabbar-item>
    <van-tabbar-item to="/shoppingcart" icon-prefix="icon" icon="gouwuche iconfont" @click="uptitle">购物车</van-tabbar-item>
    <van-tabbar-item to="/login" icon-prefix="icon" icon="wode1 iconfont" v-if="!islogin" @click="uptitle">我的</van-tabbar-item>
    <van-tabbar-item to="/personal" icon-prefix="icon" icon="wode1 iconfont" v-else @click="uptitle">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "appNavBottom",
  data(){
    return{
      active:ref(0),
      islogin: this.$store.state.islogin
    }
  },
  methods:{
    uptitle: function (){
      this.$store.commit('settitle',this.active)
    }
  }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2568744_7wttchwgtvo.css";
::v-deep(.iconfont) {
  font-size: 28px;
}
</style>