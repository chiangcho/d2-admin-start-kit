<template>
      <el-button type="warning" @click="handleClick">点击传播事件myclick</el-button>

</template>

<script>
export default {
  data: function () {
    return {
      who: 'cvicse'
    }
  },
  methods: {
    handleClick: function (event) {
      this.$emit('myclick', this.who)
    }
  }
}
</script>

<style>
.hello {
  background-color: #ffe;
}
</style>
