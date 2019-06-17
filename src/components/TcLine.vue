<template>
    <div class="title"><span>{{this.con}}</span></div>
</template>

<script>
    export default {
        name: "TcLine",
        props:['con']
    }
</script>

<style lang="scss" scoped>
    .title {
        color: #999;
        text-align: center;
        padding: 0 0.1rem  /* 10/100 */ 0.1rem  /* 10/100 */ 0.1rem  /* 10/100 */;
        position: relative;
        span {
            letter-spacing: 0.01rem  /* 1/100 */;
            font-size: .12rem;
            background-color: #EFEFF4;
            padding: 0 0.2rem  /* 20/100 */;
            position: relative;
            z-index: 1;
            display: inline-block;
        }
        &::after{
            content: '';
            display: block;
            position: absolute;
            top: 0.12rem  /* 12/100 */;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 19rem;
            border-top: 0.01rem  /* 1/100 */ solid #a1afb4;
        }
    }
</style>