import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MilkUI from './plugins/milkui/index.js'
import VueHighlightJS from 'vue-highlightjs'

Vue.config.productionTip = false

Vue.use(MilkUI)
Vue.use(VueHighlightJS)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
