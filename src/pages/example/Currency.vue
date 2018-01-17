<template>
  <div>
      $ default: {{ money | currency }} <br />
      $ default: {{ money | currency('',3) }} <br />
      $ default: {{ money | currency('元') }} <br />
      $ default: {{ money | currency(2) }} <br />
      $ default: {{ money | currency }} <br />
      $ default: {{ money * quantity | currency }} <br />
  </div>
</template>

<script>
export default {
  data () {
    return {
      money: 1234311,
      quantity: 2
    }
  }
}
</script>
