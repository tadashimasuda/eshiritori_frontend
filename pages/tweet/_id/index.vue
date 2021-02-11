<template>
<div class="wapper">
    <div id="user_tweet">
        <h3>ツイートする</h3>
        <div id="img">
            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="描画された画像">
        </div>
        <div id="followers">
            <select name="followers" v-model="select_follower">
                <option  v-for="follower in followers" :key="follower.id" :value="follower.screen_name">
                    {{follower.name}}(@ {{follower.screen_name}})
                </option>    
            </select>
        </div>
        <p v-if="select_follower">指名されたフォロワー：{{select_follower}}</p>
        <div id="tweet_btn">
            <i class="fab fa-twitter fa-lg"></i>
            <span>ツイート</span>
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
        let data = await $axios.$get(`tables/${id}/post`);
        let res = await $axios.$get('/user/followers',headers);
        return{
            post:data,
            followers:res.followers
        }
    }
}
</script>