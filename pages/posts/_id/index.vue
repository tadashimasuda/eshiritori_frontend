<template>
    <div class="wapper">
        <div id="prev_post">
            <h4>この絵の次を書いてください</h4>
            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="">
        </div>
        <div id="post_canvas">
            <Canvas @getData="postData" />
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
            post:[],
        }
    },
    async asyncData({route,$axios,store}){
        const id = route.params.id
        let data = await $axios.$get(`tables/${id}/post`);
        return{
            post:data
        }
    },
    methods:{
        async postData(encode_data) {
            let req = {
                table_id : this.post.table_id,
                image : encode_data
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
                this.$router.push(`/tweet/${res.post_id}`)
            }).catch(err=>{
                console.log(err.response);
            });
        }
    }
}
</script>