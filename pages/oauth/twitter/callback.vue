<template>
  <div>
    <p v-if="attempting">Twitterでログインしています。</p>

    <template v-else>
      <p>Twitterでのログインに失敗しました。</p>
      <p>{{ failedMessage }}</p>
    </template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
//   middleware: 'guest',
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

  methods: mapMutations([
    'setToken',
    'setUser'
  ]),

   mounted() {
    this.$axios.$get('/oauth/twitter/callback', { params: this.$route.query }).then(res=>{
            alert(res);
            // this.setToken({ token: res.access_token });
            // this.setUser({ user: res.user });
       }).catch( err=>{
        this.failedMessage = err.message;   
       });
  }
}
</script>