import App from '../App'

// 此文件做模块路由配置
const index = r => require.ensure([], () => r(require('../pages/index/Index')), 'index')
const login = r => require.ensure([], () => r(require('../pages/login/Login')), 'login')
const currency = r => require.ensure([], () => r(require('../pages/example/Currency')), 'currency')
const http = r => require.ensure([], () => r(require('../pages/example/Http')), 'http')

const routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    { // 地址为空时跳转index页面
      path: '',
      redirect: '/index'
    },
    { // 首页
      path: '/index',
      component: index
    },
    { // 登录
      path: '/login',
      component: login
    },
    { // 数据金额filter
      path: '/currency',
      component: currency
    },
    { // 数据获取
      path: '/http',
      component: http
    }
  ]
}]

export default routes
