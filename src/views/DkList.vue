<template>
    <div id="dkList" v-loading.fullscreen.lock="this.$store.state.loading">
        <ul class="nav">
            <li class="item" data-id="sort" data-mulit="0"><span class="nav-val" data-val="智能排序">智能排序</span><i
                    class="el-icon-arrow-down"></i></li>
            <li class="item" data-id="all" data-val="高级筛选">高级筛选<i class="el-icon-arrow-down"></i></li>
        </ul>
        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="busy" infinite-scroll-throttle-delay="1000">
            <li v-for="(item,i) in msg" :key="i" @click="goDkDetails(item._id)">
                <div class="box">
                    <div class="leftbox">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="content">
                        <p v-text="item.name"></p>
                        <p v-text="item.condition"></p>
                        <p>可贷额度: <span>{{item.quota}}</span></p>
                    </div>
                </div>
            </li>
        </ul>
        <div v-text="tip" class="dx">

        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import infiniteScroll from 'vue-infinite-scroll'

    export default {
        name: "DkList",
        data() {
            return {
                msg: [],
                nums: 6,
                pages: 0,
                tip: '',
                busy: false,
                alive:1
            }
        },
        methods: {
            async getList() {
                this.$store.state.loading += 1;
                let data = await axios({
                    method: 'post',
                    url: 'http://106.14.81.245:3000/dklist/dkinit',
                    data: {
                        num: this.nums,
                        page: this.pages
                    }
                });
                this.$store.state.loading -= 1;
                if (data.data == '我是有底线的...') {
                    // console.log(data.data)
                    this.tip = data.data
                    this.busy = true
                } else {
                    data.data.forEach((item) => {
                        this.msg.push(item)
                    })
                    // this.msg = data.data
                    // console.log(this.msg)
                }

            },
            load:function () {
                if(this.alive)
                {
                    this.pages++
                    this.getList()
                }
            },
            goDkDetails(id){
                this.$router.push({
                    path: '/DkDetails',
                    query: {
                        id
                    }
                })
            }
        },
        activated(){
            this.alive=1;
        },
        deactivated() {
           this.alive=0;
        },
        directives: {infiniteScroll},


    }
</script>

<style lang="scss" scoped>
    #dkList {
        .nav {
            /*display: table;*/
            display: flex;
            color: #999;
            position: fixed;
            top: 0.43rem  /* 43/100 */;
            left: 0;
            width: 100%;
            li {
                height: 0.44rem  /* 44/100 */;
                width: 50%;
                background: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.14rem  /* 14/100 */;
            }
            & > li:nth-of-type(1) {
                border-right: 0.01rem  /* 1/100 */ solid #999;
            }
        }
        .list {
            margin-top: 0.55rem  /* 55/100 */;
            li {
                display: flex;
                justify-content: center;
                margin: 0.1rem  /* 10/100 */;
                .box {
                    width: 98%;
                    background: #fff;
                    height: 0.96rem  /* 96/100 */;
                    border-radius: 0.1rem  /* 10/100 */;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    padding: 0 0.1rem  /* 10/100 */;
                    background-image: url(../../public/img/zjt.png);
                    background-size: 5%;
                    background-repeat: no-repeat;
                    background-position: 97% center;
                    .leftbox {
                        width: 0.66rem  /* 66/100 */;
                        height: 0.66rem  /* 66/100 */;
                        margin-right: 0.1rem  /* 10/100 */;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .content {
                        text-align: left;
                        font-size: 0.12rem  /* 12/100 */;
                        p:nth-of-type(1) {
                            font-size: 0.16rem  /* 16/100 */;
                            font-weight: bold;
                        }
                        span {
                            color: red;
                        }
                    }
                }
            }
        }
        .dx {
            margin: 0.2rem  /* 20/100 */ 0;
            font-size: 0.12rem  /* 12/100 */;
        }
    }
</style>