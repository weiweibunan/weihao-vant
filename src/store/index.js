import { createStore } from 'vuex'

export default createStore({
  state: {
    islogin: false,
    title: "首页",
    isgouwu: false
  },
  mutations: {
    increment (state) {
      state.islogin = !state.islogin
    },
    settitle (state,index) {
      let data = ["首页","菜单","订单","购物车","个人中心"]
      state.title = data[index]
    },
    setisgouwu(state){
      state.isgouwu = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
