<template>
    <div class="my">
        <div>我的</div>
        <el-button type="primary" round @click="outlogin"  :plain="true">退出登录</el-button>
    </div>
</template>

<script>
    // import Cookies from 'js-cookie'
    export default {
        name: "My",
        data(){
            return{

            }
        },
        mounted(){
        },
        methods:{
            outlogin(){
                // Cookies.remove('username')
                window.sessionStorage.removeItem('userKey')
                this.$router.push({
                    path:'/tclogin'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>