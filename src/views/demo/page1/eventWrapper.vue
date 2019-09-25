<template>
  <div class="hello">
    当前为包裹myclick事件的组件
      <cv-event @myclick='handleMyclick'></cv-event>

  </div>

</template>

<script>
import cvEvent from './event.vue'
export default {
  components: {
    'cv-event': cvEvent
  },

  data: function () {
    return {
      who: 'cvicse'
    }
  },
  methods: {
    handleMyclick: function (event) {
      console.log('event-wrapper:' + event)
      // this.$emit('myclick', event)
    }
  }
}
</script>

<style>
.hello {
  background-color: rgb(238, 243, 255);
  height: 100px;
  margin: 10px;
  padding: 5px;
  text-align: center
}
</style>
