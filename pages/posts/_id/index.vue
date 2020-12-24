<template>
    <div class="container">
        <div class="col-md-8 mx-auto">
            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="">
            <Canvas @getData="postData" />
            {{followers}}
            <p v-for="follower in followers" :key="follower.id">
                    {{follower.name}}
            </p>
            <select name="followers">
                <option v-for="follower in followers" :key="follower.id" :value="follower.screen_name">
                    {{follower.name}}
                </option>
            </select>
        </div>
    </div>
</template>
<script>
import Canvas from '@/components/Canvas.vue';

export default {
    components:{
        Canvas
    },
    data(){
        return{
            post:'',
            followers:[]
        }
    },
    async asyncData({route,$axios,store}){
        const id = route.params.id;
        let token = 'Bearer ' + store.getters.token;
        let headers = {
            data:{},
            headers:{
                "Authorization" :token,
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
        }
            await $axios.$get('/user/followers',headers).then( res => {
                console.log(res);
                return{
                    followers:res.followers
                }
            }).catch( err => {
                console.log(err);
            });

            await $axios.$get(`tables/${id}/post`).then( res => {
                return{
                    post:res
                }
            }).catch( err => {
                console.log(err);
            });
    },
    methods:{
        async postData(data) {
            let req = {
                table_id : this.post.table_id,
                image : data
            }
            let token = 'Bearer ' + this.$store.getters.token;
            let headers = {
                headers:{
                    "Authorization" :token,
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            }
            await this.$axios.$post('/posts',req,headers).then(res => {
                console.log(res);
            }).catch(err=>{
                console.log(err.response);
            });
        }
    }
}
</script>