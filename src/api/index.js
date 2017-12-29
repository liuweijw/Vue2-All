import http from '../utils/axios'

export const list = (pageNo) => http.post('/xxxx/list', { pageNo: pageNo })

export const version = type => http.get('/version/init?type=' + type)

export const login = credentials => http.post('/auth/login', credentials)

export const user = () => http.get('/user/me')

export const token = () => http.post('/auth/token')

export const logout = () => http.post('/auth/logout')
