<template>
    <div class="dkDetails">

        <div class="box4 monitor" monitor_info="立即申请box">
            <div class="info">
                <div class="left">
                    <img :src="details.img" class="logo left"
                         style="display: inline;">
                </div>
                <div class="content">
                    <p class="name"><span v-text="details.name"></span><span class="icon"></span></p>
                    <p class="desc"><span>申请人数:&nbsp;&nbsp;</span><span v-text="details.people"></span>人 </p>
                    <p class="label">可贷额度:&nbsp;&nbsp;<span class="quota" v-text="details.quota"></span></p>
                </div>
            </div>
            <div class="infoBox">
                <div>借款期限:&nbsp;&nbsp;<span class="orange" v-text="details.qxtime"></span></div>
                <div>平均办理时间:&nbsp;&nbsp;<span class="orange" v-text="details.bltime"></span></div>
            </div>
            <div class="tip" v-text="details.condition"></div>
            <a class="apply_btn call-btn" href="javascript:;" rel="nofollow" title="立即申请" :plain="true"
               @click="clickSq" data-count-json="{product_id:'2564',product_name:'钱站',name:'立即申请'}">立即申请</a>

        </div>

        <div id="requirement" class="box3 border-t-b nav_div" monitor_info="申请要求">
            <div class="title">
                <span class="title_icon"></span>
                <span>申请要求</span>
            </div>
            <div class="content">
                <table>
                    <tbody>
                    <tr class="age">
                        <td><span style="color:#adadad;">年龄要求</span>：</td>
                        <td>
                            22-55岁
                        </td>
                    </tr>
                    <tr class="asset">
                        <td><b>资质要求</b>：</td>
                        <td>
                            <span><i style="background-color: #F6D18E"></i>无要求                            </span></td>
                    </tr>
                    <tr class="status">
                        <td>身份要求：</td>
                        <td>
                            <div class="group">
                                <span><i class="icon-status_0"></i></span>
                                <p style="text-align:left">无要求</p>
                            </div>
                        </td>
                    </tr>
                    <tr class="data">
                        <td>所需材料：</td>
                        <td>
                            <span><i
                                    style="background-color: #E3AA69">1</i>身份证                                </span><span><i
                                style="background-color: #E3AA69">2</i>手机实名制                                </span><span><i
                                style="background-color: #E3AA69">3</i>支付宝                                </span><span><i
                                style="background-color: #E3AA69">4</i>淘宝/京东账号                                </span><span><i
                                style="background-color: #E3AA69">5</i>银行卡                                </span></td>
                    </tr>
                    <tr class="credit">
                        <td><span style="color:#adadad;">信用要求</span>：</td>
                        <td>
                            <span><i></i>无要求</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "DkDetails",
        data() {
            return {
                details: null,
                id: this.$route.query.id
        }
        },
        created() {
            this.getDetails(this.id)
        },
        methods: {
            async getDetails(id) {
                let data = await axios({
                    method: 'post',
                    url: 'http://106.14.81.245:3000/dklist/dkinit',
                    data: {
                        _id: id
                    }
                });
                this.details = data.data[0]
                console.log(this.details)
            },
            clickSq(){
                this.$message('好好学习，别贷款了');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .monitor {
        margin: 0.2rem  /* 20/100 */ auto;
        width: 90%;
        height: 2.2rem  /* 220/100 */;
        background: #ffffff;
        border-radius: 0.1rem  /* 10/100 */;
        box-shadow: 0 0 0.04rem  /* 4/100 */ rgba(27, 110, 245, 0.4);
        padding-top: 0.28rem  /* 28/100 */;
        padding-left: 0.15rem  /* 15/100 */;
        padding-right: 0.15rem  /* 15/100 */;
        position: relative;
        .info {
            display: flex;
            width: 100%;
            justify-content: left;
            overflow: hidden;
            margin-bottom: 0.08rem  /* 8/100 */;
            background-color: #fff;
            background-size: 5%;
            background-repeat: no-repeat;
            background-position: 97% center;
            border-radius: 0.05rem  /* 5/100 */;
            padding-top: 0;
            text-align: left;
            .left {
                width: 0.7rem  /* 70/100 */;
                height: 0.66rem  /* 66/100 */;
                margin-right: 0.15rem  /* 15/100 */;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 0.05rem  /* 5/100 */ 0;
                .desc, .label {
                    font-size: 0.12rem  /* 12/100 */;
                }
                .quota {
                    color: red;
                }
            }
        }
    }

    .infoBox {
        display: flex;
        font-size: 0.14rem  /* 14/100 */;
        justify-content: space-between;
        margin: 0.22rem  /* 22/100 */ 0;
        .orange {
            color: orange;
        }
    }

    .tip {
        height: 0.25rem  /* 25/100 */;
        line-height: 0.25rem  /* 25/100 */;
        font-size: 0.12rem  /* 12/100 */;
        background: #FFF9F0;
        text-align: left;
        color: orange;
    }

    .apply_btn {
        display: block;
        width: 68%;
        color: #fff;
        padding: .1rem 0;
        border-radius: 0.4rem  /* 40/100 */;
        position: absolute;
        bottom: -0.12rem;
        z-index: 99;
        left: 16%;
        box-shadow: 0 0.02rem  /* 2/100 */ 0.04rem  /* 4/100 */ rgba(15, 91, 213, 0.46);
        background-color: #1A6CF0;
    }

    #requirement {
        margin-top: 0.4rem  /* 40/100 */;
        text-align: left;
        .title {
            width: 100%;
            height: 0.4rem  /* 40/100 */;
            line-height: 0.4rem  /* 40/100 */;
            background: #f7f7f7;
        }
        table {
            border-spacing: 0.2rem  /* 20/100 */ 0.15rem  /* 15/100 */;
            max-width: 100%;
            border-collapse: separate;
            font-size: 0.12rem  /* 12/100 */;
            background: #ffffff;
            tr {
                & > td:nth-of-type(1) {
                    width: 0.64rem  /* 64/100 */;
                }
            }
            .data {
                span {
                    margin-right: 0.08rem  /* 8/100 */;
                    i {
                        display: inline-block;
                        width: 0.12rem  /* 12/100 */;
                        height: 0.12rem  /* 12/100 */;
                        border-radius: 50%;
                        text-align: center;
                        margin-right: 0.05rem  /* 5/100 */;
                    }
                }
            }
        }
    }
</style>