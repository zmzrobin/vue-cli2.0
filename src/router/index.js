import Vue from 'vue'
import Utils from '../assets/js/Utils'
import Router from 'vue-router'
import myspace from '@/view/myspace.vue'
import index from '@/view/index.vue'
import product from '@/view/product.vue'
import news from '@/view/news.vue'
import footbar from '@/view/footbar.vue'
import search from '@/view/search.vue'
import productdetail from '@/view/productdetail.vue'
// import transferdetail from '@/view/transferdetail.vue'
// import productinfo from '@/view/productinfo.vue'
import pay from '@/view/pay.vue'
// import riskassess from '@/view/riskassess.vue'
// import riskassesscontent from '@/view/riskassesscontent.vue'
// import bankmanage from '@/view/bankmanage.vue'
// import expert from '@/view/expert.vue'
// import setting from '@/view/setting.vue'
// import myinfo from '@/view/myinfo.vue'
// import mobile from '@/view/mobile.vue'
// import safe from '@/view/safe.vue'
// import resetpassword from '@/view/resetpassword.vue'
// import unbindbank from '@/view/unbindbank.vue'
// import addBankcard from '@/view/addBankcard.vue'
// import bindbank from '@/view/bindbank.vue'
// import transferform from '@/view/transferform.vue'
import login from '@/view/login.vue'
import register from '@/view/register.vue'
// import message from '@/view/message.vue'
// import messagedetail from '@/view/messagedetail.vue'
// import success from '@/view/success.vue'
// import recharge from '@/view/recharge.vue'
// import rechargeinfo from '@/view/rechargeinfo.vue'
// import withdraw from '@/view/withdraw.vue'
// import about from '@/view/about.vue'
// import helpcenter from '@/view/helpcenter.vue'
// import order from '@/view/order.vue'
// import hold from '@/view/hold.vue'
// import tradenum from '@/view/tradenum.vue'
// import mymoney from '@/view/mymoney.vue'
// import record from '@/view/record.vue'
import test from '@/view/test.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/test',
      component: test
    },
    {
      path: '/',
      // redirect: '/index',
      beforeEnter: (to, from, next) => {
        next({
          path: '/index'
        })
      }
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          name: 'index',
          component: footbar
        }
      ]
    },
    {
      path: '/product',
      component: product,
      children: [
        {
          path: '',
          name: 'product',
          component: footbar
        }
      ]
    },
    {
      path: '/news',
      component: news,
      children: [
        {
          path: '',
          name: 'news',
          component: footbar
        }
      ]
    },
    {
      path: '/myspace',
      component: myspace,
      children: [
        {
          path: '',
          name: 'myspace',
          component: footbar
        }
      ]
    },
    {
      path: '/:path/search',
      name: 'search',
      component: search
    },
    {
      path: '/:path/productdetail',
      name: 'productdetail',
      component: productdetail
    },
    // {
    //   path: '/:path/transferdetail',
    //   name: 'transferdetail',
    //   component: transferdetail
    // },
    // {
    //   path: '/:path/:path2/productinfo',
    //   name: 'productinfo',
    //   component: productinfo
    // },
    {
      path: '/:path/:path2/pay',
      name: 'pay',
      component: pay,
      meta:
        {
          requiresLogin: true
        },
    },
    // {
    //   path: '/riskassess',
    //   name: 'riskassess',
    //   component: riskassess
    // },
    // {
    //   path: '/riskassesscontent',
    //   name: 'riskassesscontent',
    //   component: riskassesscontent
    // },
    // {
    //   path: '/helpcenter',
    //   name: 'helpcenter',
    //   component: helpcenter
    // },
    // {
    //   path: '/:path/setting',
    //   component: setting,
    //   children: [
    //     {
    //       path: '',
    //       name: 'setting',
    //       component: footbar
    //     }
    //   ]
    // },
    // {
    //   path: '/:path/myinfo',
    //   name: 'myinfo',
    //   component: myinfo,
    // },
    // {
    //   path: '/:path/mobile',
    //   name: 'mobile',
    //   component: mobile,
    // },
    // {
    //   path: '/:path/safe',
    //   component: safe,
    //   children: [
    //     {
    //       path: '',
    //       name: 'safe',
    //       component: footbar
    //     }
    //   ]
    // },
    // {
    //   path: '/:path/resetpassword',
    //   name: 'resetpassword',
    //   component: resetpassword,
    // },
    // {
    //   path: '/:path/mymoney',
    //   name: 'mymoney',
    //   component: mymoney
    // },
    // {
    //   path: '/:path/record',
    //   name: 'record',
    //   component: record
    // },
    // {
    //   path: '/:path/about',
    //   name: 'about',
    //   component: about
    // },
    // {
    //   path: '/bankmanage',
    //   name: 'bankmanage',
    //   component: bankmanage
    // },
    // {
    //   path: '/expert',
    //   name: 'expert',
    //   component: expert
    // },
    // {
    //   path: '/:path/order',
    //   name: 'order',
    //   component: order
    // },
    // {
    //   path: '/:path/hold',
    //   name: 'hold',
    //   component: hold
    // },
    // {
    //   path: '/:path/tradenum',
    //   name: 'tradenum',
    //   component: tradenum
    // },
    // {
    //   path: '/:path/unbindbank',
    //   name: 'unbindbank',
    //   component: unbindbank
    // },
    // {
    //   path: '/:path/bindbank',
    //   name: 'bindbank',
    //   component: bindbank
    // },
    // {
    //   path: '/:path/addBankcard',
    //   name: 'addBankcard',
    //   component: addBankcard
    // },
    // {
    //   path: '/:path/transferform',
    //   name: 'transferform',
    //   component: transferform
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/:path/register',
      name: 'register',
      component: register
    },
    // {
    //   path: '/message',
    //   name: 'message',
    //   component: message
    // },
    // {
    //   path: '/:path/:path2/messagedetail',
    //   name: 'messagedetail',
    //   component: messagedetail
    // },
    // {
    //   path: '/success',
    //   name: 'success',
    //   component: success
    // },
    // {
    //   path: '/recharge',
    //   component: recharge,
    //   children: [
    //     {
    //       path: '',
    //       name: 'recharge',
    //       component: footbar
    //     }
    //   ]
    // },
    // {
    //   path: '/rechargeinfo',
    //   name: 'rechargeinfo',
    //   component: rechargeinfo,
    // },
    // {
    //   path: '/withdraw',
    //   component: withdraw,
    //   children: [
    //     {
    //       path: '',
    //       name: 'withdraw',
    //       component: footbar
    //     }
    //   ]
    // },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!Utils.isLogin()) {
      next({path: '/login', query: {to: to.fullPath}}) // 全局的拦截，比如没有登录，跳转到登录页 todo
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
