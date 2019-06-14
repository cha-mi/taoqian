<template>
    <div class="home">
        <tc-banner></tc-banner>
        <tc-line con="精选专题"></tc-line>
        <tc-recommend></tc-recommend>
        <tc-news-banner></tc-news-banner>
        <tc-product v-for="(item,i) in title" :title="item" :key="i"></tc-product>
        <tc-news-min></tc-news-min>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import '//at.alicdn.com/t/font_1233661_2xnhtarcqyh.js';
    import TcBanner from "../components/TcBanner"
    import TcLine from "../components/TcLine"
    import TcRecommend from "../components/TcRecommend"
    import TcNewsBanner from "../components/TcNewsBanner"
    import TcProduct from "../components/TcProduct"
    import TcNewsMin from "../components/TcNewsMin"

    export default {
        name: 'home',
        components: {
            TcNewsMin,
            TcProduct,
            TcNewsBanner,
            TcRecommend,
            TcLine,
            TcBanner,
        },
        data(){
            return{
                title:[
                    {
                      msg: '今日热门' ,
                        img:"url('https://img.taoqian123.com/product/20170815/1502761442599251e2345d5.png')",
                        index:0
                    },
                    {
                      msg: '新品上线' ,
                        img:"url('https://img.taoqian123.com/product/20170815/1502761430599251d67c77f.png')",
                        index:1
                    },
                    {
                      msg: '今日优选' ,
                        img:"url('https://img.taoqian123.com/product/20180810/15338814805b6d2c883620b.png')",
                        index:2
                    },
                    {
                      msg: '为你推荐' ,
                        img:"url('https://m.taoqian123.com/build/images/v5_1_3/icon_recommend_default@3x.png')",
                        index:3
                    },

                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: space-between;*/
        /*main {*/
        /*flex: 1;*/
        /*overflow-x: hidden;*/
        /*overflow-y: auto;*/
        /*position: relative;*/
        /*}*/
    }
</style>
