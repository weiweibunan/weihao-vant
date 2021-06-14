<template>
  <div class="user">
    <!-- 用户信息 -->
    <div class="userInfo">
      <!-- 头像 -->
      <div class="userImg">
        <img src="@/assets/img/personal/132.jpg" alt="" />
      </div>
      <!-- 昵称 -->
      <div class="userName iconfont icon-xiangxiajiantou">weihao</div>
    </div>
  </div>
  <div class="list">
    <!-- 左边 -->
    <div class="listTitle">
      <span class="iconfont icon-leimupinleifenleileibie2 color-1"></span>
      分类
    </div>
    <!-- 右边 -->
    <div class="iconfont icon-xiangyou-copy"></div>
  </div>

  <div class="list">
    <!-- 左边 -->
    <div class="listTitle">
      <span class="iconfont icon-zhanghu color-2"></span>
      账户
    </div>
    <!-- 右边 -->
    <div class="iconfont icon-xiangyou-copy"></div>
  </div>

  <div class="list">
    <!-- 左边 -->
    <div class="listTitle">
      <span class="iconfont icon-shengji color-3"></span>
      升级App
    </div>
    <!-- 右边 -->
    <div class="iconfont icon-xiangyou-copy"></div>
  </div>

  <div class="list">
    <!-- 左边 -->
    <div class="listTitle">
      <span class="iconfont icon-yijianfankui color-4"></span>
      意见反馈
    </div>
    <!-- 右边 -->
    <div class="iconfont icon-xiangyou-copy"></div>
  </div>

  <div class="list">
    <!-- 左边 -->
    <div class="listTitle">
      <span class="iconfont icon-shezhi color-1"></span>
      设置
    </div>
    <!-- 右边 -->
    <div class="iconfont icon-xiangyou-copy"></div>
  </div>
  <div class="list">
    <!-- 左边 -->
    <div class="listTitle">
      <span class="iconfont icon-fenxiang color-2"></span>
      分享给好友
    </div>
    <!-- 右边 -->
    <div class="iconfont icon-xiangyou-copy"></div>
  </div>
</template>

<script>
export default {
  name: "personal",
};
</script>

<style scoped>
.userInfo {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 0;
}
.userInfo .userImg {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 auto;
}
.userInfo .userImg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.userInfo .userName {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
.list {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ededed;
  font-size: 16px;

  margin: 10px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  border-radius: 10px;
}
.icon-xiangyou-copy {
  color: #999;
}
/* 颜色类目 */
.color-1 {
  color: #fc678f;
}
.color-2 {
  color: #6cabfd;
}
.color-3 {
  color: #fd7361;
}
.color-4 {
  color: #ffbe00;
}
</style>