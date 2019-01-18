import Vue from 'vue'
import Router from 'vue-router'
import Colors from '@/components/Colors'
import Buttons from '@/components/Buttons'


Vue.use(Router)


export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Colors',
      component: Colors
    },
    {
      path: '/colors',
      name: 'Colors',
      component: Colors
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    
  ]
})
