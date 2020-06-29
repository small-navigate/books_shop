import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NAVSHOW: false,
    USERINFO: null
  },
  mutations: {
    changeNavShow(state, tokenStr) {
      if (tokenStr) {
        state.NAVSHOW = true
      }
    },
    userInfo(state, user) {
      state.USERINFO = user
    }
  },
  actions: {},
  modules: {}
})
