// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import FastClick from 'fastclick'
import http from './utils/axios'
import * as filters from './filters/index'
import mixins from './mixins/index'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// Vue全局设置 取消 Vue 所有的日志与警告
Vue.config.silent = false
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 在组件中可以直接使用this.http访问，底层用http axios
Vue.prototype.http = http

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 解决移动端300毫秒延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  http
}).$mount('#app')

/* eslint-disable no-new */
// new Vue(Vue.util.extend({ el: '#root', router, store, http }, App))

// router.push('/')
