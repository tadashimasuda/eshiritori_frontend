<template>
    <div class="wapper">
        <div class="table_show">
            <h3 id="owner_title">このテーブルを始めた人</h3>
            <div class="owner">
                <img :src="table.owner.img_path" alt="ユーザー画像">
                <h4 class="owner_name">{{table.owner.name}}</h4>
            </div>
            <template v-if="table.owner.id == user.id">
                <p class="text-center">あなたがオーナーです。</p>
            </template>
            <template v-if="!table.close">
                <div id="close-btn" class="col-5 mx-auto " @click='closeAlert()'>
                    <button type="button" class="btn btn-danger"><i class="fas fa-times fx-lg mr-2"></i>テーブルを閉じる</button>
                </div>
            </template>
            <div id="post-btn" class="mt-4" v-if="!table.close">
                <nuxt-link :to="`/posts/${table.id}`" id="post-btn-link">
                    <i class="fas fa-paint-brush fx-lg"></i>続きを描く
                </nuxt-link>
            </div>
            <p v-if="table.close" class="text-center">テーブルはオーナーによって閉じられました。</p>
            <div id="posts">
                <div v-for="(post,index) in this.posts" :key="post.id">
                    <div :class="postClass(index,'box my-2')">
                        <i class="fas fa-arrow-up fa-2x"></i>
                    </div>
                    <div :class="postClass(index,'table-post') ">
                        <div class="table-post-user">
                            <img :src="post.user.img_path" alt="ユーザー画像" class="table-post-user">
                            <span class="table_user_name">{{post.user.name}}</span>
                        </div>
                        <div class="user-post">
                            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="投稿画像">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            table:[],
            posts:[],
            add_posts:[],
            links:'',
        }
    },
    async asyncData({route,$axios}){
        const id = route.params.id;
        let [tableData,postsData] = await Promise.all([
            $axios.$get(`/tables/${id}`),
            $axios.$get('/posts',{params:{'table':id}})
        ]);
        return{
            table:tableData.data,
            posts:postsData.data,
            links:postsData.links,
        }
    },
    methods:{
        postClass(id,type){
            if(id>2){
                return `fade-in fade-in-down  ${type}`
            }else{
                return type
            }
        },
        async closeAlert(){
            let answer = confirm('本当にテーブルを閉じていいいですか？　元に戻すことはできません。')
            if(answer){
                let page_id = this.$route.params.id;
                try {
                    let token = 'Bearer ' + this.$store.getters.token;
                    let headers = {
                        headers:{
                            "Authorization" :token,
                            "Content-Type" : "application/json",
                            "Accept" : "application/json"
                        }
                    }
                    await this.$axios.$put(`/tables/${page_id}/update`,{},headers)
                    this.table.close = 1
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    mounted(){
        let fadeInTarget = document.querySelectorAll('.fade-in');
        window.addEventListener('scroll', () => {
        for (let i = 0; i < fadeInTarget.length; i++){
            const rect = fadeInTarget[i].getBoundingClientRect().top;
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            const offset = rect + scroll;
            const windowHeight = window.innerHeight;
            if (scroll > offset - windowHeight + 150) {
            fadeInTarget[i].classList.add('scroll-in');
            }
        }
        });
    },
}
</script>