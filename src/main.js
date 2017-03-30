// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'

import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/weui.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vScroll from 'vue-scroll'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(vScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
