import Vue from 'vue'
import App from './App.vue'
import MilkUI from './plugins/milkui/index.js'

Vue.config.productionTip = false

Vue.use(MilkUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
