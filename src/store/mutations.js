import { LOGIN, LOGOUT } from './mutations-types'

export default {
  [LOGOUT] (state) {
    state.token = null
    state.auth = false
  },
  [LOGIN] (state, payload) {
    if (payload && payload.token) {
      state.token = payload.token
      state.refreshToken = payload.refreshToken
      state.auth = true
    }
  }
}
