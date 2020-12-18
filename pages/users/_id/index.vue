<template>
<div class="container">
    <div>
        user:{{user}}
    </div>
    <div>
        posts:{{posts}}
    </div>
    <div>
        tables:{{tables}}
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            userData:[],
            posts:[],
            tables:[]
        }
    },
    async asyncData({route,$axios}){
        const id = route.params.id;
        let { data } = await $axios.$get(`/users/${id}`)
        return{
            userData:data.user,
            posts:data.posts,
            tables:data.tables,
        }
    }
}
</script>