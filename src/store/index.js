import Vue from 'vue'
import Vuex from 'vuex'
// vuex typescript 持久化 https://github.com/championswimmer/vuex-persist
// import VuexPersistence from 'vuex-persist'
// vuex javascript 持久化状态值，可以通过浏览器查看 安装方法：https://github.com/vuejs/vue-devtools
// https://github.com/robinvdvleuten/vuex-persistedstate
import VuexPersistence from 'vuex-persistedstate'
// 采用cookie 的方式 https://github.com/js-cookie/js-cookie
// import Cookies from 'js-cookie'

// 如果文件里面没有 export default 需要用 import * as xxx from ''
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// 子模块里面的vuex
import counter from './modules/counter'

// 实例化Vuex
Vue.use(Vuex)

const vuexLocal = VuexPersistence({
  storage: window.localStorage
})

// 采用cookie的方式存储
// const vuexCookie = VuexPersistence({
//   storage: {
//     getItem: key => Cookies.get(key),
//     setItem: (key, value) => {
//       Cookies.set(key, value, {
//         expires: 24000000000,
//         secure: false
//       })
//     },
//     removeItem: key => Cookies.remove(key)
//   }
// })

const store = new Vuex.Store({
  state: {
    token: null,
    refreshToken: null,
    auth: false,
    title: '',
    count: 1
  },
  getters: getters,
  actions: actions,
  mutations: mutations,
  plugins: [vuexLocal],
  modules: {
    c: counter
  },
  // 生产环境不能用严苛模式，否则性能受影响
  strict: process.env.NODE_ENV !== 'production'
})

// if (module.hot) {
//   module.hot.accept([
//     './getters',
//     './actions',
//     './mutations'
//   ], () => {
//     rootStore.hotUpdate({
//       getters: require('./getters'),
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     })
//   })
// }

// store 入口
export default store
