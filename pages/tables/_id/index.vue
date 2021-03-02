<template>
    <div class="wapper">
        <div class="table_show">
            <h3 id="owner_title">このテーブルを始めた人</h3>
            <div class="owner">
                <img :src="table.owner.img_path" alt="ユーザー画像">
                <h4 class="owner_name">{{table.owner.name}}</h4>
            </div>
            <div id="post-btn">
                <nuxt-link :to="`/posts/${table.id}`" id="post-btn-link">
                    <i class="fas fa-paint-brush fx-lg"></i>続きを描く
                </nuxt-link>
            </div>
            {{posts.length}}
            <div id="posts">
                <div v-for="post in this.posts" :key="post.id">
                    <div class="fade-in fade-in-down table-post">
                        <div class="table-post-user">
                            <img :src="post.user.img_path" alt="ユーザー画像" class="table-post-user">
                            <span class="table_user_name">{{post.user.name}}</span>
                        </div>
                        <div class="user-post">
                            <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="投稿画像">
                        </div>
                    </div>
                    <div class="fade-in fade-in-down box"></div>
                </div>
            </div>
            <template v-if="links.next">
                <a @click="loadMore(links.next)" href="#">続きをみる</a>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data({}){
        return{
            table:[],
            posts:[],
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
        loadMore(link){
            // let addPosts = this.$axios.$get(link)
            // console.log(addPosts);
            // this.posts　=　this.posts.concat(addPosts.data)
            this.$axios.$get(link).then( res => {
                console.log(res.data);
                this.posts　=　this.posts.concat(res.data)
            })
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
    }
}
</script>