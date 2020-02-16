/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './mock/MockServer'

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

Vue.use({
  vm
})
