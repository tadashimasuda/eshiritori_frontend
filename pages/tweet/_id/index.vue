<template>
<div class="wapper">
    <div id="user_tweet">
        <h3>ツイートする</h3>
        <div id="img">
            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="描画された画像">
        </div>
        <!-- <div id="followers">
            <select name="followers" v-model="select_follower">
                <option  v-for="follower in followers" :key="follower.id" :value="follower.screen_name">
                    {{follower.name}}(@ {{follower.screen_name}})
                </option>    
            </select>
        </div> -->
        <!-- <p v-if="select_follower">指名されたフォロワー：{{select_follower}}</p> -->
        <div class="tweet-btn mt-5">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false"></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>  
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            select_follower:'',
            followers:[],
            post:[]
        }
    },
    async asyncData({store,route,$axios}){
        let token = 'Bearer ' + store.getters.token;
        let headers = {
            data:{},
            headers:{
                "Authorization" :token,
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
        }
        const id = route.params.id;
        let data = await $axios.$get(`posts/${id}`);
        let res = await $axios.$get('/user/followers',headers);
        return{
            post:data,
            followers:res.followers
        }
    },
    head() {
        return {
            title: '絵しりとり',
            meta:[
                {
                    hid:"description",
                    name:"description",
                    content:`Twitter上で絵しりとりができるサービスです。`,
                },
                {
                    hid:"og:type",
                    property:"og:type",
                    content:"article"
                },
                { 
                    hid:"og:title",
                    property:"og:title",
                    content:`${this.post}`
                },
                {
                    hid:'og:url',property:"og:url",content:"url"
                },
                {
                    hid:"og:discription",
                    property:"og:discription",
                    content:`Twitter上で絵しりとりができるサービスです。`,
                },
                {
                    hid:"og:image",
                    property:"og:image",
                    content:`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${this.post.img_path}`,
                },
                {
                    hid:"twitter:card",
                    property:"twitter:card",
                    content:`summary_large_image`,
                },
                {
                    hid:"twitter:image:src",
                    property:"twitter:image:src",
                    content:`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${this.post.img_path}`,
                }
            ]
        }
    },
}
</script>