<template>
    <div class="container">
        {{tables}}
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