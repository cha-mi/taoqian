<template>
    <div class="product">
        <h3 class="title">
            <span class="icon icon-title"
                  :style="{backgroundImage:title.img}"></span>{{title.msg}}
        </h3>
        <ul class="list">
            <li data-cid="" v-for="(item,i) in msg[title.index]" :key="i" @click="goDkDetails(item._id)">
                <a class="info  monitor" data-count-json="产品：钱站"
                   onclick="clickEvent(this,'点击_产品')" :title="item.name" data_flag="0">
                    <div class="left">
                        <img class="logo lazy left"
                             data-original="https://img.crm.taoqian123.com/doc/20190327/15536706425c9b21f25999a.jpg"
                             alt="钱站" :src="item.img"
                             style="display: inline;">
                    </div>
                    <div class="content">
                        <p class="name"><span v-text="item.name"></span>
                        </p>
                        <p class="desc" v-text="item.condition"></p>
                        <p class="label">可贷额度:&nbsp;&nbsp;<span class="quota" v-text="item.quota"></span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "TcProduct",
        props: ['title'],
        data() {
            return {
                msg: [],
                test: []
            }
        },
        mounted() {
            for (let i = 1; i < 5; i++) {
                this.getList(5, i)
            }
        },
        methods: {
            async getList(num, page) {
                let data = await axios({
                    method: 'post',
                    url: 'http://localhost:3000/dklist/init',
                    data: {
                        num,
                        page
                    }
                });
                if (data.data === '我是有底线的...') {
                    // console.log(data.data)
                    return 0
                } else {
                    this.test = []
                    data.data.forEach((item) => {
                        this.test.push(item)
                        this.msg.push(this.test)
                    })
                }
                // console.log(this.msg)
            },
            goDkDetails(id){
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
    .product {
        /*background-color: #f1f6f8;*/
        margin-bottom: 12px;
        .title {
            padding-bottom: 20px;
            color: #212121;
            font-size: 1.1rem;
            width: 94%;
            margin: 0 auto;
            margin-bottom: 12px;
        }
        & > .title {
            padding-top: 10px;
            padding-bottom: 10px;
            width: 94%;
            margin: 0 auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
        }
        .icon-title {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100%;
        }
        .icon {
            width: 1.2em;
            height: 1.2em;
            margin-right: 10px;
        }
        li {
            width: 94%;
            border-radius: 5px;
            margin: 0 auto;
            box-shadow: 0 2px 5px rgba(27, 110, 245, 0.1);
            margin-bottom: 10px;
            a {
                background: #fff;
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding: 10px;
                text-align: left;
                color: black;
                .left {
                    width: 66px;
                    height: 66px;
                    margin-right: 15px;
                }
                .desc {
                    font-weight: bold;
                    font-size: 12px;
                    color: #888;
                    margin: 5px 0;
                }
                .label {
                    font-size: 12px;
                    .quota {
                        color: red;
                    }
                }
            }

        }
    }
</style>