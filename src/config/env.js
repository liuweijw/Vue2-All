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
  // 匹配api接口 https://github.com/liuweijw/fw-framework
  // api 接口文档 http://localhost:8081/api/swagger-ui.html
  baseURL = 'http://localhost:8081/fw/api'
  routerMode = 'hash'
}

export {
  baseURL,
  routerMode,
  imgBaseUrl
}
