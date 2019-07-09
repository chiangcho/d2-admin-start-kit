<template>
  <div style="border:1px solid red">
    <template slot="header">Page 4 header</template>
    Hello World
    <el-input v-model="code" placeholder="请输入内容"></el-input>
    <div>路由fullpath{{$route.fullPath}}</div>
    <div>code:{{code}}</div>
  </div>
</template>

<script>
export default {
  name: 'demo-page4',
  data () {
    return {
      filename: __filename,
      code: ''
    }
  },
  props: {
    title: String
  }
}
</script>
