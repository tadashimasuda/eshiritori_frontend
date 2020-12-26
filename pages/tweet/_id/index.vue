<template>
<div>
    <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="">
    <select name="followers" v-model="select_follower">
        <option  v-for="follower in followers" :key="follower.id" :value="follower.screen_name">
            {{follower.name}}(@ {{follower.screen_name}})
        </option>    
    </select>
    <p v-if="select_follower">指名されたフォロワー：{{select_follower}}</p>
    <button type="button" class="btn">Tweet</button>
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