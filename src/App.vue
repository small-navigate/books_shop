<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const token = window.sessionStorage.getItem('token')
      if (token) {
        console.log('请求之前', new Date())
        const { data: res } = await this.$http({
          headers: {
            Authorization: `Bearer ${token}`
          },
          methods: 'get',
          url: `/finduser`
        })
        console.log('请求之后', new Date())
        this.$store.state.NAVSHOW = true
        this.$store.state.USERINFO = res.message[0]
        console.log(new Date())
      }
    }
  }
}
</script>
<style>
</style>
