import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import risk from './modules/risk'
import todo from './modules/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: () => ({
    isLogin: false
  }),
  modules: {
    product,
    risk,
    todo
  }
})
export default store
