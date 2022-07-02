import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'// 导入持久化模块
const vuexLocal = new VuexPersistence({
  // 指定用的储存方式是本地储存
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    searchHistoryList: []
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setSearchHistoryList (state, payload) {
      let arr = state.searchHistoryList
      arr.unshift(payload)
      arr = [...new Set(arr)]
      state.searchHistoryList = arr
    },
    // 根据索引删除一个
    delHistory (state, index) {
      state.searchHistoryList.splice(index, 1)
    },
    // 删除所有
    delAllHistory (state) {
      state.searchHistoryList = []
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
