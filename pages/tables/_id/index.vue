<template>
    <div class="container">
        <div class="tables col-md-8 mx-auto">
            <div class="owner mx-auto d-flex mt-4">
                <img :src="tables.owner.img_path" width="20%" height="20%" alt="">
                <h4 class="owner_name display-inline mt-3 ml-2">{{tables.owner.name}}</h4>
            </div>
            <div class="table border mt-3" v-for="post in tables.post" :key="post.id">
                <div class="user ml-1 my-1">
                    <img :src="post.user.img_path" width="22" height="22" alt="">
                    <span class="user_name">{{post.user.name}}</span>
                </div>
                <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="" >
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
    async asyncData({route,$axios}){
        const id = route.params.id;
        let { data } = await $axios.$get(`/tables/${id}`);
        return{
            tables:data
        }
    }
}
</script>