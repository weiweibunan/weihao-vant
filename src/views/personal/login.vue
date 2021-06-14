<template>
  <div class="login">
    <div class="head"></div>

    <div class="info">
      <div class="longin-boder">
        <div class="image"><img src="@/assets/img/personal/user.png" /></div>
        <input
          class="input"
          type="text"
          placeholder="输入用户名"
          v-model="name"
        />
      </div>
      <!--End用户名输入框-->
      <div class="longin-boder">
        <div class="image"><img src="@/assets/img/personal/pwd.png" /></div>
        <input
          class="input"
          type="password"
          placeholder="输入密码"
          v-model="password"
        />
      </div>
      <!--End密码输入框-->
      <div class="button" @click="yz">登录</div>
    </div>
  </div>
</template>

<script>
import { request } from "./request";

export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    yz: function () {
      request({
        url: "login.php",
        method: "get",
        params: {
          yhyz: "weihao",
        },
      }).then((res) => {
        console.log(res);
        if (this.name == res.data.name && this.password == res.data.password) {
          console.log("登录成功");
          this.$router.push('/personal')
          
          // console.log(this.$store.state.islogin)
          this.$store.commit('increment')
        }
      }).catch(err => {
        console.log("登录失败",err)
      });
    },
  },
};
</script>

<style scoped>
.head {
  height: 150px;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
}
.info {
  border-radius: 10px;
  padding: 30px 10px;
  text-align: center;
  background-color: white;
  margin: 0 auto;
  margin-top: -80px;
  width: 90%;
}

.longin-boder {
  width: 80%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10%;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: #bcbfd1;
}
.image {
  width: 10%;
  margin-top: 5px;
  float: left;
  text-align: right;
}
.input {
  width: 80%;
  float: left;
  margin-left: 5%;
  height: 37px;
  line-height: 37px;
  border: 0px;
  color: #333333;
  font-size: 16px;
  background-color: #bcbfd1;
}

.button {
  height: 40px;
  width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  font-size: 16px;
  line-height: 38px;
  border-radius: 5px;
  color: #ffffff;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
}

.button:active {
  background-color: #37a3b9;
}
</style>