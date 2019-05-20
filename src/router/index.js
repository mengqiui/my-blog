import Vue from 'vue'
import Router from 'vue-router'
import indexmain from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexmain',
      component: indexmain
    }
  ]
})
