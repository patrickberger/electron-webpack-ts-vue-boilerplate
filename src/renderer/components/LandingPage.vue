<template>
    <div class="m-auto">{{ title }}</div>
</template>

<script lang="ts">

    import Vue from 'vue';
    //import Component from 'vue-class-component';

    export default Vue.extend({
        data () {
            return {
                title: 'Welcome to the electron-webpack-vue-boilerplate.'
            }
        }
    });

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