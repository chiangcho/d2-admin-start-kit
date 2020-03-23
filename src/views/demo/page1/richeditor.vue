<template>
<div>
  <tinymce-editor :init="init" :disabled="disabled" v-model="tinyValue" :key="componentKey"></tinymce-editor>
</div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import 'tinymce/plugins/image'
// 插入上传图片插件
import 'tinymce/plugins/media'
// 插入视频插件
import 'tinymce/plugins/table'
// 插入表格插件
import 'tinymce/plugins/lists'
// 列表插件
import 'tinymce/plugins/fullscreen'
// 全屏插件
import 'tinymce/plugins/print'
// 打印插件
import 'tinymce/plugins/preview'
// 预览插件
import 'tinymce/plugins/paste'
// 粘贴插件

import tinymceEditor from '@tinymce/tinymce-vue'

export default {
  name: 'common-editor',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 如果页面有上下文根，则通过该属性指定
    baseUrl: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: 'lists image media table fullscreen print preview paste'
    },
    toolbar: {
      type: [String, Array],
      default: 'undo redo | fontsizeselect | bold italic forecolor backcolor | alignleft aligncenter alignright  | bullist numlist outdent indent | lists image media table | removeformat|fullscreen|print|preview| fontselect'
    },
    height: {
      type: [String],
      default: '500'
    },
    width: {
      type: [String],
      default: '100%'
    }
  },
  data: function () {
    return {
      tinyValue: '',
      init: {
        language_url: this.baseUrl + '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: this.baseUrl + '/tinymce/skins/ui/oxide', // 必须指定skin_url，否则编辑框无法显示
        height: this.height,
        width: this.width,
        branding: false, // 隐藏tinymce名称
        menubar: false,
        plugins: this.plugins,
        toolbar: this.toolbar,
        paste_data_images: true, // 运行粘贴图片
        paste_enable_default_filters: false, // 禁用paste插件的样式简化filter
        font_formats: '微软雅黑=microsoft yahei;宋体=宋体;黑体=黑体;仿宋_GB2312=仿宋_GB2312;楷体_GB2312=楷体_GB2312;隶书=隶书;幼圆=幼圆;',
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }
      },
      componentKey: 0
    }
  },
  components: {
    tinymceEditor
  },
  activated () {
    // 通过每次激活时变更key的方式，解决进行页签切换时，组件无法重新渲染，导致内容不显示的问题
    this.componentKey = this.componentKey + 1
  },
  watch: {
    value: {
      handler (newValue) {
        this.tinyValue = newValue
      },
      immediate: true
    },
    tinyValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
