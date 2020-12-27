<template>
    <div class="tables_wapper">
        <h3 id="tables_title">テーブル一覧</h3>
        <div id="tables">
            <div id="table" v-for="table in tables" :key="table.id">
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
            <div class="cb"></div>
        </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            tables:[]
        }
    },
    async asyncData({$axios}){
        let { data } = await $axios.$get('/tables');
        console.log(data);
        return{
            tables:data
        }
    }
}
</script>
