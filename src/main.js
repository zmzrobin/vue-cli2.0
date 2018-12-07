// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem'
import './assets/js/TweenMax.min'
import 'mint-ui/lib/style.css'
import './assets/css/common.scss'
import { Lazyload, Toast } from 'vant'

Vue.use(Lazyload, Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
