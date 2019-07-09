<template>
  <d2-container :filename="filename">
    <template slot="header">Page 2 header</template>
    Hello World
    <el-input v-model="code" placeholder="请输入内容"></el-input>
    <div>路由fullpath{{$route.fullPath}}</div>
    <div>路由参数:{{id}}</div>
  </d2-container>
</template>

<script>
export default {
  name: 'demo-page2',
  props: {
    id: ''
  },
  data () {
    return {
      filename: __filename,
      code: ''
    }
  },
  deactivated: function () {
    console.log('deactived')
    console.log(this.$route.fullPath)
  }
}
</script>
