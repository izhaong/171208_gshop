import Vue from 'vue'
import App from './App.vue'
import './common/reset.css'
import router from './router/router'

import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
FastClick.attach(document.body)

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
