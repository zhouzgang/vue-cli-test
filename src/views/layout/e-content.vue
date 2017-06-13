<template>
  <div>
    <Tabs type="card" closable >
      <!--<Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">-->
        <!--标签{{ tab }}-->
        <!--<router-view name=""></router-view>-->
      <!--</Tab-pane>-->
      <Tab-pane label="服务列表" icon="ios-list-outline">
        <vas_list></vas_list>
      </Tab-pane>
      <Tab-pane label="标签二" v-if="true">标签二的内容</Tab-pane>
      <Tab-pane label="标签三" v-if="true">标签三的内容</Tab-pane>
    </Tabs>
  </div>
</template>
<script>

  import vas_list from '../goods/vasList.vue'

  export default {
    data () {
      return {
        tabs: []
      }
    },
    components: {
      'vas_list': vas_list,
    },
//    props:['tabName'],
    created: function () {
//      console.log(123);
//      console.log(this.tabName);
//      this.tabs.push(this.tabName);
      console.log(this.tabs);
      console.log(this);
      console.log(this.$router.params);

    },
    methods: {
//      handleTabRemove (name) {
//        this['tab' + name] = false;
//      },
//      handleTabsAdd () {
//        this.tabs ++;
//      }
    }
  }
</script>


<style>

</style>
