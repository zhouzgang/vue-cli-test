<template>
  <div>
    <Row>
      <!--<Col span="2" class="mt-10">-->
        <!--<span class="f15"><Icon type="reply-all"></Icon> 返回</span>-->
      <!--</Col>-->
      <Col span="18" push="1">
        <Form class="bdc pt10" ref="vasForm" :model="vasForm" :rules="ruleValidate" :label-width="100" inline>

      <Form-item class="pct45" label="商品编号" prop="goodsNo">
        <Input v-model="vasForm.goodsNo" placeholder="请输入商品编号"></Input>
      </Form-item>

      <Form-item class="pct45" label="所在网点" prop="outletId">
        <Input v-model="vasForm.outletId" placeholder="请输入网点名"></Input>
      </Form-item>

      <Form-item class="pct45" label="服务类型" prop="categoryId">
        <Select
          v-model="vasForm.categoryId"
          filterable
          remote
          :remote-method="remoteMethod1"
          :loading="loading1">
          <Option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</Option>
        </Select>
      </Form-item>

      <Form-item class="pct45" label="服务名称" prop="goodsName">
        <Input v-model="vasForm.goodsName" placeholder="请输入名称"></Input>
      </Form-item>

      <Form-item class="pct45" label="支付方式" prop="payType">
        <Checkbox-group v-model="vasForm.payType">
          <Checkbox label="积分／礼包"></Checkbox>
          <Checkbox label="现金"></Checkbox>
        </Checkbox-group>
      </Form-item>

      <Form-item class="pct45" label="积分兑换价(元)" prop="exchangePrice">
        <Input v-model="vasForm.exchangePrice" placeholder="请输入价格"></Input>
      </Form-item>

      <Form-item class="pct45" label="结算价(元)" prop="settlementPrice">
        <Input v-model="vasForm.settlementPrice" placeholder="请输入价格"></Input>
      </Form-item>

      <Form-item class="pct45" label="市场价(元)" prop="marketPrice">
        <Input v-model="vasForm.marketPrice" placeholder="请输入价格"></Input>
      </Form-item>

      <Form-item class="pct45" prop="validDate" label="兑换码有效期">
        <Input-number :max="10" :min="1" v-model="vasForm.validDate" size="large"></Input-number>
      </Form-item>

      <Form-item class="pct45" label="服务介绍" prop="introduction">
        <Input v-model="vasForm.introduction" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>

      <Row>
        <Col>
          <Form-item class="pct45" label="详情图片" prop="detailimages">
            <upload></upload>
          </Form-item>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form-item :label-width="20">
            <Button class="ml20" type="ghost" icon="arrow-return-left" @click="handleSubmit('vasForm')">返回</Button>
            <Button class="ml20" type="success"  @click="handleSubmit('vasForm')">提交</Button>
            <Button class="ml20" type="dashed" icon="edit" @click="handleSubmit('vasForm')">编辑</Button>
            <Button class="ml20" type="warning" icon="android-delete" @click="handleReset('vasForm')" style="margin-left: 8px">删除</Button>
          </Form-item>
        </Col>
      </Row>
    </Form>
      </Col>
    </Row>
  </div>
</template>
<script>

  import upload from '../../components/upload.vue'

  export default {
    data () {
      return {
        vasForm: {
          goodsNo: '',
          outletId: '',
          categoryId: '',
          goodsName: '',
          payType: [],
          exchangePrice: '',
          settlementPrice: '',
          marketPrice: '',
          validDate: 0,
          introduction: '',
          detailimages: '',
        },
        loading1: false,
        options1: [],
        ruleValidate: {
          goodsNo: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],

        }
      }
    },
    components: {
      'upload': upload,
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
