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
    async asyncData({$axios}){
        let { data } = await $axios.$get('/tables');
        return{
            tables:data
        }
    }
}
</script>