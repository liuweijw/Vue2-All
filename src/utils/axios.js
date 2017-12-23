import axios from 'axios'
import router from '../router'
import store from '../store'
import { LOGOUT } from '../store/mutations-types'
import { baseURL } from '../config/env'

// axios defaults 配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 结合服务端自己封装结果进行部分业务逻辑封装
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401: // 401 清除token信息并跳转到登录页面
          store.commit(LOGOUT)
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
        default: break
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default axios
