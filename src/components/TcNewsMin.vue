<template>
    <div class="news">
        <div class="newsHead">
            <span>金融新闻</span>
            <i class="el-icon-d-arrow-right"></i>
        </div>
        <ul class="newList">
            <li v-for="(item,i) in msg[0]" :key="i" @click="goDetails(item.url)">
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
                    url: 'http://localhost:3000/news/init',
                    data: {
                        channel:'财经',
                        page:'4',
                        pageSize:'5'
                    }
                });
                this.msg.push(data.data.data)
                console.log(this.msg)
            },
            goDetails(url){
                this.$router.push({
                    path: '/newsdetails',
                    query: {
                        id: url
                    }
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
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    .newList {
        background: #fff;
        li {
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            .imgBox {
                width: 100px;
                height: 72px;
                margin-right: 8px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                height: 72px;
                width: 250px;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title {
                    font-size: 14px;
                }
                .other {
                    font-size: 12px;
                    color: #888;
                }
            }
        }
    }

</style>