<template>
    <div class="m-auto">{{ title }}</div>
</template>

<script>

    export default {
        data () {
            return {
                title: 'Welcome to the electron-webpack-vue-boilerplate.'
            }
        }
    }

</script>

<style lang="less" scoped>

    /* General styles. */
    .ml-auto { margin-left: auto; }
    .mr-auto { margin-right: auto; }
    .m-auto {
        .ml-auto();
        .mr-auto();
    }

</style>