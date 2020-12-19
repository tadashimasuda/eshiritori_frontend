<template>
  <div class="container">
    <div class="top border">
    </div>
    <div class="contents mt-5">
      <div class="tables">
        <h2>最近更新されたテーブル</h2>
        <div class="tables cards d-flex flex-row">
          <div class="table card mr-2" style="width: 18rem;" v-for="table in tables" :key="table.id">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%"/><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
            <div class="card-body">
              <!-- <p>{{table[0].name}}</p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="posts mt-5">
        <h2>最新投稿</h2>
        <div class="posts cards d-flex flex-row">
          <div class="post card mr-2" style="width: 18rem;" v-for="post in posts" :key="post.id"> 
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%"/><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
            <div class="card-body">
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
.cards{
  overflow-x: auto;
}
.card{
  flex: 0 0 300px;
}
</style>