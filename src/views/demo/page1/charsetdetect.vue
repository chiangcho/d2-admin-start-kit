<template>
  <d2-container>
    <el-card>
      <div>{{ detectResult }}</div>
      <pre><code>{{content}}</code></pre>
      <el-button @click="toDetectGbk">gbk</el-button>
      <el-button @click="toDetectUtf8">utf8</el-button>
    </el-card>
  </d2-container>
</template>
<script>
import axios from 'axios'
var jschardet = require('jschardet')

export default {
  name: 'demo-charsetdetect',
  data () {
    return {
      text: {},
      content: '',
      reqConf: {
        method: 'GET',
        url: '/gbk.json',
        responseType: 'text',
        responseEncoding: 'gbk'
      }
    }
  },
  computed: {
    detectResult: function () {
      return JSON.stringify(this.text)
    }
  },
  methods: {
    toDetectGbk: function () {
      axios.request(this.reqConf).then((response) => {
        this.text = jschardet.detect(response.data)
        // var x = new Uint8Array(response.data.toString('gbk'))

        // var str = new TextDecoder('gbk').decode(x)
        this.content = response.data
      })
    },
    toDetectUtf8: function () {
      axios.get('/utf8.json', this.reqConf).then((response) => {
        console.log(response.data)
        this.text = jschardet.detect(response.data)
        this.content = response.data
      })
    }
  }
}
</script>
