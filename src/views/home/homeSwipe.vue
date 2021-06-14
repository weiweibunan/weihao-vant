<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
    <template #indicator="{ active }">
      <div class="custom-indicator">{{ active + 1 }}/3</div>
    </template>
  </van-swipe>
</template>

<script>
export default {
  name: "homeSwipe",
  data() {
    return {
      images: [
        require("@/assets/img/home/banner1.jpg"),
        require("@/assets/img/home/banner2.jpg"),
        require("@/assets/img/home/banner3.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.van-swipe-item img {
  width: 100%;
  height: 200px;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>