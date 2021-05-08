<template>
    <div class="wapper">
        <h3 id="users_title"><i class="fas fa-users users-title-icon"></i>画家一覧</h3>
        <div id="users">
            <div class="user" v-for="user in users" :key="user.id">
                <nuxt-link :to ="`/users/${user.id}`">
                    <span><img :src="user.img_path" class="rounded-circle mt-3 ml-3" height="70px" alt=""></span>
                    <span class="users-user-name mt-3 ml-3 text-dark">{{user.name}}</span>
                </nuxt-link>
                <nuxt-link :to ="`/users/${user.id}`">
                    <p class="text-right mr-1">>>詳しく見る</p>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            users:[],
            links:''
        }
    },
    async asyncData({$axios}){
        let { data,links } = await $axios.$get('/users');
        return{
            users:data,
            links:links
        }
    }
}
</script>