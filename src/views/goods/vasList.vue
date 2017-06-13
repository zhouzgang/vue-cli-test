<template>
  <div>
    <!--<Row class="bbm">-->
      <!--<span class="f20"><Icon type="ios-list-outline"></Icon> 服务列表</span>-->
    <!--</Row>-->
    <!--S-参数表单-->
    <Row class="bbm">
      <Form ref="vasQueryForm" :model="vasQueryForm" :rules="ruleValidate" :label-width="80" inline>

        <Form-item label="服务名称" prop="goodsName">
          <Input v-model="vasQueryForm.goodsName" placeholder="请输入姓名"></Input>
        </Form-item>

        <Form-item label="服务类型" prop="categoryId">
          <Select v-model="vasQueryForm.categoryId" placeholder="请选择类型">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>

        <Form-item label="兑换价" >
          <Row>
            <Col span="11">
            <Form-item prop="startExchangePrice">
              <Input v-model="vasQueryForm.startExchangePrice" placeholder="请输入"></Input>
            </Form-item>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
            <Form-item prop="endExchangePrice">
              <Input v-model="vasQueryForm.endExchangePrice" placeholder="请输入"></Input>
            </Form-item>
            </Col>
          </Row>
        </Form-item>

        <Form-item label="创建日期">
          <Row>
            <Col span="11">
            <Form-item prop="startDate">
              <Date-picker type="date" placeholder="选择起始日期" v-model="vasQueryForm.startDate"></Date-picker>
            </Form-item>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
            <Form-item prop="endDate">
              <Date-picker type="date" placeholder="选择终止日期" v-model="vasQueryForm.endDate"></Date-picker>
            </Form-item>
            </Col>
          </Row>
        </Form-item>

        <Form-item>
          <Button type="primary" @click="handleSubmit('vasQueryForm')">新增</Button>
          <Button type="ghost" @click="handleReset('vasQueryForm')" style="margin-left: 8px">查询</Button>
        </Form-item>
      </Form>
    </Row>
    <!--E-参数表单-->

    <!--S-数据展示表格-->
    <Row>
      <Table border :data="vasTableData" :columns="vasTableColumns" stripe></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </Row>
    <!--E-数据展示表格-->

  </div>
</template>
<script>
  export default {
    data () {
      return {
        vasQueryForm: {
          goodsName: '',
          categoryId: '',
          startExchangePrice: '',
          endExchangePrice: '',
          startDate: '',
          endDate: ''
        },
        ruleValidate: {
        },
        vasTableColumns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '服务商品编号',
            key: 'name'
          },
          {
            title: '服务名称',
            key: 'name'
          },
          {
            title: '积分兑换价',
            key: 'name'
          },
          {
            title: '服务服务类型',
            key: 'name'
          },
          {
            title: '创建时间',
            key: 'name'
          },
          {
            title: '状态',
            key: 'name'
          },
          {
            title: '所在网点',
            key: 'name'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
//          {
//            title: '状态',
//            key: 'status',
//            render: (h, params) => {
//              const row = params.row;
//              const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
//              const text = row.status === 1 ? '构建中' : row.status === 2 ? '构建完成' : '构建失败';
//
//              return h('Tag', {
//                props: {
//                  type: 'dot',
//                  color: color
//                }
//              }, text);
//            }
//          },
//          {
//            title: '画像内容',
//            key: 'portrayal',
//            render: (h, params) => {
//              return h('Poptip', {
//                props: {
//                  trigger: 'hover',
//                  title: params.row.portrayal.length + '个画像',
//                  placement: 'bottom'
//                }
//              }, [
//                h('Tag', params.row.portrayal.length),
//                h('div', {
//                  slot: 'content'
//                }, [
//                  h('ul', this.tableData1[params.index].portrayal.map(item => {
//                    return h('li', {
//                      style: {
//                        textAlign: 'center',
//                        padding: '4px'
//                      }
//                    }, item)
//                  }))
//                ])
//              ]);
//            }
//          },
//          {
//            title: '选定人群数',
//            key: 'people',
//            render: (h, params) => {
//              return h('Poptip', {
//                props: {
//                  trigger: 'hover',
//                  title: params.row.people.length + '个客群',
//                  placement: 'bottom'
//                }
//              }, [
//                h('Tag', params.row.people.length),
//                h('div', {
//                  slot: 'content'
//                }, [
//                  h('ul', this.tableData1[params.index].people.map(item => {
//                    return h('li', {
//                      style: {
//                        textAlign: 'center',
//                        padding: '4px'
//                      }
//                    }, item.n + '：' + item.c + '人')
//                  }))
//                ])
//              ]);
//            }
//          },
//          {
//            title: '取样时段',
//            key: 'time',
//            render: (h, params) => {
//              return h('div', '近' + params.row.time + '天');
//            }
//          },
//          {
//            title: '更新时间',
//            key: 'update',
//            render: (h, params) => {
//              return h('div', this.formatDate(this.tableData1[params.index].update));
//            }
//          }
        ],
        vasTableData: this.mockTableData1(),
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },

      mockTableData1 () {
        let data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            name: '商圈' + Math.floor(Math.random () * 100 + 1),
            status: Math.floor(Math.random () * 3 + 1),
            portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
            people: [
              {
                n: '客群' + Math.floor(Math.random () * 100 + 1),
                c: Math.floor(Math.random () * 1000000 + 100000)
              },
              {
                n: '客群' + Math.floor(Math.random () * 100 + 1),
                c: Math.floor(Math.random () * 1000000 + 100000)
              },
              {
                n: '客群' + Math.floor(Math.random () * 100 + 1),
                c: Math.floor(Math.random () * 1000000 + 100000)
              }
            ],
            time: Math.floor(Math.random () * 7 + 1),
            update: new Date()
          })
        }
        return data;
      },
      formatDate (date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      changePage () {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.tableData1 = this.mockTableData1();
      }
    }
  }
</script>

<style>

</style>
