import { LOGIN, LOGOUT } from './mutations-types'

export default {
  logined ({commit, state}, token) {
    commit(LOGIN, token)
  },
  logout ({commit}) {
    commit(LOGOUT)
  }
}
