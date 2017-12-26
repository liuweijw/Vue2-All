import { LOGIN, LOGOUT } from './mutations-types'

export default {
  [LOGOUT] (state) {
    state.token = null
    state.auth = false
  },
  [LOGIN] (state, token) {
    if (token) {
      state.token = token
      state.auth = true
    }
  }
}
