// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import 'element-ui/lib/theme-chalk/display.css'
import '../static/css/reset.css'
import axios from 'axios'

//https://www.cnblogs.com/bfwbfw/p/7832614.html
Vue.use(ElementUi)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.HOST = "/resdata"
// axios.defaults.baseURL = '/resdata'
/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>',
  render:h=>h(App)
})
