<template>
  <div>
    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          商品
        </template>
        <router-link to="/goods">
          <Menu-item name="1-1">添加商品</Menu-item>
        </router-link>
        <Menu-item name="1-2">选项 2</Menu-item>
        <Menu-item name="1-3">选项 3</Menu-item>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          商家
        </template>
        <router-link to="/business/business" >
          <Menu-item name="2-1">选项 1</Menu-item>
        </router-link>
        <Menu-item name="2-2">选项 2</Menu-item>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          导航三
        </template>
        <Menu-item name="3-1">选项 1</Menu-item>
        <Menu-item name="3-2">选项 2</Menu-item>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>

</style>
