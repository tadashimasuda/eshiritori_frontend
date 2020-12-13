const inBrowser = typeof window !== 'undefined'
import Cookies from 'js-cookie';
import Cookie from 'cookie';

const cookieparser = require('cookieparser');

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
    if (inBrowser) {
      if (token) {
        // this.$cookies.set('token', token, { expires: 30 })
        Cookies.set('token', token)
      } else {
        // this.$cookies.remove('token')
        Cookies.remove('token');
      } 
    }
  },
  deleteToken(state){
    state.token=null
    state.user=null;
    Cookies.remove('token');
  }
}

export const actions = {
  async nuxtServerInit({ commit },{ req }){
    if(req.headers.cookie){
      const token = 'Bearer ' + cookieparser.parse(req.headers.cookie).token
      let user = ''; 
      try {
          user = await this.$axios.$get('/user',{ 
            headers:{ 
              'Authorization': token,
              'Accept':'application/json'
            }
          })
        } catch (err) {
          console.log(err);
        }
      commit('setUser',user);
    }
  }
}
