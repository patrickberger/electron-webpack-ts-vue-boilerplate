<template>
    <div id="app">
        <landing-page></landing-page>
    </div>
</template>

<script type="ts">

  import Vue from 'vue';
  import LandingPage from '@/components/LandingPage';

  export default Vue.extend({
      components: { LandingPage }
  });

</script>