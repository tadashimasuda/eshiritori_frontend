<template>
  <p>redirect page</p>
</template>
<script>
export default {
  data(){
      return {
        twitterAuthUrl:''
      }
  },
  asyncData ({ app, error }) {
    return app.$axios.$get('/oauth/twitter/redirect').then(res => {
        return { twitterAuthUrl: res.redirect_url }
      })
      .catch(e => error({ message: e.message, statusCode: e.statusCode }))
  },

  mounted () {
    window.location.href = this.twitterAuthUrl
  }
}
</script>
