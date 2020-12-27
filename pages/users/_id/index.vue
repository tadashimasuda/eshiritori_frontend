<template>
<div class="user_wapper">
    <div class="user_inner">
        <div id="user_user_profile">
            <img :src="userData.img_path" alt="" class="user_user_img">
            <h4 class="user_name mt-4">{{userData.name}}</h4>
            <!-- <template v-if="userData.profile">
                <h5>プロフィール：</h5>
                <pre class="user_profile">{{userData.profile}}</pre>
            </template>
            <template v-if="userData.twitter_id">
                <a :href="`http://twitter.com/${userData.twitter_id}`" target="_blank">
                <i class="fab fa-twitter-square fa-2x"></i>
            </a>
            </template> -->
        </div>
    <div class="contents">
        <b-tabs content-class="mt-3" justified>
            <b-tab title="投稿された絵" active>
                <div class="user_posts">
                    <div class="user_post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/tables/${post.table_id}`">
                            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="">
                        </nuxt-link>
                    </div>
                </div>
            </b-tab>
            <b-tab title="主催しているテーブル">
                <!-- <div class="tables cards">
                    <div class="table card" style="width: 18rem;" v-for="table in tables" :key="table.id">
                        <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${table.post.img_path}`" width="100%" height="180" alt="">
                        <div class="card-body m-0 p-0 pb-1">
                            <h4 class="mt-1 ml-1">{{table.name}}</h4>
                            <small class="ml-1">主催者：</small>
                            <img :src="table.owner.img_path" width="20" height="20" alt="">
                            <small>{{table.owner.name}}</small>
                        </div>
                    </div>
                </div> -->
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

        let [ {data},tables] = await Promise.all([
                $axios.$get(`/users/${id}`),
                $axios.$get(`/tables/${id}/user`)
            ]);
            return{
                userData:data.user,
                posts:data.posts,
                tables:tables.data,
            }
        // let { data } = await $axios.$get(`/users/${id}`)
        // return{
        //     userData:data.user,
        //     posts:data.posts,
        //     tables:data.tables,
        // }
    }
}
</script>