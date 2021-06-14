<template>
  <van-card class="order" v-if="getisgouwu"
      num="2"
      price="13.88"
      desc="多糖 多奶 去冰"
      title="杨枝甘露芒果多"
      :thumb="img"
  >
    <template #tags>
      <van-tag plain type="danger" class="icon">优惠</van-tag>
      <van-tag plain type="danger" class="icon">3.8折</van-tag>
    </template>
    <template #footer>
      <van-button size="mini" type="warning" class="btn">编辑</van-button>
      <van-button size="mini" type="danger" class="btn">删除</van-button>
    </template>
  </van-card>
  <van-empty description="当前订单为空" v-else/>
</template>

<script>
export default {
  name: "order",
  data(){
    return {
      img: require("@/assets/img/home/img8.png")
    }
  },
  computed:{
    getisgouwu:function(){ return this.$store.state.isgouwu}
  }
}
</script>

<style scoped>
.order{
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}
.icon{
  margin-right: 10px;
  margin-top: 10px;
}
.btn{
  margin-left: 10px;
  padding: 5px 10px;
}
</style>