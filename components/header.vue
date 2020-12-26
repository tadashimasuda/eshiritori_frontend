<template>
  <div>
      <header class="bg-light">
        <nav class="navbar navbar-light container">
          <template v-if="authenticated">
            <nuxt-link to='/oauth/twitter/redirect' class="navbar-brand text-left">ログイン</nuxt-link>
          </template>
          <template v-else>
            <a href="#">name</a>
          </template>
          <nuxt-link to="/" class="navbar-brand mx-auto">Header</nuxt-link>
          <div class="text-right">
            <button type="button" @click="menu = !menu" class="navbar-toggler-icon border-0"></button>
          </div>
        </nav>
      </header>
      <transition>
        <div v-if="menu" class="drawer-menu-wrapper bg-light">
          <div class="header_user text-center pt-4">
            <template v-if="user">
              <img :src="user.img_path" alt="" class="user_img">
              <h3 class="mt-4">{{user.name}}</h3>
            </template>
          </div>
          <div>
            <ul class="m-0 p-0">
              <li class="border py-2">
                <nuxt-link to="/">
                  <button class="btn" @click="menu = !menu">TOP</button>
                </nuxt-link>
              </li>
              <li class="border py-2">
                <nuxt-link to="/tables">
                  <button class="btn" @click="menu = !menu">テーブル一覧</button>
                </nuxt-link>
              </li>
              <li class="border py-2">
                <nuxt-link to="/users">
                  <button class="btn" @click="menu = !menu">画家一覧</button>
                </nuxt-link>
              </li>
              <li class="border py-2">
                <nuxt-link to="/oauth/twitter/redirect">
                  <button class="btn" @click="menu = !menu">LOGIN</button>
                </nuxt-link>
              </li>
              <li class="border py-2">
                <button @click="deleteToken(); menu = !menu" class="btn">LOGOUT</button>
              </li>
            </ul>
          </div>
        </div>
      </transition>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      menu:false
    }
  },
  methods: mapMutations(['deleteToken']),
}
</script>

<style>
.right-enter-active,
.right-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.right-enter,
.right-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 50%;
  height: 120%;
}
.header_user{
  height: 150px;
}
ul{
  list-style: none;
}
li:hover{
  background-color: black;
  opacity: 0.3;
}
.btn{
  width: 100%;
}
</style>