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
            <el-input placeholder="请输入密码" v-model="psw" sregisterhow-password></el-input>
        </li>
        <li>
            <el-button type="primary" round @click="register"  :plain="true">注册</el-button>
            <el-button type="primary" round @click="tologin"  :plain="true">去登录</el-button>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "TcRegister",
        data(){
            return{
                user:'',
                psw:''
            }
        },
        methods:{
            async register(){
                this.$store.state.loading+=1
                let data = await axios({
                    method:'post',
                    url:'http://106.14.81.245:3000/lr/register',
                    data:{
                        tel:this.user,
                        username:'taoqianbao',
                        password:this.psw
                    }
                })
                this.$store.state.loading-=1
                if (data.data=='1'){
                    this.$router.push({
                        path:'/tclogin'
                    })
                }else {
                    this.$message('注册失败');
                }
            },
            tologin(){
                this.$router.push({
                    path:'/tclogin'
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