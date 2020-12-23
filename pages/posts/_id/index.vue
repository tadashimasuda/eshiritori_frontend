<template>
    <div class="container">
        <div class="col-md-8 mx-auto">
            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="">
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
            post:''
        }
    },
    async asyncData({route,$axios}){
        const id = route.params.id;
        let { data } = await $axios.$get(`tables/${id}/post`);
        return{
            post:data
        }
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
            await this.$axios.$post('/post',req,headers).then(res => {
                console.log(res);
            }).catch(err=>{
                console.log(err.response);
            });
        }
    }
}
</script>