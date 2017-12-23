/**
 * 配置编译环境和线上环境之间的切换
 * baseURL: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */
let baseURL = ''
// http://zhenyong.site/vue-router/essentials/history-mode.html
let routerMode = '' // history hash
let imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = '/api'
  routerMode = 'history'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://www.xxxx.com/api'
  routerMode = 'hash'
}

export {
  baseURL,
  routerMode,
  imgBaseUrl
}