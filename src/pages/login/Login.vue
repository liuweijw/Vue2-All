<template>
  <div>
      {{ title }} <br>
      <ul>
        <li><router-link to="/index">back to index page</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '这个是登录页面'
    }
  }
}
</script>


