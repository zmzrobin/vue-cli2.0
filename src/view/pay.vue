<template>
  <div class="page" style="z-index:3;">
    <van-nav-bar title="买入" left-text="返回" left-arrow @click-left="goPrePage">
    </van-nav-bar>
    <div class="content">
      <div class="pay-info">
        <h5 class="co-333">资产权益转让产品180702001号</h5>
        <ul>
          <li class="co-666 f26">投资限额：单笔不限</li>
          <li>
            <div class="jindu">
              <p style="width: 30%;"></p>
            </div>
          </li>
          <li class="flex row main-between">
            <p class="co-666 f26">已投26.8%</p>
            <p class="co-666 f26">剩余可投：<span class="co-9 f28">86,720,299.86元</span></p>
          </li>
        </ul>
      </div>
      <div class="flex row main-between p30">
        <p class="f26 co-333">可用余额：6,900,1.00元</p>
        <a class="unline">去充值</a>
      </div>
      <div class="pay-con">
        <div class="flex row main-between pt30">
          <p class="f26 co-666">买入金额</p>
          <p class="f24 co-999">壹佰叁拾万元零整壹佰叁拾万元零整</p>
        </div>
        <div class="enter-moeny">
          <span class="f50 co-333 mr20">￥</span>
          <input type="text" class="flex1 f40" placeholder="起投金额1000">
        </div>
        <div class="planning-block">
          <ul>
            <li v-for="(item,index) in moneyBlock" :key="index" :class="{active:index==2}">{{item}}</li>
          </ul>
        </div>
        <p class="pt30 co-999">预计年化：<span class="co-2">8.40%</span></p>
        <p class="pt30 co-999 pb30">预计收益：<span class="co-2">7,720.86元</span></p>
        <div class="pay-money">
          <p class="f26 co-666">支付金额</p>
          <p class="f26 co-4">100,001.00元</p>
        </div>
      </div>
      <div class="p30">
        <p class="co-666 f26 flex cross-center"><span
          :class="['iconfont mr10', agree?'icon-xuanzhongfang co-9':'icon-weixuanzhong co-999']"
          @click="changeaAgree"></span>我已阅读并同意
          <a class="unline">产品风险揭示书及免责声明</a></p>
        <van-button block class="w mt30 bgco-9" type="danger">立即购买</van-button>
      </div>
      <div class="p40">
        <p class="co-666 f24 bc w500 divider">恒生金融资产</p>
        <p class="co-999 f22 tc mt15">市场有风险，投资需谨慎</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { NavBar, Button } from 'vant'

  export default {
    name: '',
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button
    },
    data: () => ({
      moneyBlock: ['1万', '5万', '10万', '30万', '50万'],
      agree: true
    }),
    computed: {},
    methods: {
      goPrePage () {
        this.$router.go(-1)
      },
      changeaAgree () {
        this.agree = !this.agree
      }
    },
    watch: {},
    filters: {},
    created () {},
    beforeShow () {},
    afterShow () {},

  }
</script>

<style scoped lang="scss" type="text/scss">
  .pay-info {
    padding: 0 .3rem;
    background-color: #fff;
    position: relative;
    &:after {
      @include setLine($border-color-default, bottom);
    }
    h5 {
      font-size: .3rem;
      height: .98rem;
      display: flex;
      align-items: center;
      position: relative;
      &:after {
        @include setLine($border-color-default, bottom);
      }
    }
    ul {
      display: flex;
      height: 1.9rem;
      flex-direction: column;
      justify-content: space-between;
      padding: .25rem 0;
    }
    .jindu {
      width: 6.8rem;
      height: .14rem;
      background-color: #eee;
      border-radius: .15rem;
      overflow: hidden;
      p {
        margin: 0;
        background-color: nth($color, 9);
        height: 100%;
      }
    }
  }

  .pay-con {
    padding: 0 .3rem;
    background-color: #fff;
    position: relative;
    &:before {
      @include setLine($border-color-default, top);
    }
    &:after {
      @include setLine($border-color-default, bottom);
    }
    .enter-moeny {
      display: flex;
      align-items: stretch;
      padding: .3rem 0 .2rem 0;
      position: relative;
      &:after {
        @include setLine($border-color-default, bottom);
      }
      input::placeholder {
        font-size: .28rem;
      }
    }
    .planning-block {
      padding-top: .3rem;
      ul {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: stretch;
        height: .78rem;
        border-bottom: 1px solid $border-color-default;
        @include last-child-none;
        li {
          flex: auto;
          margin-right: .2rem;
          border: 1px solid $border-color-default;
          border-radius: .05rem;
          padding: .1rem .2rem;
          font-size: .26rem;
          @include flex-center;
          flex-wrap: nowrap;
          @include selectIco($border-color-default, -1px, -1px);
          &.active {
            @include selectIco(nth($color, 9), -1px, -1px);
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .pay-money {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: .3rem 0;
      &:before {
        @include setLine($border-color-default, top);
      }
    }
  }
</style>
