<template>
  <div class="code-box">
    <div @click="open = !open" class="header milk--bg--light-gray-04 milk--border--light-gray-01">
      <i v-if="!open" class="mk-chevron-down" />
      <i v-if="open" class="mk-chevron-up" />
    </div>
    <div v-if="open" class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
      <pre v-highlightjs="code"><code class="html"></code></pre>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      open: false
    }
  }
}
</script>
<style lang='scss'>
.code-box {
  .header { 
    font-size: 15.4px;
    height: 58px;
    padding: 20px;
    text-align: center;
    border-top: 0;
  }
  .content { border-top: 0; padding: 24px 24px 40px;}
}
</style>
