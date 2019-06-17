<template>
    <ul class="loginList" v-loading.fullscreen.lock="this.$store.state.loading">
        <li>
            <el-input
                    placeholder="请输入内容"
                    v-model="user"
                    clearable>
            </el-input>

        </li>
        <li>
            <el-input placeholder="请输入密码" v-model="psw" show-password></el-input>
        </li>
        <li>
            <el-button type="primary" round @click="login"  :plain="true">登录</el-button>
            <el-button type="primary" round @click="toregister"  :plain="true">去注册</el-button>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'
    // import Cookies from 'js-cookie'
    export default {
        name: "TcLogin",
        data(){
            return{
                user:'',
                psw:''
            }
        },
        methods:{
            async login(){
                this.$store.state.loading+=1
                  let data = await axios({
                      method:'post',
                      url:'http://106.14.81.245:3000/lr/login',
                      data:{
                          tel:this.user,
                          password:this.psw
                      }
                  })
                this.$store.state.loading-=1
                if (data.data===1){
                    window.sessionStorage.setItem('userKey', this.user);
                    // Cookies.set('username',this.user)
                    this.$router.push({
                        path:'/my'
                    })
                }else {
                    this.$message('用户名或密码错误');
                }
            },
            toregister(){
                this.$router.push({
                    path:'/tcregister'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loginList{
        padding: 0.1rem  /* 10/100 */;
        li{
            margin-top: 0.15rem  /* 15/100 */;
        }
    }
</style>