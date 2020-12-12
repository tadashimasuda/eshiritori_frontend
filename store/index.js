const inBrowser = typeof window !== 'undefined'

export const state = () => {
  return {
    user: null,
    loggedIn: false,
    token: null
  }
}

export const getters = {}

export const mutations = {
  setUser (state, { user }) {
    state.user = user
    state.loggedIn = Boolean(user)
  },

  setToken (state, { token }) {
    state.token = token

    // Store token in cookies
    // if (inBrowser) {
    //   if (token) {
    //     // this.$cookies.set('token', token, { expires: 30 })
    //     this.$cookies.set('token', token, { expires: 30 })
    //   } else {
    //     this.$cookies.remove('token')
    //   }
    // }
  }
}