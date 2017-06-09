<template>
  <Tabs type="card" closable @on-tab-remove="handleTabRemove">
    <!--<Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">-->
      <!--标签{{ tab }}-->
      <!--<router-view name=""></router-view>-->
    <!--</Tab-pane>-->
    <Tab-pane label="标签一" v-if="tab0">
      <router-view></router-view>
      <!--标签一的内容-->
    </Tab-pane>
    <!--<Tab-pane label="标签二" v-if="tab1">标签二的内容</Tab-pane>-->
    <!--<Tab-pane label="标签三" v-if="tab2">标签三的内容</Tab-pane>-->
  </Tabs>
</template>
<script>
  export default {
    data () {
      return {
        tab0: true,
        tabs: 2
      }
    },
//    props:[tabName],
    created: function () {
      console.log("fsaf");
      console.log(this);
    },
    methods: {
      handleTabRemove (name) {
        this['tab' + name] = false;
      },
      handleTabsAdd () {
        this.tabs ++;
      }
    }
  }
</script>


<style>

</style>
