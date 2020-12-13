<template>
<div>
    <p>header</p>
    <button @click="deleteToken()">aa</button>
</div>

</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods: mapMutations(['deleteToken']),

    // methods:{
    //     logout(){
    //         this.deleteToken();
    //     }
    // }
}
</script>