import Vue from 'vue'
import Router from 'vue-router'
import indexmain from '@/views/index/index.vue'
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
      component: indexmain,
      meta:{title:'做个深呼吸，一切没什么大不了'}
    },
    {
      path: '/document',
      name: 'document',
      component: document,
      meta:{title:'记录下对技术的感悟，解决掉的每个bug，对每个知识点的认知'}
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      meta:{title:'每次心血来潮做的小demo，记录下来，回首，提炼，升华'}
    },
    {
      path: '/life',
      name: 'life',
      component: life,
      meta:{title:'写下点滴生活中的酸甜苦辣，人生苦短，珍惜每分每秒，身边的每个人'}
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo,
      meta:{title:'镜头前的一切都是自己看到的，它们就是秋世界的缩影，回首再看，告诉自己，走过此生无悔'}
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta:{title:'简简单单后台写入，方便前台显示'}
    },
  ]
})
