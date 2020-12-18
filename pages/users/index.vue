<template>
    <div class="container">
        <div class="users">
            <div class="user">
                一覧：{{users}}
                {{links}}
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