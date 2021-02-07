<template>
    <div id="tables_wapper">
        <!-- <h3 id="tables_title">テーブル一覧</h3> -->
        <div id="tables">
            <div id="table" v-for="table in tables" :key="table.id">
                <nuxt-link :to="`/tables/${table.id}`">
                    <div class="post-image">
                        <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${table.post.img_path}`" alt="テーブル画像">
                    </div>
                </nuxt-link>
                <p>{{table.name}}</p>
                <div class="post-user">
                    <div class="user-img">
                        <img :src="`${table.owner.img_path}`" alt="">
                        <nuxt-link :to="`/users/${table.owner.id}`" class="user-name">主催者：{{table.owner.name}}</nuxt-link>
                    </div>
                    <p>{{table.created_at}}</p>
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
        return{
            tables:data
        }
    }
}
</script>
