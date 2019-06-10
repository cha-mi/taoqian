<template>
    <div class="home">
            <tc-banner></tc-banner>
            <tc-line con="精选专题"></tc-line>
            <tc-recommend></tc-recommend>
            <tc-news-banner></tc-news-banner>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import '//at.alicdn.com/t/font_1233661_2xnhtarcqyh.js';
    import TcHeader from "../components/TcHeader"
    import TcBanner from "../components/TcBanner"
    import TcLine from "../components/TcLine"
    import TcRecommend from "../components/TcRecommend"
    import TcNewsBanner from "../components/TcNewsBanner"

    export default {
        name: 'home',
        components: {
            TcNewsBanner,
            TcRecommend,
            TcLine,
            TcBanner,
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
