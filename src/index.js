
import Vue from 'vue'
import App from './App.vue'

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

new Vue({
  el: '#app',
  render: h => h(App)
})
