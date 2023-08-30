import Vue from 'vue'
import App from './App.vue'
import componentsBoxs from "../plugins/index.js"

Vue.config.productionTip = false

Vue.use(componentsBoxs)

new Vue({
  render: h => h(App),
}).$mount('#app')
