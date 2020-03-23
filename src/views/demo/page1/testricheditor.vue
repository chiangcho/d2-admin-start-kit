<template>
  <div >
    <p>Hello<el-input v-model="who" ></el-input></p>
    <div v-html="who"></div>
    <editor v-model="who" width="90%" height="300px"></editor>
    <editor v-model="who2" ></editor>
  </div>
</template>

<script>
import editor from './richeditor.vue'
export default {
  name: 'demo-richeditor',
  components: {
    editor
  },
  data: function () {
    return {
      who: '<p>中创<span style="color: #f1c40f;">软件</span></p> <p>&nbsp;</p> <p>&nbsp;</p>',
      who2: '<p>中创<span style="color: #f1c40f;">软件</span></p> <p>&nbsp;</p> <p>&nbsp;</p>'
    }
  }
}
</script>
