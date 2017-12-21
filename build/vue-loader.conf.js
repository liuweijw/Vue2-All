'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  // 在开发环境下是 true，在生产环境下是 false
  // 是否通过给文件名后加哈希查询值来避免生成的 source map 被缓存
  cacheBusting: config.dev.cacheBusting,
  // 有 video 或 source 元素，需要对其 src 属性进行转换，可以进行类似的加载器设置及转换属性添加
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
