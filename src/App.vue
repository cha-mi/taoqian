<template>
    <div id="app">
        <tc-header></tc-header>
        <main>
            <router-view/>
        </main>
        <tc-footer></tc-footer>
    </div>
</template>
<script>
    import TcFooter from "./components/TcFooter"
    import TcHeader from "./components/TcHeader"

    export default {
        name: 'app',
        components: {
            TcHeader,
            TcFooter
        }
    }
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        background: #EFEFF4;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        main {
            flex: 1;
            overflow-x: hidden;
            overflow-y: auto;
            position: relative;
        }

    }
</style>
