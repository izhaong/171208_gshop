import Vue from 'vue'
import App from './App.vue'
import './common/reset.css'
import router from './router/router'
import store from './store/index'

import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
FastClick.attach(document.body)

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
