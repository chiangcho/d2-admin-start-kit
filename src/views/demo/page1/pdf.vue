<template>
  <pdf :src="url" :page="1"></pdf>
</template>
<script>
import pdf from 'pdfvuer'
export default {
  name: 'demo-pdf',
  components: {
    pdf
  },
  data () {
    return {
      url: 'test.pdf'
    }
  }
}
</script>
