// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import http from './utils/axios'
import { currency } from './filters/currency'

// Vue全局设置 取消 Vue 所有的日志与警告
Vue.config.silent = false
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 在组件中可以直接使用this.http访问，底层用http axios
Vue.prototype.http = http

// 设置全局过滤器
Vue.filter('currency', currency)

// 解决移动端300毫秒延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  http
}).$mount('#app')
