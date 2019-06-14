<template>
    <div class="news">
        <div class="newsNav">
            <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
                <el-menu-item index="1">贷款攻略</el-menu-item>
                <el-menu-item index="2">本地专栏</el-menu-item>
                <el-menu-item index="3">活动福利</el-menu-item>
            </el-menu>
        </div>
        <ul class="newList"  v-infinite-scroll="load" infinite-scroll-disabled="busy" infinite-scroll-throttle-delay="1000">
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
        <div class="line"></div>
    </div>

</template>

<script>
    import axios from 'axios'
    import infiniteScroll from 'vue-infinite-scroll'

    export default {
        name: "Find",
        data() {
            return {
                activeIndex: '1',
                msg: [],
                busy:false,
            }
        },
        methods: {
            handleSelect(key) {
                // this.getList(6,key)
                console.log(key)
                if (key == 1) {
                    this.getAllNewsList('财经', 4, 8)
                } else if (key == 2) {
                    this.getAllNewsList('科技', 4, 8)
                } else if (key == 3) {
                    this.getAllNewsList('股票', 4, 8)
                }
            },
            async getAllNewsList(channel, page, pageSize) {
                let data = await axios({
                    method: 'post',
                    url: 'http://localhost:3000/news/init',
                    data: {
                        channel,
                        page,
                        pageSize
                    }
                });
                // data.data.data.forEach((item)=>{
                //     this.msg.push(item)
                // })
                this.msg=data.data.data
                console.log(this.msg)
            },
            load(){
                console.log(`666`)
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
        mounted() {
            this.getAllNewsList('财经', 4, 8)
        },
        directives:{infiniteScroll},
    }
</script>

<style lang="scss" scoped>
    .news {
        overflow: hidden;
        .newsNav {
            position: fixed;
            width: 100%;
            /*margin-top: 40px;*/
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    height: 50px;
                    line-height: 50px;
                }
            }
        }
        .newList {
            margin-top: 50px;
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
    }
</style>