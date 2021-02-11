<template>
  <div>
      <header>
        <div id="header_container">
          <div id="header_title">
            <nuxt-link to="/"><h6 id="title">Title</h6></nuxt-link>
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
                <p id="user_edit_btn">
                   <nuxt-link to='/'><i class="fas fa-user-edit"></i>ユーザー情報編集</nuxt-link>
                </p>
            </template>
          </div>
          <div id="menus">
            <ul>
              <li id="menu_tables" @click="menu = !menu">
                <p>
                  <nuxt-link to="/tables" @click="menu = !menu" class="menu-link"><i class="fas fa-images menu-icon"></i>テーブル一覧</nuxt-link>
                </p>
              </li>
              <li id="menu_users" @click="menu = !menu">
                <p>
                  <nuxt-link to="/users" @click="menu = !menu" class="menu-link"><i class="fas fa-users menu-icon"></i>ユーザー一覧</nuxt-link>
                </p>
              </li>
              <li id="menu_login" @click="menu = !menu">
                <p>
                  <nuxt-link to="/oauth/twitter/redirect" class="menu-link"><i class="fas fa-sign-in-alt menu-icon"></i>ログイン</nuxt-link>
                </p>
              </li>
              <li id="menu_logout" @click="deleteToken(); menu = !menu" class="menu-link">
                <p>
                  <i class="fas fa-sign-out-alt menu-icon"></i>ログアウト
                </p>
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