<template>
  <div>
    <p v-if="attempting">Twitterでログインしています。</p>

    <template v-else>
      <p>Twitterでのログインに失敗しました。</p>
      <p>{{ failedMessage }}</p>
    </template>
    <nuxt-link to="/oauth/twitter/redirect">redirect</nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      failedMessage: null
    }
  },

  computed: {
    attempting () {
      return !this.failedMessage
    }
  },

  methods: mapMutations(['setToken','setUser']),

   async mounted() {
     try {
        const res  = await this.$axios.$get('/oauth/twitter/callback', { params: this.$route.query })
        this.setToken({ token: res.access_token });
        this.setUser({ user: res.user });
        this.$router.replace('/')
     } catch (err) {
        this.failedMessage = err.message;
     }
  }
}
</script>