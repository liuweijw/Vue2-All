// 采用cookie 的方式 https://github.com/js-cookie/js-cookie
// import * as cookie from 'js-cookie'

/**
 * 存储localStorage
 */
export const setCache = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getCache = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeCache = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
