<template>
  <div>
      <header>
        <div id="header_container" class="col-md-6">
          <div id="header_title">
            <h6 id="title"><nuxt-link to="/">えしりとり</nuxt-link></h6>
          </div>
          <div id="menu_icon" @click="menu =!menu">
            <i class="fas fa-bars fa-lg"></i>
          </div>
        </div>
      </header>
      <transition name="menu">
        <div id="menu_wrapper" v-if="menu" @click="menu =!menu">
          <div id="menu" v-if="menu">
            <template v-if="user">
            <div id="menu_user">
              <img :src="user.img_path" alt="ユーザー画像" id="menu_user_img">
              <h3 id="menu_user_name">{{user.name}}</h3>
              <p id="user_edit_btn" class="text-muted">
                <nuxt-link to='/' class="text-muted"><i class="fas fa-user-edit"></i>ユーザー情報編集</nuxt-link>
              </p>
            </div>
            </template>
            <div id="menus">
              <ul>
                <li id="menu_tables" @click="menu = true">
                  <p>
                    <nuxt-link to="/tables" class="menu-link"><i class="fas fa-images menu-icon"></i>テーブル一覧</nuxt-link>
                  </p>
                </li>
                <li id="menu_users" @click="menu = true">
                  <p>
                    <nuxt-link to="/users" class="menu-link"><i class="fas fa-users menu-icon"></i>ユーザー一覧</nuxt-link>
                  </p>
                </li>
                <li id="menu_table_crate" @click="menu = true">
                  <p>
                    <nuxt-link to="/tables/create" class="menu-link"><i class="fas fa-plus menu-icon"></i>テーブルを作成</nuxt-link>
                  </p>
                </li>
                <template v-if="!user">
                  <li id="menu_login" @click="menu = true">
                  <p>
                    <nuxt-link to="/oauth/twitter/redirect" class="menu-link"><i class="fas fa-sign-in-alt menu-icon"></i>ログイン</nuxt-link>
                  </p>
                </li>
                </template>
                <template v-else>
                  <li id="menu_logout" @click="deleteToken(); menu = true" class="menu-link">
                  <p>
                    <i class="fas fa-sign-out-alt menu-icon"></i>ログアウト
                  </p>
                </li>
                </template>
              </ul>
            </div>
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