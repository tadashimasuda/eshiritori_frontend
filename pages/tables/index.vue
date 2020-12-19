<template>
    <div class="container">
        <div class="cards mt-3 row mx-auto col-md-10">
          <div class="card mr-2 mt-2" style="width: 18rem;" v-for="table in tables" :key="table.id">
            <nuxt-link :to ="`/tables/${table.id}`">
                <img :src="table.post.img_path" width="100%" height="180" alt="">
            </nuxt-link>
                <div class="pb-2">
                    <h6 class="ml-2 mt-2 user_name">{{table.name}}</h6>
                    <span class="ml-2">主催者：</span>
                    <nuxt-link :to="`/users/${table.owner.id}`">
                        <img :src="table.owner.img_path" width="22" height="22" alt="" >
                        <span>{{table.owner.name}}</span>
                    </nuxt-link>
                </div>
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
    async asyncData({$axios}){
        let { data } = await $axios.$get('/tables');
        return{
            tables:data
        }
    }
}
</script>
