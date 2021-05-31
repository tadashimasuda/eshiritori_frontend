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

export const getters = {
  authenticated(state){
    return state.loggedIn;
  },
  user(state){
    return state.user;
  },
  token(state){
    return state.token; 
  }
}

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
        Cookies.set('token', token)
      } else {
        Cookies.remove('token');
      } 
    }
  },
  deleteToken(state){
    state.token=null
    state.user=null;
    Cookies.remove('token');
    alert('ログアウトしました。')
  }
}

export const actions = {
  async nuxtServerInit({ commit },{ req }){
    if(cookieparser.parse(req.headers.cookie).token){
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
      commit('setToken',{ token:cookieparser.parse(req.headers.cookie).token});
      commit('setUser',user);
    }
  }
}
