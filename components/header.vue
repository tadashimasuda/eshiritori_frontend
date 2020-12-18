<template>
  <div>
      <header class="bg-light">
        <nav class="navbar navbar-light container">
          <template v-if="authenticated">
            <nuxt-link to='/oauth/twitter/redirect' class="navbar-brand text-left">ログイン</nuxt-link>
          </template>
          <template v-else>
            <a href="#">{{user.name}}</a>
          </template>
          <nuxt-link to="/" class="navbar-brand mx-auto">Header</nuxt-link>
          <div class="text-right">
            <button type="button" @click="menu = !menu" class="navbar-toggler-icon border-0"></button>
          </div>
        </nav>
      </header>
      <transition name="right" class="menu">
        <div v-if="menu" class="drawer-menu-wrapper row">
          <ul class="col-10 bg-light">
            <li>
              <nuxt-link to="/">
                <button class="btn" @click="menu = !menu">TOP</button>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/oauth/twitter/redirect">
                <button class="btn" @click="menu = !menu">LOGIN</button>
              </nuxt-link>
            </li>
            <li>
              <button @click="deleteToken(); menu = !menu" class="btn">LOGOUT</button>
            </li>
          </ul>
          <div class="col-2">
            <button @click="menu = !menu" class="btn">end</button>
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
  width: 40%;
  height: 100%;
}
.drawer-menu {
  padding: 24px;
}
</style>