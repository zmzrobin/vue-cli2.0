<template>
  <div class="page">
    <router-view></router-view>
    <van-nav-bar right-text="设置" @click-right="setting"></van-nav-bar>
    <div class="content">
      <div class="index-p1">
        <div class="index-p1-top">
          <div class="head"><img src="../assets/images/head.png" alt=""></div>
          <div class="flex1">
            <h4>麦兜</h4>
            <div class="flex row mt15">
              <p class="flag"><span class="iconfont icon-gantanhao"></span>绑定银行卡</p>
              <p class="flag"><span class="iconfont icon-dagou active"></span>绑定手机号</p>
            </div>
          </div>
        </div>
        <div class="index-p1-money">
          <p class="f24 co-666 tc mt30">总资产(元)</p>
          <p class="f40 co-4 tc">{{totalMoney}}</p>
          <div class="chongzhi">充值</div>
        </div>
        <div class="index-p1-shouyi">
          <p class="f24 co-666 tc mt30">昨日收益(元)</p>
          <p class="f30 co-2 tc">+{{incomeMoney}}</p>
          <div class="tixian">提现</div>
        </div>
      </div>
      <div class="myspace-grid mt20">
        <ul>
          <li v-for="(item,index) in grid" :key="index">
            <router-link :to="item.link">
              <img :src="item.src" alt="">
              <p>{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="m20">
        <van-button size="large" type="default" class="mt30 linh100 f36" @click.native="quit">安全退出</van-button>
      </div>
      <div class="p40">
        <p class="co-666 f24 bc w500 divider">恒生金融资产</p>
        <p class="co-999 f22 tc mt15">市场有风险，投资需谨慎</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {Button, NavBar} from 'vant'
  import {TweenMax, Power2, TimelineLite} from 'gsap'

  export default {
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
    },
    data: () => ({
      grid: [
        {
          src: require('../assets/images/myspace-ico_0001.png'),
          title: '我的订单',
          link: '/myorder'
        },
        {
          src: require('../assets/images/myspace-ico_0002.png'),
          title: '我的持仓',
          link: '/order'
        },
        {
          src: require('../assets/images/myspace-ico_0003.png'),
          title: '我的认购',
          link: '/order'
        },
        {
          src: require('../assets/images/myspace-ico_0004.png'),
          title: '我的特约',
          link: '/order'
        },
        {
          src: require('../assets/images/myspace-ico_0005.png'),
          title: '我的转让',
          link: '/order'
        },
        {
          src: require('../assets/images/myspace-ico_0006.png'),
          title: '我的申请',
          link: '/order'
        },
        {
          src: require('../assets/images/myspace-ico_0007.png'),
          title: '银行卡管理',
          link: '/bankmanage'
        },
        {
          src: require('../assets/images/myspace-ico_0008.png'),
          title: '我的消息',
          link: 'myspace/message'
        },
        {
          src: require('../assets/images/myspace-ico_0009.png'),
          title: '风险评估',
          link: '/riskassess'
        }
      ],
      total: 0,
      income: 0
    }),
    computed: {
      totalMoney () {
        return this.total.toFixed(2)
      },
      incomeMoney () {
        return this.income.toFixed(2)
      }
    },
    methods: {
      handleClose () {
      },
      setting () {
      },
      quit () {
        localStorage.removeItem('login')
        this.$router.replace({path: 'login', query: {to: this.$route.fullPath}})
      }
    },
    created () {
      TweenMax.to(this.$data, 1, {total: 345736.78})
      TweenMax.to(this.$data, 1, {income: 35.77})
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .van-nav-bar {
    background-color: transparent;
    &::after {
      border-bottom: 0;
    }
  }

  .van-nav-bar ~ .content {
    top: 0;
  }

  .index-p1 {
    background: url("../assets/images/myspace-bg.png") no-repeat;
    background-size: 7.5rem 4.45rem;
    height: 6.4rem;
    width: 7.5rem;
    display: flex;
    flex-flow: row wrap;
    .index-p1-top {
      height: 3.7rem;
      width: 7.5rem;
      display: flex;
      align-items: center;
      padding: 1.5rem 0 .5rem .6rem;
      flex: none;
      .head {
        border: .07rem solid rgba(255, 255, 255, .5);
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        overflow: hidden;
        margin-right: .35rem;
        @include flex-center;
        img {
          width: 100%;
        }
      }
      h4 {
        font-size: .36rem;
        color: #fff;
      }
      .flag {
        color: #dbc9fa;
        font-size: .20rem;
        border: 1px solid #9169e2;
        background-color: rgba(84, 72, 193, .4);
        border-radius: .03rem;
        padding: 0 .1rem;
        margin-right: .2rem;
        height: .35rem;
        @include flex-center;
        .iconfont {
          font-size: .20rem;
          margin-right: .1rem;
          &.active {
            color: #54d36a;
          }
        }
      }
    }
    .index-p1-money {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: .37rem;
      width: 4.37rem;
      height: 2.3rem;
      border-radius: .1rem;
      background-color: #fff;
      box-shadow: 0 -.07rem .07rem -.02rem rgba(39, 117, 196, .44);
      border: 1px solid $border-color-default {
        right-style: dashed;
      }
      overflow: hidden;
      .chongzhi {
        height: .6rem;
        background: linear-gradient(135deg, #672fb6, #6f33b9 35%, #793cc3 35%, #5170d6);
        font-size: .3rem;
        color: #fff;
        @include flex-center;
      }
    }
    .index-p1-shouyi {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 2.35rem;
      height: 2.3rem;
      border-radius: .1rem;
      background-color: #fff;
      box-shadow: 0 -.07rem .07rem -.02rem rgba(39, 117, 196, .44);
      border: 1px solid $border-color-default {
        left: 0;
      }
      overflow: hidden;
      .tixian {
        height: .6rem;
        background: linear-gradient(120deg, #5170d6, #4492e2 40%, #3c86de 40%, #359fe6);
        font-size: .3rem;
        color: #fff;
        @include flex-center;
      }
    }
  }

  .myspace-grid {
    background-color: #fff;
    ul {
      display: flex;
      flex-flow: row wrap;
      border-bottom: 1px solid $border-color-default;
      li {
        height: 2rem;
        flex: 1 1 33%;
        flex-flow: column nowrap;
        border: 1px solid $border-color-default {
          bottom: 0;
          left: 0;
        }
      ;
        &:nth-child(3n) {
          border-right-width: 0;
        }
        @include flex-center;
        img {
          width: .9rem;
          height: .9rem;
        }
        p {
          color: #333;
        }
        a {
          width: 100%;
          height: 100%;
          flex-direction: column;
          @include flex-center;
        }
      }
    }
  }
</style>
