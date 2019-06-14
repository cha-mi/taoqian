<template>
    <iframe :src="url"></iframe>
</template>

<script>
    export default {
        name: "NewsDetails",
        data(){
            return{
                url:this.$route.query.id
            }
        }
    }
</script>

<style lang="scss" scoped>
    iframe{
        width: 100%;
        height: 100%;
        border: 0;
        scrolling : no
    }
</style>