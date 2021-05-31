<template>
  <div class="wapper col-md-6">
    <div class="border mt-5 p-4 bg-light">
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="exampleInputEmail1">ユーザ名</label>
                <input v-model="form.name" type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">メールアドレス</label>
                <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">パスワード</label>
                <input v-model="form.password" type="password"  class="form-control" id="exampleInputPassword1" placeholder="Password">
                <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">パスワード（確認用）</label>
                <input v-model="form.password_confirmation" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit"  class="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                name:"",
                email:"",
                password:"",
                password_confirmation:''
            }
        }
    },
    methods:{
        async register(){
            await this.$axios.$post('/user',{
                    name:this.form.name,
                    email:this.form.email,
                    password:this.form.password,
                    password_confirmation:this.form.password_confirmation
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