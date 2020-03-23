<template>

<el-form :model="parentData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动形式" prop="desc">
    <el-input type="textarea" v-model="parentData.desc"></el-input>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  name: 'SubForm',
  props: ['parentData'],
  data () {
    return {
      ruleForm: {

        desc: ''
      },
      rules: {

        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  }

}
</script>
