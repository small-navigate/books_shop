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
    },
    changeInfo(state, obj) {
      state.USERINFO.info[obj.index].num = obj.value
    },
    delInfo(state, index) {
      state.USERINFO.info.splice(index, 1)
    },
    addInfo(state, obj) {
      state.USERINFO.info.push({
        bookid: obj.bookid,
        id: obj.id,
        num: 1,
        status: false,
        userid: obj.userid
      })
      console.log(state.USERINFO.info)
    }
  },
  actions: {
    putCart(context, obj) {
      context.commit('changeInfo', {
        value: obj.value,
        index: obj.index
      })
      obj.ajax.put('/putnum', {
        value: obj.value,
        id: obj.id
      })
    },
    delCart(context, obj) {
      context.commit('delInfo', obj.index)
      obj.ajax.delete(`/delitem/${obj.id}`)
    },
    async addCart(context, obj) {
      const {
        data: res
      } = await obj.ajax.post('/additem', obj)
      context.commit('addInfo', {
        bookid: obj.bookid,
        userid: obj.userid,
        id: res.message.data
      })
    }
  },
  modules: {}
})
