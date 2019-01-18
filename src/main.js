import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MilkUI from './plugins/milkui/index.js'

Vue.config.productionTip = false

Vue.use(MilkUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
