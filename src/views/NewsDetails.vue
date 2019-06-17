<template>
    <div v-html="url" class="main"></div>
</template>

<script>
    export default {
        name: "NewsDetails",
        data() {
            return {
                url: this.$route.query.id
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*iframe{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*border: 0;*/
    /*scrolling : no*/
    /*}*/
    .main {
        text-align: left;
        padding: 10px;
        >>> p {
        background: #000;
    }
    }
</style>