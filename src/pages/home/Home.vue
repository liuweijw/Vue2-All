<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Example Links</h2>
    <ul>
      <li><router-link to="/login">to login page</router-link></li>
      <li><router-link to="/currency">to Example Currency page</router-link></li>
      <li><router-link to="/http?t=1">to Example http page</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome project of index!'
    }
  }
}
</script>
