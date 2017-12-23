// 全局展现money数据金额过滤器
// {{ moneyAmount | currency }} 默认保留两位小数，并且添加$符合
const digitsRE = /(\d{3})(?=\d)/g

export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = (currency !== undefined && currency !== null) ? currency : '$'
  decimals = (decimals !== undefined && decimals !== null) ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
        _int.slice(i).replace(digitsRE, '$1,') +
        _float
}
