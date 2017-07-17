<template>
  <div>
    <Menu active-name="menuActiveName" theme="dark" width="auto" :open-names="['1']" @on-select="menuSelect">

      <Menu-item :name="menuConfig.index.name">
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
      return {
        map: new Map()
      }
    },
    props: ['menuConfig'],
    mounted: function () {
      this.map = initMenuConfigMap.call(this);
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
        const tab = {
          name: name,
          obj: this.map.get(name),
        }
        this.$store.commit('MENU_TO_TAB', tab);
        this.$router.push(tab.name);
      }
    }
  }
</script>

<style>

</style>
