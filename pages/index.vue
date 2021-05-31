<template>
  <div class="wapper col-md-6">
    <div class="warning bg-success mt-1 text-center text-light">
      <small>Twitterログインが故障中です。<nuxt-link to="/login">こちら</nuxt-link>からお願いします。</small>
    </div>
    <div id="top" class="">
      <h2>Twitterで絵しりとりできるサービス</h2>
      <template v-if="authenticated">
        <button type="button" class="btn table-btn btn-danger mt-5">
          <span>
            <nuxt-link to="/tables" class="text-light">テーブルを見る</nuxt-link>
          </span> 
        </button>
      </template>
      <template v-else>
        <div class="twitter-login-btn">
          <i class="fab fa-twitter fa-lg"></i>
          <span>
            <nuxt-link to="/oauth/twitter/redirect" class="text-light">Twitterでログイン</nuxt-link>
          </span>   
        </div>
      </template>
    </div>
    <div class="main">
      <h3 id="top_main_title">最近投稿された絵</h3>
      <div id="top_posts">
        <div class="top-post"  v-for="post in posts" :key="post.id">
          <div class="post-image">
            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="テーブル画像">
          </div>
          <div class="post-user">
            <div class="user-img">
              <img :src="`${post.user.img_path}`" alt="">
            </div>
            <div class="user-name">
                <nuxt-link to="/" >{{post.user.name}}</nuxt-link>
            </div>
            <p id="post_created_at">{{post.created_at}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tables:[],
      posts:[],
    }
  },
  async asyncData({$axios}){
    let [tablesData,postsData] = await Promise.all([
      $axios.$get('/tables',{params:{q:'top'}}),
      $axios.$get('/posts',{params:{q:'top'}})
    ]);
    return{
      tables:tablesData.data,
      posts:postsData.data
    }
  },
  mounted(){
    // aslert('aa')
  }

}
</script>