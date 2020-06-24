import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.101.13:3000/api'
Vue.prototype.$http = axios


Vue.use(VueLazyload, {
  loading: './assets/0195f55972f18ca8012193a342310a.gif'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
