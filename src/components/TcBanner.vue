<template>
    <div class="tcBanner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../public/img/banner/banner01.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../../public/img/banner/banner02.png" alt=""></div>
            <div class="swiper-slide"><img src="../../public/img/banner/banner03.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: 'TcBanner',
        mounted() {
            new Swiper('.tcBanner', {
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                loop: true,
                effect : 'fade'
            })
        }
    }
</script>

<style lang="scss" scoped>
 .swiper-container{
     height: 2rem  /* 200/100 */;
     img{
         width: 100%;
         height: 100%;
     }
 }
</style>