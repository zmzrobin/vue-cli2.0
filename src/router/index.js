import Vue from 'vue'
import Router from 'vue-router'
import myspace from '@/view/myspace.vue'
import index from '@/view/index.vue'
import footbar from '@/view/footbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        default: index,
        footbar: footbar
      }
    },
    {
      path: '/myspace',
      name: 'myspace',
      components: {
        default: myspace,
        footbar: footbar
      }
    },
  ]
})
