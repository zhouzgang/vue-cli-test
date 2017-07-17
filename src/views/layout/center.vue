<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 500px;
    margin: 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 5px;
  }
  .layout-copy{
    text-align: center;
    padding: 5px 0 10px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <e_menu :menuConfig='menuConfig'></e_menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
            <!--<my_content :tabs="tabs"></my_content>-->
          </div>
        </div>
        <div class="layout-copy">
          2017- &copy; ecomb
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>

//  import my_content from './e-content.vue'
  import e_menu from './e-menu.vue'

const menuConfig = {
  activeName:'',
  index: {name: 'index', title: '首页', icon: '', pushUrl:'index'},
  submenus: [{
      name: 'business',
      title: '商家',
      icon: 'asterisk',
      items: [
        {name: 'businessList', title: '商家列表', icon: 'paper-airplane', pushUrl:'businessList'},
        {name: 'addBusiness', title: '创建商家', icon: '', pushUrl:'createBusiness'}
      ]
    },
    {
      name: 'goods',
      title: '商品',
      icon: '',
      items: [
        {name: 'goodsList', title: '商品列表', icon: '', pushUrl:'goodsList'},
        {name: 'addGoods', title: '添加商家', icon: '', pushUrl:'addGoods'}
      ]
    },
  ]

}

  export default {
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
        menuConfig: menuConfig,
        activeName:'1-1',
        tabs: ['r','e','w'],
      }
    },
    components: {
//      'my_content': my_content,
      'e_menu': e_menu,
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      }
    },

  }
</script>
