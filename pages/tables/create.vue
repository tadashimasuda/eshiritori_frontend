<template>
    <div class="container">
        <div class="col-md-10 mx-auto text-center">
            <h2>テーブルを作成する</h2>
            <div class="form ">
                <form> 
                    <label for="table_name">テーブル名：</label>
                    <input v-model="name" type="text" id="table_name">
                    <small v-if="errors.name">{{errors.name[0]}}</small>
                    <Canvas @getData="postData" />
                </form>
            </div>
 
        </div>
    </div>
</template>

<script>
import Canvas from '@/components/Canvas.vue';

export default {
    middleware:['auth'],
    data(){
        return{
            name:'',
            image:''
        }
    },
    components:{
        Canvas
    },
    methods:{
        // getData(data){
        //     this.image=data;
        //     this.postData();
        // },
        async postData(data) {
            let req = {
                name:this.name,
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
            await this.$axios.$post('/table',req,headers).then(res => {
                console.log(res);
            }).catch(err=>{
                console.log(err.response);
            });
        }
    }

}
</script>