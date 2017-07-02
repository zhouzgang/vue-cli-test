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

  </div>
</template>
<script>
  export default {
    data () {
      return {
        model13: '',
        loading1: false,
        options1: [],
        model14: [],
        loading2: false,
        options2: []
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
