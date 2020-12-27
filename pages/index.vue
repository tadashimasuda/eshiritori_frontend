<template>
  <div>
    <div id="top">
      <h2>Twitterで絵しりとりできるサービス</h2>
      <div id="twitter_login_btn">
        <i class="fab fa-twitter fa-lg"></i>
        <span>Twitterでログイン</span>
      </div>
    </div>
    <div class="wapper">
      <div class="main">
        <h3 class="top_main_title">最近投稿された絵</h3>
        <div id="top_posts">
          <div class="top_post"  v-for="post in posts" :key="post.id">
            <div class="post_image">
              <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="テーブル画像">
            </div>
            <div class="post_user">
              <div class="user_img">
                <img :src="`${post.user.img_path}`" alt="">
                <nuxt-link to="/" class="user_name">{{post.user.name}}</nuxt-link>
              </div>
              <p>12月12日</p>
            </div>
          </div>
        </div>
        <h3 class="top_main_title">最近更新されたテーブル</h3>
        <div id="top_tables">
        <div class="top_table" v-for="table in tables" :key="table.id">
            <div class="post_image">
              <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${table.post.img_path}`" alt="テーブル画像">
            </div>
            <p>{{table.name}}</p>
            <div class="post_user">
              <div class="user_img">
                <img :src="`${table.owner.img_path}`" alt="">
                <nuxt-link to="/" class="user_name">主催者：{{table.owner.name}}</nuxt-link>
              </div>
              <p>12月12日</p>
            </div>
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
      $axios.$get('/tables',{params:{'top':'top'}}),
      $axios.$get('/posts',{params:{'top':'top'}})
    ]);
    return{
      tables:tablesData.data,
      posts:postsData.data
    }
  }
}
</script>