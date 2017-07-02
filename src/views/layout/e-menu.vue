<template>
  <div>
    <Menu active-name="menuActiveName" theme="dark" width="auto" :open-names="['1']" @on-select="menuSelect">
      <!--<Submenu name="1">-->
        <!--<template slot="title">-->
          <!--<Icon type="ios-navigate"></Icon>-->
          <!--商品-->
        <!--</template>-->
        <!--<router-link to="/goods">-->
          <!--<Menu-item name="1-1">添加商品</Menu-item>-->
        <!--</router-link>-->
        <!--<Menu-item name="1-2">选项 2</Menu-item>-->
        <!--<Menu-item name="1-3">选项 3</Menu-item>-->
      <!--</Submenu>-->
      <!--<Submenu name="2">-->
        <!--<template slot="title">-->
          <!--<Icon type="ios-keypad"></Icon>-->
          <!--商家-->
        <!--</template>-->
        <!--<router-link to="/business/business" >-->
          <!--<Menu-item name="2-1">选项 1</Menu-item>-->
        <!--</router-link>-->
        <!--<Menu-item name="2-2">选项 2</Menu-item>-->
      <!--</Submenu>-->
      <!--<Submenu name="3">-->
        <!--<template slot="title">-->
          <!--<Icon type="ios-analytics"></Icon>-->
          <!--导航三-->
        <!--</template>-->
        <!--<Menu-item name="3-1">选项 1</Menu-item>-->
      <!--</Submenu>-->

      <Menu-item name="menuConfig.index.name">
        <Icon type="asterisk"></Icon>
        {{ menuConfig.index.title }}
      </Menu-item>

      <Submenu v-for="submenu in menuConfig.submenus" :name="submenu.name">
        <template slot="title">
          <Icon :type="submenu.icon"></Icon>
          {{ submenu.title }}
        </template>
        <Menu-item v-for="item in submenu.items" :name="item.name">
          <Icon :type="item.icon"></Icon>
          {{ item.title }}
        </Menu-item>
      </Submenu>

    </Menu>
  </div>
</template>
<script>

  import {mapGetters, mapMutations} from 'vuex'

  function initMenuConfigMap () {
    const map = new Map();
    map.set('index', this.menuConfig.index);
    this.menuConfig.submenus.forEach((submenu) => {
      submenu.items.forEach((item) => {
        map.set(item.name, item);
      }, this);
    }, this);
    return map
  }

  export default {
    data () {
      return {}
    },
    props: ['menuConfig'],
    mounted: function () {
      console.log(this.menuActiveName)
    },
    computed: {
      ...mapGetters({
        menuActiveName: 'menuActiveName'
      })
    },
    methods: {
      ...mapMutations({
        menuToTab: 'MENU_TO_TAB'
      }),
      menuSelect: function (name) {
        const map = initMenuConfigMap.call(this);
        const tab = {
          name: name,
          label: map.get(name),
        }
//        this.menuToTab(tab);
        this.$store.commit('MENU_TO_TAB', tab);
        console.log(this.$router);
        console.log(name, tab.name)
        this.$router.push(tab.name);
      }
    }
  }
</script>

<style>

</style>
