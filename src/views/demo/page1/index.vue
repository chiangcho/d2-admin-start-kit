<template>
  <d2-container :filename="filename">
    <template slot="header">Page 1 header</template>
    Hello World
    <el-button @click="format1">prettier</el-button>
    <el-button @click="format2">beautify</el-button>
    <el-button @click="highlight1">highlight</el-button>
    <el-button type="warning" v-if="!isShow">isSHow=false时显示</el-button>
    <el-button type="danger" v-if="isShow">isSHow=true时显示</el-button>

    <el-input v-model="code" placeholder="请输入内容"></el-input>
    <pre>
      <code class="javascript" ref="code">
        {{code}}
      </code>
    </pre>
    <div>路由fullpath{{$route.fullPath}}</div>
    <div>
      <el-button @click="openPage1">打开页面page2/234</el-button>
      <el-button @click="openPage2">打开页面page2/abc</el-button>
      <el-button @click="openPage3">打开页面page2/789</el-button>
      <el-button @click="openPage4">在当前页打开页面page2/567</el-button>
    </div>
    <div>
      <abc></abc>
    </div>
  </d2-container>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/solarized-light.css'

import prettier from 'prettier/standalone'
import parserflow from 'prettier/parser-flow'
import beautify from 'js-beautify'
const plugins = [parserflow]

export default {
  name: 'demo-page1',
  components: {
    // abc: httpVueLoader('http://localhost:3000/' + 'hello.vue')
  },
  data () {
    return {
      filename: __filename,
      input: '',
      isShow: true,
      code: 'var a = 1;b=1;if(b == 1) {}',
      templateId: 'hello'
    }
  },
  props: {
    tname: String
  },
  beforeCreate () {
    console.log('before create')
  },
  beforeRouteLeave (to, from, next) {
    console.log('before route leave')
    this.isShow = false
    next()
  },
  beforeRouteEnter (to, from, next) {
    console.log(' before route enter')
    next(vm => {
      vm.isShow = true
    })
  },
  mounted () {
    console.log('mounted')
    hljs.registerLanguage('javascript', javascript)
  },
  created () {
    console.log('created')
    this.$options.components['abc'] = httpVueLoader('http://localhost:3000/' + this.templateId + '.vue')
  },
  beforeDestroy () {
    console.log('before destroy')
    console.log(this.isShow)
  },
  destroyed () {
    console.log('destroyed')
    console.log(this.isShow)
  },
  methods: {
    format1: function (event) {
      this.code = prettier.format(this.code, { parser: 'flow', plugins })
    },
    format2: function (event) {
      this.code = beautify(this.code, { indent_size: 2, space_in_empty_paren: true })
    },
    highlight1: function (event) {
      hljs.highlightBlock(this.$refs.code)
    },
    openPage1: function (event) {
      this.$router.push({
        path: 'page2/234'
      })
    },
    openPage2: function (event) {
      this.$router.push({
        path: 'page2/abc'
      })
    },
    openPage3: function (event) {
      this.$router.push({
        path: 'page2/789'
      })
    },
    openPage4: function (event) {
      this.$router.replace({
        name: 'demo-page2',
        params: { replace: 'true', id: '567', title: '页面2567' }
      })
    }
  }
}
</script>
