<template>
  <div>
      http test: 需要修改 config/index.js 里面的代理接口，需要服务端配合使用<br/>

      <h2 @click="protectedMethod()"> 点击获取 protected (需要权限 AUTH) </h2><br>
      <h2 @click="versionMethod()"> 点击获取 protected (需要权限 ADMIN) </h2><br>

      result: {{ result }}
  </div>
</template>

<script>
import { version, user } from '../../api'
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
    }
  }
}
</script>
