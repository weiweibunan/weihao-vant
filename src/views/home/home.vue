<template>
  <home-swipe></home-swipe>
  <home-menu></home-menu>
  <home-tabs :tablist="tablist"></home-tabs>
</template>

<script>

import homeMenu from "./homeMenu";
import homeSwipe from "./homeSwipe";
import HomeTabs from "./homeTabs";

export default {
  name: "Home",
  data() {
    return {
      tablist:[
          "冰爽记",
          "最新潮品",
          "瑞幸自营",
          "咖啡水具"
      ]
    }
  },
  components:{
    HomeTabs,
    homeMenu,
    homeSwipe,
  },
  methods:{

  },

}
</script>

<style scoped>

</style>