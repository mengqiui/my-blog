import Vue from 'vue'
import Router from 'vue-router'
import indexmain from '@/views/index'
import document from '@/views/document'
import product from '@/views/product'
import life from '@/views/life'
import photo from '@/views/photo'
import admin from '@/views/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexmain',
      component: indexmain
    },
    {
      path: '/document',
      name: 'document',
      component: document
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
  ]
})
