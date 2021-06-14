<template>
  <van-sidebar v-model="active">
    <van-sidebar-item title="人气Top" to="/list"/>
    <van-sidebar-item title="生椰子系列" />
    <van-sidebar-item title="欢乐下午茶" />
  </van-sidebar>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "menuLeft",
  data(){
    return {
      active: ref(0)
    }
  }
}
</script>

<style scoped>

</style>