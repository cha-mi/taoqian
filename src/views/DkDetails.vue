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
                    url: 'http://localhost:3000/dklist/init',
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
        margin: 20px auto;
        width: 90%;
        height: 220px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 4px rgba(27, 110, 245, 0.4);
        padding-top: 28px;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        .info {
            display: flex;
            width: 100%;
            justify-content: left;
            overflow: hidden;
            margin-bottom: 8px;
            background-color: #fff;
            background-size: 5%;
            background-repeat: no-repeat;
            background-position: 97% center;
            border-radius: 5px;
            padding-top: 0;
            text-align: left;
            .left {
                width: 70px;
                height: 66px;
                margin-right: 15px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 5px 0;
                .desc, .label {
                    font-size: 12px;
                }
                .quota {
                    color: red;
                }
            }
        }
    }

    .infoBox {
        display: flex;
        font-size: 14px;
        justify-content: space-between;
        margin: 22px 0;
        .orange {
            color: orange;
        }
    }

    .tip {
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        background: #FFF9F0;
        text-align: left;
        color: orange;
    }

    .apply_btn {
        display: block;
        width: 68%;
        color: #fff;
        padding: .6rem 0;
        border-radius: 40px;
        position: absolute;
        bottom: -1rem;
        z-index: 99;
        left: 16%;
        box-shadow: 0 2px 4px rgba(15, 91, 213, 0.46);
        background-color: #1A6CF0;
    }

    #requirement {
        margin-top: 40px;
        text-align: left;
        .title {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #f7f7f7;
        }
        table {
            border-spacing: 20px 15px;
            max-width: 100%;
            border-collapse: separate;
            font-size: 12px;
            background: #ffffff;
            tr {
                & > td:nth-of-type(1) {
                    width: 64px;
                }
            }
            .data {
                span {
                    margin-right: 8px;
                    i {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        text-align: center;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
</style>