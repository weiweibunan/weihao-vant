<template>
  <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
    <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad">

      <home-list-item v-for="(item,index) in state.list" :key="item" :index="index"></home-list-item>

    </van-list>
  </van-pull-refresh>
</template>

<script>
import { reactive } from 'vue';
import homeListItem from "./homeListItem";

export default {
  name:'homeList',

  data(){
    return {
      state:reactive({
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
      })
    }
  },
  components:{
    homeListItem
  },
  methods:{
    onLoad:function (){
      setTimeout(() => {
        if (this.state.refreshing) {
          this.state.list = [];
          this.state.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.state.list.push(this.state.list.length + 1);
        }
        this.state.loading = false;

        if (this.state.list.length >= 40) {
          this.state.finished = true;
        }
      }, 1000);
    },

    onRefresh:function (){
      // 清空列表数据
      this.state.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.state.loading = true;
      this.onLoad();
    }
  },
};
</script>

<style scoped>

</style>