import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsZXggZGUgU291emEiLCJlbWFpbCI6ImFsZXhAbmVnb2Npby5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTkyOTAxOTY3LCJleHAiOjE1OTMxNjExNjd9.zMzZ4BYlXO0j6ox1Itds8czOCX0avG789n-SmucTv_k'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')