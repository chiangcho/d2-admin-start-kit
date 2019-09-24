<template>
<div>
    <div class="hello">Hello {{who}}</div>
    <splitpanes style="height: 400px">
  <span splitpanes-min="20">1</span>
  <splitpanes horizontal>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </splitpanes>
  <span><el-input v-model="who" placeholder="请输入内容"></el-input></span>
</splitpanes>
</div>
</template>

<script>
import Splitpanes from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
export default {
  name: 'demo-split',
  components: { Splitpanes },
  data: function () {
    return {
      who: 'cvicse'
    }
  }
}
</script>

<style>
.splitpanes__pane {
  justify-content: center;
  align-items: center;
  display: flex;
}

.splitpanes__pane span {
  font-family: Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 5em;
  opacity: 0.6;
}

</style>
