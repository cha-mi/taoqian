<template>
    <div class="daytop tcNewsBanner swiper-container">
        <ul class="news swiper-wrapper">
            <li v-for="(item,i) in news" :key="i" class="swiper-slide">
                <p v-text="item.title"></p>
                <p v-text="item.con"></p>
            </li>
        </ul>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "TcNewsBanner",
        data() {
            return {
                news: [
                    {
                        title: '用户李女士 申请速借侠',
                        con: '通过今日白条申请3000元，1小时下款'
                    }, {
                        title: '用户刘先生 申请熊花花',
                        con: '通过今日白条申请5000元，1小时下款'
                    },
                    {
                        title: '用户李女士 申请速借侠',
                        con: '通过闪电借款申请3000元，5分钟成功放款'
                    }]
            }
        },
        mounted(){
            new Swiper('.tcNewsBanner', {
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                loop: true,
                direction:'vertical'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .daytop {
        margin-top: 0.15rem  /* 15/100 */;
        height: 0.52rem  /* 52/100 */;
        background: url(../../public/img/banner/kb.png) left 0.2rem  /* 20/100 */ center no-repeat white;
        background-size: 0.3rem  /* 30/100 */;

        .news {
            width: 80%;
            float: right;
            text-align: left;
            font-size: 0.12rem  /* 12/100 */;
            li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                p:nth-of-type(1){
                    color: gray;
                }
            }

        }
    }
</style>