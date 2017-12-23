<template>
  <div>
      http test: 需要修改 config/index.js 里面的代理接口，需要服务端配合使用<br/>

      result: {{ result }}
  </div>
</template>

<script>
import { version } from '../../api'
export default {
  data () {
    return {
      result: ''
    }
  },
  mounted () {
    version('1').then(res => {
      this.result = res.data
    })
  }
}
</script>
