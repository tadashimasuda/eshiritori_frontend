<template>
    <div class="wapper">
        <h3 id="users_title"><i class="fas fa-users users-title-icon"></i>画家一覧</h3>
        <div id="users">
            <div class="user" v-for="user in users" :key="user.id">
                <nuxt-link :to ="`/users/${user.id}`">
                    <span><img :src="user.img_path" height="50" width="50" alt=""></span>
                    <span class="users-user-name">{{user.name}}</span>
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