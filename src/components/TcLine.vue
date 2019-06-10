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
        padding: 0 10px 10px 10px;
        position: relative;
        span {
            letter-spacing: 1px;
            font-size: .8rem;
            background-color: #EFEFF4;
            padding: 0 20px;
            position: relative;
            z-index: 1;
            display: inline-block;
        }
        &::after{
            content: '';
            display: block;
            position: absolute;
            top: 12px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 19rem;
            border-top: 1px solid #a1afb4;
        }
    }
</style>