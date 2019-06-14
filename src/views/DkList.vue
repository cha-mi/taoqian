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
                    url: 'http://localhost:3000/dklist/init',
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
            top: 43px;
            left: 0;
            width: 100%;
            li {
                height: 44px;
                width: 50%;
                background: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
            }
            & > li:nth-of-type(1) {
                border-right: 1px solid #999;
            }
        }
        .list {
            margin-top: 55px;
            li {
                display: flex;
                justify-content: center;
                margin: 10px;
                .box {
                    width: 98%;
                    background: #fff;
                    height: 96px;
                    border-radius: 10px;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    padding: 0 10px;
                    background-image: url(../../public/img/zjt.png);
                    background-size: 5%;
                    background-repeat: no-repeat;
                    background-position: 97% center;
                    .leftbox {
                        width: 66px;
                        height: 66px;
                        margin-right: 10px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .content {
                        text-align: left;
                        font-size: 12px;
                        p:nth-of-type(1) {
                            font-size: 16px;
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
            margin: 20px 0;
            font-size: 12px;
        }
    }
</style>