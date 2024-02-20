import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles/vendor.scss'
import '@/assets/styles/main.css'

import '@/assets/js/global.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
