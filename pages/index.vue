<template>
  <div class="container border">
    <div class="top border">
    </div>
    <div class="contents mt-5">
      <div class="tables">
        <h2>最近更新されたテーブル</h2>
      </div>
      <div class="posts">
        <h2>最新投稿</h2>
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
  // async asyncData(){
  //   await this.$axios.$get('/tables',{params:{'top':'top'}}).then(res=>{
  //     console.log(res);
  //   })
  // }
}
</script>

<style scoped>
.top{
  height: 300px;
}
</style>