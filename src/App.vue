<template>
  <div id="app">
    <router-view name="head"></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
//  import menu from '@/views/layout/main.vue'
  export default {
    name: 'app',
    components: {
//      menu
    }
  }
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100%;
}
</style>
