<template>
  <div>
      http test: 需要修改 config/index.js 里面的代理接口，需要服务端配合使用<br/>

      <h3 @click="protectedMethod()"> 点击获取 protected (需要权限 AUTH) </h3><br />
      <h3 @click="versionMethod()"> 点击获取 protected (需要权限 ADMIN) </h3><br />
      <h3 @click="refershToken()"> 点击获取 refershToken 刷新token </h3><br />
      <h3 @click="submitlogout()"> 点击退出登录 </h3><br />

      result: {{ result }}
  </div>
</template>

<script>
import { version, user, token, logout } from '../../api/api'
export default {
  data () {
    return {
      result: ''
    }
  },
  mounted () {

  },
  methods: {
    versionMethod () {
      version('1').then(res => {
        this.result = res.data
      })
    },
    protectedMethod () {
      user().then(res => {
        this.result = res.data
      })
    },
    refershToken () {
      token().then(res => {
        this.$store.dispatch('logined', {
          token: res.token,
          refreshToken: res.refreshToken
        })
      }).then(res => {
        this.$router.push({ path: '/' })
      })
    },
    submitlogout () {
      logout().then(res => {
        this.$store.dispatch('logout')
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>
