<template>
  <div class="wapper col-md-6">
    <div id="top" class="mt-1">
      <h2>Twitterで絵しりとりできるサービス</h2>
      <div class="twitter-login-btn">
        <i class="fab fa-twitter fa-lg"></i>
        <span>Twitterでログイン</span>
      </div>
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
  }
}
</script>