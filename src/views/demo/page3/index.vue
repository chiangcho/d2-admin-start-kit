<template>
  <d2-container :filename="filename" style="border:1px solid red">
    <template slot="header">Page 3 header</template>
    Hello World
    <el-input v-model="code" placeholder="请输入内容"></el-input>
    <div>路由fullpath{{$route.fullPath}}</div>
    <div>code:{{code}}</div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </d2-container>
</template>

<script>
export default {
  name: 'demo-page3',
  data () {
    return {
      filename: __filename,
      code: ''
    }
  }
}
</script>
