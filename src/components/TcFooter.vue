<template>
    <footer>
        <div v-for="(item,i) in tab" :key="i" @click="toggleTab(i)">
            <i :class="item.icon"></i>
            <span v-text="item.name"></span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "TcFooter",
        data() {
            return {
                tab: [
                    {
                        name: '首页',
                        icon: 'el-icon-s-home',
                        url: 'home',
                        title:0
                    },{
                        name: '贷款',
                        icon: 'el-icon-s-check',
                        url: 'list',
                        title:1
                    },{
                        name: '发现',
                        icon: 'el-icon-s-opportunity',
                        url: 'find',
                        title:2
                    },{
                        name: '我的',
                        icon: 'el-icon-user-solid',
                        url: 'my',
                        title:3
                    }
                ]
            }
        },
        methods:{
            toggleTab(index){
                this.$router.push({
                    name: this.tab[index].url
                })
                this.$store.state.headerShow=this.tab[index].title
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        display: flex;
        justify-content: space-between;
        height: 48px;
        background: white;
        div {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            i {
                display: inline-block;
                width: 25px;
                height: 25px;
                font-size: 25px;
            }
            span {
                font-size: 12px;
            }
        }
    }
</style>