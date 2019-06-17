<template>
    <header class="top-header">
        <div class="search mui-search" v-if="$route.name==url[0]">
            <i class="el-icon-search"></i><input type="text" placeholder="请输入搜索内容" v-model="msg">
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[1]" style="background: transparent;">
            <i class="el-icon-arrow-left back" @click="goBack"></i>贷款产品
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[2]" style="background: transparent;">
            <i class="el-icon-arrow-left back" @click="goBack"></i>发现
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[3]" style="background: transparent;">
            <i class="el-icon-arrow-left back" @click="goBack"></i>我的
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[4]" style="background: transparent;">
            <i class="el-icon-arrow-left back" @click="goBack"></i>
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[5]" style="background: transparent;">
            <i class="el-icon-arrow-left back" @click="goBack"></i>
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[6]" style="background: transparent;">
            登录
        </div>
        <div class="search mui-search others" v-else-if="$route.name==url[7]" style="background: transparent;">
            注册
        </div>
        <ul class="headList" v-if="$route.name==url[0]" v-show="bool">
            <li v-for="(item,i) in arr" v-text="item.name" :key="i" @click="goDetails(item._id)"></li>
        </ul>
    </header>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "TcHeader",
        data() {
            return {
                url: ['home', 'list', 'find', 'my', 'newsdetails', 'dkdetails', 'tclogin', 'tcregister'],
                msg: '',
                arr: [],
                bool:true
            }
        },
        watch: {
            msg(a) {
                if(a){
                    (async()=> {
                        this.bool=true
                        let data = await axios({
                            method: 'post',
                            url: 'http://106.14.81.245:3000/dklist/dkinit',
                            data: {
                                name: a
                            }
                        })
                        this.arr = data.data
                    })()
                }else {
                    this.bool=false
                }

            }
        },
        methods: {
            goBack() {
                this.$router.back(-1)
                // console.log(1111)
            },


            goDetails(id) {
                this.$router.push({
                    path: '/DkDetails',
                    query: {
                        id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        height: 0.44rem /* 44/100 */
    ;
        color: #fff;
        border-bottom: 0;
        background-color: rgb(26, 108, 240);
        background-repeat: no-repeat;
        background-position-y: 0;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
        .search {
            height: 0.28rem /* 28/100 */
        ;
            width: 80%;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 0.14rem /* 14/100 */
        ;
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
        .others {
            justify-content: space-between;
        }
        .headList {
            position: absolute;
            top: 0.44rem /* 50/100 */
        ;
            left: 0;
            background: rgb(26, 108, 240);
            z-index: 10;
            width: 80%;
            margin-left: 10%;
            color: #fff;
            text-align: left;
            border-radius: 0 0 10px 10px;
            max-height: 1.2rem;
            overflow-y: auto;
            overflow-x: hidden;
            & > li:last-of-type {
                border: 0;
            }
            li {
                border-bottom: 0.01rem /* 1/100 */
                solid #fff;
                padding: 0.1rem /* 10/100 */
            ;
                font-size: 0.12rem /* 12/100 */
            ;
            }
        }
    }
</style>