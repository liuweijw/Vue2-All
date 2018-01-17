import App from '../App.vue'

// 此文件做模块路由配置
// const home = r => require.ensure([], () => r(require('../pages/home/Home.vue')), 'home')
// const login = r => require.ensure([], () => r(require('../pages/login/Login.vue')), 'login')
// const currency = r => require.ensure([], () => r(require('../pages/example/Currency.vue')), 'currency')
// const http = r => require.ensure([], () => r(require('../pages/example/Http.vue')), 'http')
import home from '../pages/home/Home.vue'
import login from '../pages/login/Login.vue'
import currency from '../pages/example/Currency.vue'
import http from '../pages/example/Http.vue'

const routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    { // 地址为空时跳转index页面
      path: '',
      redirect: '/home'
    },
    { // 首页
      path: '/home',
      component: home
    },
    { // 登录
      path: '/login',
      component: login
    },
    { // 数据金额filter
      path: '/currency',
      component: currency,
      meta: {
        requireAuth: true
      }
    },
    { // 数据获取
      path: '/http',
      component: http,
      meta: {
        requireAuth: true
      }
    }
  ]
}]

export default routes
