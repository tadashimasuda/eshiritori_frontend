<template>
  <div>
      <header>
        <div id="header_container">
          <div class="header_title">
            <h6 id="title">Title</h6>
          </div>
          <div id="menu_icon" @click="menu =!menu">
            <i class="fas fa-bars fa-lg" v-if="!menu"></i>
            <i class="fas fa-times fa-lg" v-if="menu"></i>
          </div>
        </div>
      </header>
      <transition name="menu">
        <div v-if="menu" id="menu">
          <div id="menu_user">
            <template v-if="user">
              <img :src="user.img_path" alt="ユーザー画像" id="menu_user_img">
              <h3 id="menu_user_name">{{user.name}}</h3>
            </template>
          </div>
          <div id="menus">
            <ul>
              <li id="menu_top" @click="menu = !menu">
                <nuxt-link to="/" @click="menu = !menu" class="menu_link">TOP</nuxt-link>
              </li>
              <li id="menu_tables" @click="menu = !menu">
                <nuxt-link to="/tables" @click="menu = !menu" class="menu_link">テーブル一覧</nuxt-link>
              </li>
              <li id="menu_users" @click="menu = !menu">
                <nuxt-link to="/users" @click="menu = !menu" class="menu_link">画家一覧</nuxt-link>
              </li>
              <li id="menu_login" @click="menu = !menu">
                <nuxt-link to="/oauth/twitter/redirect" class="menu_link">LOGIN</nuxt-link>
              </li>
              <li id="menu_logout" @click="deleteToken(); menu = !menu" class="menu_link">LOGOUT</li>
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