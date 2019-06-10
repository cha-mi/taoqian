<template>
    <div id="dkList">
        <ul class="nav">
            <li class="item" data-id="sort" data-mulit="0"><span class="nav-val" data-val="智能排序">智能排序</span><i
                    class="el-icon-arrow-down"></i></li>
            <li class="item" data-id="all" data-val="高级筛选">高级筛选<i class="el-icon-arrow-down"></i></li>
        </ul>
        <ul class="list">
            <li v-for="(item,i) in msg" :key="i">
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
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "DkList",
        data(){
          return{
              msg:[],
              nums:6,
              pages:1
          }
        },
        created() {
            this.getList()
        },
        methods: {
            async getList() {
                let data = await axios({
                    method: 'post',
                    url: 'http://localhost:3000/dklist/init',
                    data:{
                        num:this.nums,
                        page:this.pages
                    }
                });
                console.log(data)
                this.msg = data.data
                console.log(this.msg)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #dkList{
        .nav {
            /*display: table;*/
            display: flex;
            color: #999;
            position: fixed;
            top:43px;
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
    }
</style>