<template>
  <div>
    <Tabs type="card" closable >
      <Tab-pane label="首页" icon="ios-list-outline">
        <vas_list></vas_list>
      </Tab-pane>
      <Tab-pane label="test" icon="ios-list-outline">
        <test></test>
      </Tab-pane>
      <Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">
        标签{{ tab }} , {{ options }}
        <router-view></router-view>
      </Tab-pane>
      <Tab-pane label="服务详情" icon="ios-list-outline">
        <vas></vas>
      </Tab-pane>
      <Tab-pane label="标签三" v-if="true">
        <dragImage></dragImage>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>

  import vas_list from '../goods/vasList.vue'
  import vas from '../goods/vas.vue'
  import dragImage from '../../components/dragImage.vue'
  import upload from '../../components/upload.vue'
  import test from '../test.vue'

  export default {
    data () {
      return {
        tabs: ['r','e','w']
      }
    },
    components: {
      'vas_list': vas_list,
      'vas': vas,
      'dragImage': dragImage,
      'upload': upload,
      'test': test
    },
    computed: {
      options(){
        return this.$store.state.options;
      }
    },
//    props:['tabs'],
    created: function () {
//      console.log(this.tabs);
//      console.log(this.tabName);
//      this.tabs.push(this.tabName);
//      console.log(this.tabs);
//      console.log(this.$parent);
//      console.log(this.$router.params);

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
