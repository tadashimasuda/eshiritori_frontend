<template>
    <div id="tables_wapper" class="row col-md-6 mx-auto mt-5">
        <h4>テーブル一覧</h4>
        <div id="tables" class="row">
            <div class="mx-auto table mt-2 rounded" v-for="table in tables" :key="table.id">
            <p class="text-center">{{table.name}}</p>
            <div class="table-post-img">
                <nuxt-link :to="`/tables/${table.id}`">
                    <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${table.post.img_path}`" width="100%" alt="テーブル画像">
                </nuxt-link>
            </div>
            <div class="join-table-user">
                <img :src="`${table.owner.img_path}`" class="rounded-circle" height="35px" alt="">
                <p class="text-right mb-0">{{table.created_at}}</p>
            </div>
        </div>
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
