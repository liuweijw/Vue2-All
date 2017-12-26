// Helper function that will allow us to extract the access_token and id_token
export const getParameterByName = name => {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

// Helper function that will allow us to extract the url's queryString
export const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r) {
    return unescape(r[2])
  }
  return null
}
