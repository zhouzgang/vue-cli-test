<template>
  <div>

    <Select
      v-model="model13"
      filterable
      remote
      :remote-method="remoteMethod1"
      >
      <Option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</Option>
    </Select>


    <!--<Row>-->
      <!--<Col span="8">-->
      <!--<Date-picker size="small" editable="false" type="date" placeholder="选择日期"></Date-picker>-->
      <!--</Col>-->
    <!--</Row>-->


    <!--<Select v-model="model1" style="width:200px">-->
      <!--<Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>-->
    <!--</Select>-->


  </div>
</template>
<script>
  export default {
    data () {
      return {
        model13: '1',
        loading1: false,
        test: 'yyy',
        options1: [
          {
            value: '1',
            label: 'ttt',
          }
          ],
        model14: [],
        loading2: false,
        options2: [],
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: 'chongqing'
      }
    },
    computed: {
      count () {
        return this.$store.state.count = 9;
      }
    },
    created: function () {
//      console.log(options);
    },methods: {
      remoteMethod1 (query) {
        if (query !== '') {
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options1 = [];
        }
      },
    }
  }
</script>

<style>

</style>
