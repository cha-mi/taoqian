<template>
    <div class="news" v-loading.fullscreen.lock="this.$store.state.loading">
        <div class="newsNav">
            <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
                <el-menu-item index="1">贷款攻略</el-menu-item>
                <el-menu-item index="2">本地专栏</el-menu-item>
                <el-menu-item index="3">活动福利</el-menu-item>
            </el-menu>
        </div>
        <ul class="newList" v-infinite-scroll="load" infinite-scroll-disabled="busy"
            infinite-scroll-throttle-delay="1000">
            <li v-for="(item,i) in msg" :key="i" @click="goDetails(item.content)">
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

    import qs from 'qs'

    export default {
        name: "Find",
        data() {
            return {
                activeIndex: '1',
                msg: [],
                busy: false,
                type: ['财经', '科技', '股票'],
                page: 1,
                resType: ''
            }
        },
        methods: {
            handleSelect(key) {
                // this.getList(6,key)
                this.msg=[]
                this.resType = this.type[key - 1]
                this.getAllNewsList(this.resType, 8, this.page)
            },
            async getAllNewsList(channel, num, start) {
                let obj = {
                    appkey: '4840ac287b262400',
                    channel,
                    num,
                    start
                }
                let str = qs.stringify(obj);
                this.$store.state.loading++
                let data = await axios({
                    method: 'post',
                    url: 'http://106.14.81.245:3000/news/sec',
                    data: str
                });
                this.$store.state.loading--
                // data.data.data.forEach((item)=>{
                //     this.msg.push(item)
                // })
                let test = JSON.parse(data.data).result.list
                test.forEach((item => {
                    this.msg.push(item)
                }))
            },
            load() {
                this.page++
                this.getAllNewsList(this.resType, 8, this.page)
            },
            goDetails(url) {
                this.$router.push({
                    path: '/newsdetails',
                    query: {
                        id: url
                    }
                })
            }
        }
        ,
        directives: {
            infiniteScroll
        }
        ,
    }
</script>

<style lang="scss" scoped>
    .news {
        overflow: hidden;
        .newsNav {
            position: fixed;
            width: 100%;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    height: 0.5rem /* 50/100 */
                ;
                    line-height: 0.5rem /* 50/100 */
                ;
                }
            }
        }
        .newList {
            margin-top: 0.5rem /* 50/100 */
        ;
            background: #fff;
            li {
                margin-bottom: 0.05rem /* 5/100 */
            ;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.1rem /* 10/100 */
            ;
                .imgBox {
                    width: 1rem /* 100/100 */
                ;
                    height: 0.72rem /* 72/100 */
                ;
                    margin-right: 0.08rem /* 8/100 */
                ;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .content {
                    height: 0.72rem /* 72/100 */
                ;
                    width: 2.5rem /* 250/100 */
                ;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .title {
                        font-size: 0.14rem /* 14/100 */
                    ;
                    }
                    .other {
                        font-size: 0.12rem /* 12/100 */
                    ;
                        color: #888;
                    }
                }
            }
        }
    }
</style>