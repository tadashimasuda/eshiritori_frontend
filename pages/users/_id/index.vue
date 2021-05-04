<template>
<div class="user_wapper">
    <div class="user_inner">
        <div id="user_user_profile" class="mt-5">
            <img :src="userData.img_path" alt="" class="user_user_img rounded-circle mt-3" height="90px">
            <h4 class="user_name">{{userData.name}}</h4>
            <template v-if="userData.profile">
                <h5>プロフィール：</h5>
                <pre class="user_profile">{{userData.profile}}</pre>
            </template>
            <template v-if="userData.twitter_id">
                <a :href="`http://twitter.com/${userData.twitter_id}`" target="_blank">
                <i class="fab fa-twitter-square fa-2x"></i>
            </a>
            </template>
        </div>
    <div class="contents mx-5 mt-5 col-md-7 mx-auto">
        <b-tabs content-class="mt-3" justified>
            <b-tab title="投稿された絵" active>
                <div class="user_posts">
                    <div class="user_post mt-2 col-md-10 mx-auto" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/tables/${post.table_id}`">
                            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="">
                        </nuxt-link>
                    </div>
                </div>
            </b-tab>
            <b-tab title="主催しているテーブル">
                <div class="user_owner_tables">
                    <div class="user_owner_table mt-3 col-md-10 mx-auto" v-for="table in tables" :key="table.id">
                        <p class="table_owner_name text-center">{{table.name}}</p>
                        <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${table.post.img_path}`" alt="テーブル画像">
                    </div>
                </div>
            </b-tab>
        </b-tabs>
    </div>
    </div>
</div>


</template>

<script>
export default {
    data(){
        return{
            userData:[],
            posts:[],
            tables:[]
        }
    },
    async asyncData({route,$axios}){
        const id = route.params.id;

        let [{data},tables] = await Promise.all([
                $axios.$get(`/users/${id}`),
                $axios.$get(`/tables/${id}/user`)
            ]);
            console.log(data.user);
            return{
                userData:data.user,
                posts:data.posts,
                tables:tables.data,
            }
    }
}
</script>