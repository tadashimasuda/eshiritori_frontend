<template>
    <div class="wapper">
        <div class="create_table_box">
            <h2>テーブルを作成する</h2>
            <div id="form" >
                <form> 
                    <label for="table_name">テーブル名：</label>
                    <input v-model="name" type="text" id="table_name"><br>
                    <small v-if="warning" class="text-danger">テーブル名が入力されていません</small>
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
            image:'',
            warning:false
        }
    },
    components:{
        Canvas
    },
    methods:{
        async postData(data) {
            if (!this.name) {
                this.warning =true
            }else{
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
                await this.$axios.$post('/tables',req,headers).then(res => {
                    this.$router.push('/tables')
                }).catch(err=>{
                    console.log(err.response);
                });
            }
            
        }
    }

}
</script>