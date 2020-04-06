import Vue from 'vue'
import App from './App.vue'

import { apolloProvider } from './plugins/apollo'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})

