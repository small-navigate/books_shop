<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const token = window.sessionStorage.getItem('token')
      console.log(token)
      if (token) {
        const { data: res } = await this.$http({
          headers: {
            Authorization: `Bearer ${token}`
          },
          methods: 'get',
          url: `/finduser`
        })
        this.$store.state.NAVSHOW = true
        this.$store.state.USERINFO = res.message[0][0]
      }
    }
  }
}
</script>
<style>
</style>
