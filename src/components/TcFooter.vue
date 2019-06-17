<template>
    <footer>
        <div v-for="(item,i) in tab" :key="i" @click="toggleTab(i)" :class="{active:$route.name==item.url}">
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
                ],
                index:0
            }
        },
        methods:{
            toggleTab(index){
                // console.log(event.currentTarget)
                this.$router.push({
                    name: this.tab[index].url
                })
                this.index=index
                this.$store.state.headerShow=this.tab[index].title
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        display: flex;
        justify-content: space-between;
        height: 0.48rem  /* 48/100 */;
        background: white;
        div {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            i {
                display: inline-block;
                width: 0.25rem  /* 25/100 */;
                height: 0.25rem  /* 25/100 */;
                font-size: 0.25rem  /* 25/100 */;
            }
            span {
                font-size: 0.12rem  /* 12/100 */;
            }
        }
        .active{
            color: #007aff;
        }
    }
</style>