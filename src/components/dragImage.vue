<template>
    <div class="playground">
      <div class="color-show">
        <div
          v-for="color in colors"
          v-dragging="{ list: colors, item: color, group: 'color' }"
          class="color-box"
          :style="{'background-color': color.text}"
          :key="color.text">
          {{color.text}}
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        colors: [{
          text: 'Aquamarine'
        }, {
          text: 'Hotpink'
        }, {
          text: 'Gold'
        }, {
          text: 'Crimson'
        }, {
          text: 'Blueviolet'
        }, {
          text: 'Lightblue'
        }, {
          text: 'Cornflowerblue'
        }, {
          text: 'Skyblue'
        }],
        colorShow: true
      }
    },
    mounted: function() {
      this.$dragging.$on('dragged', function(data) {
        console.log('dragged', data)
      })
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif
  }

  .playground {
    display: flex;
    /*margin-top: 4rem;*/
  }

  .color-item {
    background: #f5f5f5;
    padding: .5rem;
    color: #5f5f5f;
    transition: transform .3s;
  }

  .color-item.dragging {
    background-color: #fff;
  }

  .color-show {
    display: flex;
    flex-wrap: wrap;
    width: 30rem;
  }

  .color-box {
    width: 33%;
    height: 6rem;
    background: #efefef;
    line-height: 6rem;
    text-align: center;
    color: #fff;
    transition: transform .3s;
  }

  .color-box.dragging {
    transform: scale(1.1);
  }

  .in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {
    transition: all .5s;
  }

  .in-out-translate-fade-enter, .in-out-translate-fade-leave-active {
    opacity: 0;
  }

  .in-out-translate-fade-enter {
    transform: translate3d(100%, 0, 0);
  }

  .in-out-translate-fade-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
</style>
