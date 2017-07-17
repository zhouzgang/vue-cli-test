<template>
  <div>
    <Tabs type="card" closable :value="tabValue" @on-click="tabClick"	@on-tab-remove="tabRemove">
      <!--<Tab-pane label="首页" icon="ios-list-outline">-->
        <!--<vas_list></vas_list>-->
      <!--</Tab-pane>-->
      <!--<Tab-pane label="test" icon="ios-list-outline">-->
        <!--<test></test>-->
      <!--</Tab-pane>-->
      <Tab-pane v-for="tab in tabs" :name="tab.name" :label="tab.obj.title">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </Tab-pane>
      <!--<Tab-pane label="服务详情" icon="ios-list-outline">-->
        <!--<vas></vas>-->
      <!--</Tab-pane>-->
      <!--<Tab-pane label="标签三" v-if="true">-->
        <!--<dragImage></dragImage>-->
      <!--</Tab-pane>-->
      <!--<Tab-pane label="标签三tree" v-if="true">-->
        <!--<Tree :data="baseData" show-checkbox @on-select-change="treeClick"></Tree>-->
      <!--</Tab-pane>-->
      <!--<Tab-pane label="标签三tree" v-if="true">-->
        <!--<img src="../../assets/下载.png" height="239" width="211"/>-->
      <!--</Tab-pane>-->


    </Tabs>
  </div>
</template>
<script>

  import vas_list from '../goods/vasList.vue'
  import vas from '../goods/vas.vue'
  import dragImage from '../../components/dragImage.vue'
  import upload from '../../components/upload.vue'
  import test from '../test2.vue'

  import { mapGetters, mapMutations } from 'vuex'


  function change1(data){
    console.log('qian', data)
    if (data instanceof Array)
      data.forEach(function callback(currentValue, index, array){
        if (typeof currentValue.children !== undefined) {
          change1(currentValue.children)
        };
        currentValue.t = currentValue.title;
      }, this);
    console.log('hou', data);
  }

  export default {
    data () {
      return {
//        tabs: ['r','e','w']
        baseData: [{
          expand: true,
          title: 'parent 1',
          id: '123132',
          children: [{
            title: 'parent 1-0',
            id: '12',
            expand: true,
            disabled: true,
            children: [{
              title: 'leaf',
              id: '3',
              disableCheckbox: true
            }, {
              title: 'leaf',
              id: '4',
            }]
          }, {
            title: 'parent 1-1',
            expand: true,
            checked: true,
            id: '5',
            children: [{
              title: '<span style="color: red">leaf</span>',
            }]
          }]
        }]
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
      ...mapGetters({
        tabs: 'tabs',
        tabValue: 'tabValue'
      }),
      options(){
        return this.$store.state.options;
      }
    },
//    props:['tabs'],
    created: function () {
      console.log(this.tabs);
//      console.log(this.tabName);
//      this.tabs.push(this.tabName);
//      console.log(this.tabs);
//      console.log(this.$parent);
//      console.log(this.$router.params);

    },
    methods: {
      ...mapMutations({
        changeTab: 'CHANGE_TAB',
        deleteTab:'DELETE_TAB'
      }),
      tabClick (name) {
        this.changeTab({
          name: name
        });
      },
      tabRemove (name) {
        this.deleteTab({
          name: name
        })
        console.log('e-content', name);
      },
      treeClick(node){
        change1(this.baseData);
      }
//      handleTabRemove (name) {
//        this['tab' + name] = false;
//      },
//      handleTabsAdd () {
//        this.tabs ++;
//      }
    },

  }
</script>


<style>

</style>
