<template>
  <div class="wapper col-md-6">
    <div class="border mt-5 p-4 bg-light">
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1">メールアドレス</label>
                <input v-model.trim="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">パスワード</label>
                <input v-model.trim="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <small class="d-block text-center">新規登録は<nuxt-link to="/register">こちら</nuxt-link></small>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        async login(){
            await this.$axios.$post('/user/login',{
                email:this.form.email,
                password:this.form.password
            }).then(res => {
                this.$store.commit('setToken',{ token: res.access_token })
                this.$store.commit('setUser',{ user: res.user })
                this.$router.push('/')
            }).catch(err=>{
                console.log(err.response);
            });
        } 
    }
}
</script>
