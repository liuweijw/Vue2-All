import http from '../utils/axios'

export const list = (pageNo) => http.post('/xxxx/list', { pageNo: pageNo })
export const version = type => http.get('/version/init?type=' + type)