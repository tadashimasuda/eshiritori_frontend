<template>
    <div class="container">
        <div class="col-md-10 mx-auto text-center">
            <h2>テーブルを作成する</h2>
            <div class="form ">
                <form> 
                    <label for="table_name">テーブル名：</label>
                    <input v-model="name" type="text" id="table_name">
                    <Canvas @getData="postData" />
                    <!-- <client-only placeholder="Loading...">
                        <CreateImgBtn @click="create"/>
                    </client-only>   -->
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
            name:''
        }
    },
    components:{
        Canvas
    },
    methods:{
        postData(data) {
            console.log(data);
            console.log(this.name);
        }
    }

}
</script>