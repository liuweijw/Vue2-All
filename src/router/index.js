import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import routes from './routes'
import { routerMode } from '../config/env'

// 实例化 VueRouter
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: routerMode, // 模式
  strict: process.env.NODE_ENV !== 'production',
  // 这个功能只在 HTML5 history 模式下可用
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token && store.state.auth) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
