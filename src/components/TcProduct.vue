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
                    url: 'http://106.14.81.245:3000/dklist/dkinit',
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
        margin-bottom: 0.12rem  /* 12/100 */;
        .title {
            padding-bottom: 0.2rem  /* 20/100 */;
            color: #212121;
            font-size: 1.1rem;
            width: 94%;
            margin: 0 auto;
            margin-bottom: 0.12rem  /* 12/100 */;
        }
        & > .title {
            padding-top: 0.1rem  /* 10/100 */;
            padding-bottom: 0.1rem  /* 10/100 */;
            width: 94%;
            margin: 0 auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            font-size: 0.16rem;
        }
        .icon-title {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100%;
        }
        .icon {
            width: 1.2em;
            height: 1.2em;
            margin-right: 0.1rem  /* 10/100 */;
        }
        li {
            width: 94%;
            border-radius: 0.05rem  /* 5/100 */;
            margin: 0 auto;
            box-shadow: 0 0.02rem  /* 2/100 */ 0.05rem  /* 5/100 */ rgba(27, 110, 245, 0.1);
            margin-bottom: 0.1rem  /* 10/100 */;
            a {
                background: #fff;
                border-radius: 0.1rem  /* 10/100 */;
                display: flex;
                align-items: center;
                padding: 0.1rem  /* 10/100 */;
                text-align: left;
                color: black;
                .left {
                    width: 0.66rem  /* 66/100 */;
                    height: 0.66rem  /* 66/100 */;
                    margin-right: 0.15rem  /* 15/100 */;
                }
                .desc {
                    font-weight: bold;
                    font-size: 0.12rem  /* 12/100 */;
                    color: #888;
                    margin: 0.05rem  /* 5/100 */ 0;
                }
                .label {
                    font-size: 0.12rem  /* 12/100 */;
                    .quota {
                        color: red;
                    }
                }
            }

        }
    }
</style>