<template>
    <div class="news">
        <div class="newsHead" @click="goFind">
            <span>金融新闻</span>
            <i class="el-icon-d-arrow-right"></i>
        </div>
        <ul class="newList">
            <li v-for="(item,i) in msg" :key="i" @click="goDetails(item.url)">
                <div class="imgBox">
                    <img :src="item.pic" alt="">
                </div>
                <div class="content">
                    <p class="title" v-text="item.title"></p>
                    <p class="other">
                        <span class="time" v-text="item.time"></span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "TcNewsMin",
        data(){
            return{
                msg:[]
            }
        },
        methods:{
            async getNewsList() {
                let data = await axios({
                    method: 'post',
                    url: 'http://106.14.81.245:3000/news/sec',
                    data: {
                        appkey: '4840ac287b262400',
                        channel:'财经',
                        num:'4',
                        start:'1'
                    }
                });
                this.msg=JSON.parse(data.data).result.list
            },
            goDetails(url){
                this.$router.push({
                    path: '/newsdetails',
                    query: {
                        id: url
                    }
                })
            },
            goFind(){
                this.$router.push({
                    path:'/find'
                })
            }
        },
        mounted(){
            this.getNewsList()
        }
    }
</script>

<style lang="scss" scoped>
    .newsHead {
        height: 0.4rem  /* 40/100 */;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        padding: 0.1rem  /* 10/100 */;
        border-bottom: 0.01rem  /* 1/100 */ solid #eee;
    }

    .newList {
        background: #fff;
        li {
            margin-bottom: 0.05rem  /* 5/100 */;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.1rem  /* 10/100 */;
            .imgBox {
                width: 1rem  /* 100/100 */;
                height: 0.72rem  /* 72/100 */;
                margin-right: 0.08rem  /* 8/100 */;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                height: 0.72rem  /* 72/100 */;
                width: 2.5rem  /* 250/100 */;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title {
                    font-size: 0.14rem  /* 14/100 */;
                }
                .other {
                    font-size: 0.12rem  /* 12/100 */;
                    color: #888;
                }
            }
        }
    }

</style>