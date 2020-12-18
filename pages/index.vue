<template>
  <div class="container">
    <div class="top border">
    </div>
    <div class="contents mt-5">
      <div class="tables">
        <h2>最近更新されたテーブル</h2>
        {{tables}}
      </div>
      <div class="posts">
        <h2>最新投稿</h2>
        {{posts}}
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
      tables:tablesData,
      posts:postsData
    }
  }
}
</script>

<style scoped>
.top{
  height: 300px;
}
</style>