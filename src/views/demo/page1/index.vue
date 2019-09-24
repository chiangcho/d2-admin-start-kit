<template>
  <d2-container :filename="filename">
    <el-row :gutter="10">
      <el-col>
        <el-card>
          <div slot="header" class="clearfix">
            <span>脚本格式化及语法高亮</span>
          </div>
          <el-row>
            <el-col :span="7">
              <el-button @click="format1">prettier</el-button>
              <el-button @click="format2">beautify</el-button>
              <el-button @click="highlight1">highlight</el-button>
            </el-col>
            <el-col :span="17">
              <el-input v-model="code" placeholder="请输入要格式化的脚本"></el-input>
            </el-col>
          </el-row>
          <pre>
          <code ref="code">

          </code>
          </pre>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col>
        <el-card>
          <div slot="header" class="clearfix">
            <span>路由测试</span>
            <el-button
              style="float: right; padding: 3px"
              type="primary"
              @click="openPage1"
            >页面page2/234</el-button>
            <el-button
              style="float: right; padding: 3px"
              type="primary"
              @click="openPage2"
            >页面page2/abc</el-button>
            <el-button
              style="float: right; padding: 3px"
              type="primary"
              @click="openPage3"
            >页面page2/789</el-button>
            <el-button
              style="float: right; padding: 3px"
              type="primary"
              @click="openPage4"
            >在当前页打开页面page2/567</el-button>
          </div>
          <div>
            <el-tag>路由的fullpath</el-tag>
            {{$route.fullPath}}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>路由进入退出等事件测试</span>
          </div>
          <el-button type="warning" v-if="!isShow">isSHow=false时显示</el-button>
          <el-button type="danger" v-if="isShow">isSHow=true时显示</el-button>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>动态组件测试</span>
          </div>
          <abc></abc>
        </el-card>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/solarized-light.css'
import 'babel-polyfill'
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
    // this.$options.components['abc'] = httpVueLoader('http://localhost:3000/' + this.templateId + '.vue')
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
      this.$refs.code.innerHTML = this.code
    },
    format2: function (event) {
      this.code = beautify(this.code, { indent_size: 2, space_in_empty_paren: true })
      this.$refs.code.innerHTML = this.code
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
        name: 'demo-page2',
        params: {
          title: '页面2-abc',
          id: 'abc'
        }
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
<style>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 30;
  }
}
</style>
