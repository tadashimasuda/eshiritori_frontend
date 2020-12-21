<template>
    <div class="container">
        <div class="col-md-10 mx-auto text-center">
            <h2>テーブルを作成する</h2>
            <div class="form ">
                <form> 
                    <label for="table_name">テーブル名：</label>
                    <input type="text" id="table_name"> 
                    <Canvas />
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
    components:{
        Canvas
    },

}
</script>