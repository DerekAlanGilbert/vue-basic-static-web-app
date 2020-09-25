import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import appInsights from './Insights'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
