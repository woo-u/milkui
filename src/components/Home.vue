<template>
  <div id="content" class="milk-home">
    <h2 class="milk-font--title20">Getting Started</h2>
    <p class="milk-font--body20 milk--black">milk-ui is a side project of <a href="http://ahnyuri.com/">designer yuri</a> and <a href="https://medium.com/@jeongwooahn">developer Jeongwoo</a>.</p>
    <p class="milk-font--body20 milk--black">Our goal is to create a UI template for use in a vue-js project with a unique design.</p>
    <p class="milk-font--body20 milk--black">We do not support many components yet, but we will continue to update.</p>

    <h3 class="milk-font--title20">Installation</h3>
    <div class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
      <pre v-highlightjs="codeInstall"><code class="html"></code></pre>
    </div>

    <h3 class="milk-font--title20">Quick Start</h3>
    <div class="content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10">
      <pre v-highlightjs="codeQuick"><code class="html"></code></pre>
    </div>

    <h3 class="milk-font--title20">Have Questions?</h3>
    <p class="milk-font--body20 milk--black">Email us (<a href="mailto:guruahn@gmail.com">developer</a> / <a href="mailto:elisabet517@naver.com ">designer</a>) or <a href="https://github.com/woo-u/milkui/issues">issue</a> in Github.</p>
  </div>
</template>
<script>
export default {
  name: 'Home',
  props: {},
  data(){
    return {
      codeInstall: 'npm i milkui -S',
      codeQuick: `import Vue from ‘vue’;
import MilkUI from ‘milkui’;
import App from ‘./App/vue’;

Vue.use(MilkUI);

new Vue({
	el: ‘#app’,
	render: h => h(App)
});`
    }
  }
}
</script>
<style lang='scss'>
.milk-home {
  p {
    line-height: 1.63;
    margin: 0;
  }
  h3 {
    font-size: 32px;
		font-weight: 300 !important;
		line-height: 2;
		color: #263238;
  }
  pre {
    padding-left: 17px;
    padding-right: 17px;
  }
}
</style>
