<template>
  <div>
      {{ title }} <br>
      <ul>
        <li><router-link to="/index">back to index page</router-link></li>
        <li @click="submitlogout()"><router-link to="">logout</router-link></li>
      </ul>
      <br/>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input type="text" class="form-control"
          placeholder="Enter your username"
          v-model="credentials.username" >
      </div>
      <div class="form-group">
        <input type="password" class="form-control"
          placeholder="Enter your password" v-model="credentials.password" >
      </div>
      <button class="btn btn-primary" @click="submit()">Access</button>
  </div>
</template>

<script>
import { login, logout } from '../../api'
import { getQueryString } from '../../utils/base'
export default {
  data () {
    return {
      title: '这个是登录页面',
      credentials: {
        username: 'admin',
        password: 'test1234'
      },
      error: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      login(credentials).then(res => {
        this.$store.dispatch('logined', {
          token: res.token,
          refreshToken: res.refreshToken
        })
        let redirectUrl = getQueryString('redirect')
        if (redirectUrl) {
          this.$router.push({ path: redirectUrl })
        } else {
          this.$router.go(-1)
        }
      })
    },
    submitlogout () {
      logout().then(res => {
        this.$store.dispatch('logout')
        this.$router.push({ path: 'index' })
      })
    }
  }
}
</script>


