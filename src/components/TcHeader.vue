<template>
    <header class="top-header">
        <div class="search mui-search" v-if="this.$store.state.headerShow===0">
            <i class="el-icon-search"></i><input type="text" placeholder="请输入搜索内容">
        </div>
        <div class="search mui-search" v-if="this.$store.state.headerShow===1" style="background: transparent;">
            贷款产品
        </div>
        <div class="search mui-search" v-if="this.$store.state.headerShow===2" style="background: transparent;">
            发现
        </div>
        <div class="search mui-search" v-if="this.$store.state.headerShow===3" style="background: transparent;">
            我的
        </div>
    </header>
</template>

<script>

    export default {
        name: "TcHeader",
        created(){
            console.log(this.$store.state.headerShow)
        },
    }
</script>

<style lang="scss" scoped>
    header {
        height: 44px;
        color: #fff;
        border-bottom: 0;
        background-color: rgb(26, 108, 240);
        background-repeat: no-repeat;
        background-position-y: 0;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
        .search {
            height: 28px;
            width: 80%;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            input {
                text-align: center;
                background: transparent;
                height: 100%;
                width: 90%;
                color: white;
                border: 0;
                margin-bottom: 0;
                &::-webkit-input-placeholder {
                    color: white;
                }
            }
        }
    }
</style>