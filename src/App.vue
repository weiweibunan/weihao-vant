<template>
  <van-nav-bar :title="title" />
  <router-view></router-view>
  <app-nav-bottom class="app-nav-bottom"></app-nav-bottom>
</template>
<script>
import appNavBottom from "./components/appNavBottom";

export default {
  data() {
    return {
      msg: "weihao"
    };
  },
  components: {
    appNavBottom,
  },
  computed:{
    title:function(){
      return this.$store.state.title
    }
  }
};
</script>
<style>
body {
  background-color: #f5f5f5;
  padding: 10px 10px 0 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style scoped>
.app-nav-bottom {
  padding: 5px 0;
}
</style>