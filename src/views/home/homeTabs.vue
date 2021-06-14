<template>
  <van-tabs v-model:active="active">
    <van-tab :title="item" v-for="item in tablist" key="item">
      <home-list></home-list>
    </van-tab>
  </van-tabs>
</template>

<script>
import homeList from "./homeList";
export default {
  name: "homeTabs",
  props:{
    tablist:{
      type:Array,
    }
  },
  data(){
    return{
      active : 0,
      list:[]
    }
  },
  components:{
    homeList
  }
}
</script>

<style scoped>

</style>