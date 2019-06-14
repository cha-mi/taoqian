<template>
    <div class="my">
        <div>我的</div>
        <el-button type="primary" round @click="outlogin"  :plain="true">退出登录</el-button>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        name: "My",
        data(){
            return{

            }
        },
        mounted(){
            console.log(this.$router)

        },
        methods:{
            outlogin(){
                Cookies.remove('username')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>