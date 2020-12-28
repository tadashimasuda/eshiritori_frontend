<template>
    <div class="wapper">
        <div class="table_show">
            <h3 id="owner_title">このテーブルを始めた人</h3>
            <div class="owner">
                <img :src="tables.owner.img_path" alt="ユーザー画像">
                <h4 class="owner_name">{{tables.owner.name}}</h4>
            </div>
            <div  v-for="post in tables.post" :key="post.id">
                <div id="table_post" class="fade-in fade-in-down">
                    <img :src="post.user.img_path" alt="ユーザー画像" id="table_post_user">
                    <span class="table_user_name">{{post.user.name}}</span>
                    <div id="user_post">
                        <img :src="`https://eshiritori-s3.s3-ap-northeast-1.amazonaws.com/post/${post.img_path}`" alt="投稿画像">
                    </div>
                </div>
                <div class="fade-in fade-in-down box"></div>
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
    async asyncData({route,$axios}){
        const id = route.params.id;
        let { data } = await $axios.$get(`/tables/${id}`);
        return{
            tables:data
        }
    },
    mounted(){
        let fadeInTarget = document.querySelectorAll('.fade-in');
        console.log(fadeInTarget);
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