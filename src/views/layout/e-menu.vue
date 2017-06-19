<template>
  <div>
    <Menu active-name="menuConfig.activeName" theme="dark" width="auto" :open-names="['1']" @on-select="menuSelect">
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
  export default {
    data () {
      return {}
    },
    props: ['menuConfig'],
    created: function () {
      console.log(this.menuConfig)
    },
    methods: {
      menuSelect: function (name) {
/*        TODO:
  1.this.$router.push
  2.this.$store.commit()
   */
        alert(name);
      }
    }
  }
</script>

<style>

</style>
