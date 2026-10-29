
import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'

Vue.config.productionTip = false

new Vue({
  render: function (createElement) {
    return createElement(App)
  }
}).$mount('#app')
