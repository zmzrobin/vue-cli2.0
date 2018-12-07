<template>
  <div class="page" style="z-index:2;">
    <van-nav-bar :title="productInfo.productName" left-text="返回" left-arrow
                 @click-left="goPrePage"
                 @click-right="collect">
      <span slot="right" :class="['iconfont','icon-shoucang', iscollect?'co-7':'co-2']"></span>
    </van-nav-bar>
    <div class="van-tabbar van-tabbar--fixed">
      <van-button type="default" @click="showPlanning"><span class="iconfont icon-jisuanqi mr10"></span>收益计算
      </van-button>
      <van-button type="danger" @click="goPay">立即购买</van-button>
    </div>
    <div class="content">
      <div class="product-info">
        <ul class="p40">
          <li class="flex1">
            <p class="co-4 f48">{{parseFloat(productInfo.productProfit).toFixed(4)}}</p>
            <p class="co-999 f22">预期年化收益率</p>
          </li>
          <li class="flex1">
            <p class="co-b f48">{{productInfo.productHoldTime}}</p>
            <p class="co-999 f22">投资期限</p>
          </li>
        </ul>
        <ul>
          <li class="flex1">
            <p class="f28 co-fengxian-low"><span class="iconfont icon-73 mr10"></span>低风险</p>
          </li>
          <li class="flex1">
            <p class="f28 co-333">不可转让</p>
          </li>
          <li class="flex1">
            <p class="f28 co-333">{{saleAmount}}元起购</p>
          </li>
        </ul>
      </div>
      <div class="box mt30 echart">
        <div class="box-title">
          <h5>预约年化收益率</h5>
        </div>
        <div class="box-con">
          <van-tabs v-model="selected" @click="echartline">
            <van-tab id="1" title="近七日">
              <div class="svg">
                <canvas ref="mychart" style="width: 6.9rem; height: 2.8rem"></canvas>
              </div>
            </van-tab>
            <van-tab id="2" title="近一月">
              <div class="svg">
                <canvas ref="mychart" style="width: 6.9rem; height: 2.8rem"></canvas>
              </div>
            </van-tab>
            <van-tab id="3" title="近三月">
              <div class="svg">
                <canvas ref="mychart" style="width: 6.9rem; height: 2.8rem"></canvas>
              </div>
            </van-tab>
            <van-tab id="4" title="全部">
              <div class="svg">
                <canvas ref="mychart" style="width: 6.9rem; height: 2.8rem"></canvas>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="box mt30">
        <div class="box-title">
          <h5>交易规则</h5>
          <span class="more">查看详情</span>
        </div>
        <div class="box-con">
          <van-steps :active="active">
            <van-step><p class="h88">买入<br />2018-04-13</p></van-step>
            <van-step><p class="h88">产生收益<br />2018-04-13</p></van-step>
            <van-step><p class="h88">到期<br />2018-04-13</p></van-step>
          </van-steps>
        </div>
        <div class="info-cell">
          <p class="co-333 f24"><span class="co-1 mr10">●</span>本理财产品不可转让，到期前不可取出</p>
          <p class="co-333 f24"><span class="co-1 mr10">●</span>到期一个工作日后，资金自动到账</p>
        </div>
      </div>
      <div class="mt30">
        <van-cell title="产品介绍" to="/" is-link></van-cell>
        <van-cell title="基础属性" to="/" is-link></van-cell>
      </div>
      <div class="p40">
        <p class="co-666 f24 bc w500 divider">本产品由恒生金融提供</p>
        <div class="co-999 f22 tc mt20 flex-center">
          <p class="flex cross-center mr20"><span class="iconfont icon-zichan mr10"></span>优质资产</p>
          <p class="flex cross-center mr20"><span class="iconfont icon-shouyi mr10"></span>收益稳健</p>
          <p class="flex cross-center"><span class="iconfont icon-baozhanggou mr10"></span>100%兑付</p>
        </div>
      </div>
    </div>
    <van-popup v-model="popupVisible" position="bottom">
      <div class="planning">
        <div class="close" @click="closePlanning"></div>
        <div class="f30 co-666 pt50 tc">购买金额（元）</div>
        <div class="f70 co-9 p30 tc"><span class="linebdb pb10">{{planningMoney}}</span></div>
        <div class="ruler mt20">
          <div class="ruler-con">
            <ul ref="rulerScroll" @scroll.passive="rulerScroll" @touchend="rulerTouchEnd" @touchmove="rulerTouchMove">
              <li></li>
              <li v-for="item in rulerPart" :key="item"><span>{{(saleAmount-0) + (item-1)*rulerPartValue}}</span></li>
            </ul>
          </div>
          <div class="pointer"></div>
        </div>
        <div class="planning-block">
          <ul>
            <li v-for="(item,index) in moneyBlock" :key="index" :class="{active:index==2}"
                @click="goToBlockMoney(item)">
              {{item.substr(0,item.length-4)}}万
            </li>
          </ul>
        </div>
        <p class="f26 co-999 p30 tc">根据近七日年化收益率预计一年收益（元）</p>
        <p class="f40 co-333 tc">{{income}}</p>
        <div class="p20">
          <van-button type="danger" block @click="goPay">立即购买</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {Step, Steps, NavBar, Tab, Tabs, Popup, Cell, Button} from 'vant'
  import setRemFontSize from '../assets/js/rem.js'
  import {mapGetters} from 'vuex'
  import {TweenMax, Power2, TimelineLite} from 'gsap'

  const F2 = require('@antv/f2')

  export default {
    name: '',
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Popup.name]: Popup,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Cell.name]: Cell,
    },
    data: () => ({
      title: '一号理财产品',
      iscollect: false,
      selected: '0',
      active: 1,
      popupVisible: false,
      planningMoney: 0,
      htmlSize: '',
      scrollLeft: null,
      isTouch: false,
      moneyBlock: ['150000', '300000', '500000', '1000000', '1500000'],
      isScrollend: true
    }),
    computed: {
      income () {
        return (this.planningMoney * this.productInfo.productProfit / 100).toFixed(2)
      },
      productInfo () {
        return this.$store.getters['product/getproductById'](this.$route.query.id)
      },
      leftAmount () {
        return this.productInfo.leftAmount
      },
      saleAmount () {
        return this.productInfo.saleAmount
      },
      rulerPartValue () {
        return parseInt(String(10000000000).substr(0, this.leftAmount.length - 2))
      },
      rulerPart () {
        return parseInt((this.leftAmount - this.saleAmount) / this.rulerPartValue)
      }
//      ...mapGetters('product', {
//        productInfor: 'getproductById'
//      }),
    },
    methods: {
      goPrePage () {
        this.$router.go(-1)
      },
      collect () {
        this.iscollect = !this.iscollect
      },
      showPlanning () {
        this.popupVisible = true
      },
      closePlanning () {
        this.popupVisible = false
      },
      rulerScroll () {
        this.scrollLeft = this.$refs.rulerScroll.scrollLeft
        let scrollNum = Math.round(this.scrollLeft / this.htmlSize)
        console.log(scrollNum)
        this.planningMoney = scrollNum * this.rulerPartValue + (this.saleAmount - 0)
      },
      rulerReset (scrollNum) {
        if (!this.isTouch && this.isScrollend) {
          scrollNum = scrollNum || Math.round(this.scrollLeft / this.htmlSize) + 1
          TweenMax.to(this.$refs.rulerScroll, 0.2, {scrollLeft: this.htmlSize * (scrollNum - 1)})
        }
      },
      rulerTouchEnd () {
        this.isTouch = false
        console.log('TouchEnd')
        this.rulerReset()
      },
      rulerTouchMove () {
        this.isTouch = true
        this.isScrollend = false
        // this.rulerScroll()
        console.log('Move')
      },
      goPay () {
        this.$router.push({path: '/product/productdetail/pay', query: {id: this.$route.query.id}})
      },
      echartline () {
        this.$nextTick(function () {
          const data = [
            {
              date: '2017-06-05',
              value: 116
            }, {
              date: '2017-06-06',
              value: 129
            }, {
              date: '2017-06-07',
              value: 135
            }, {
              date: '2017-06-08',
              value: 86
            }, {
              date: '2017-06-09',
              value: 73
            }]
          var chart = new F2.Chart({
            id: this.$refs.mychart,
            pixelRatio: window.devicePixelRatio
          })
          chart.source(data, {
            value: {
              tickCount: 5,
              min: 0
            },
            date: {
              type: 'timeCat',
              range: [0, 1],
              tickCount: 3
            }
          })
          chart.tooltip({
            showItemMarker: false,
            onShow: function onShow (ev) {
              var items = ev.items
              items[0].name = items[0].title
            }
          })
          chart.axis('date', {
            label: function label (text, index, total) {
              var textCfg = {}
              if (index === 0) {
                textCfg.textAlign = 'left'
              } else if (index === total - 1) {
                textCfg.textAlign = 'right'
              }
              return textCfg
            }
          })
          chart.line().position('date*value')
          chart.render()
        })
      },
      goToBlockMoney (item) {
        let scrollNum = (item - this.saleAmount) / this.rulerPartValue + 1
        console.log(scrollNum)
        this.rulerReset(scrollNum)
      }
    },
    watch: {
      scrollLeft (value) {
        let self = this
        setTimeout(function () {
          if (self.$refs.rulerScroll.scrollLeft === value) {
            self.isScrollend = true
            self.rulerReset()
          }
        }, 300)
      }
    },
    filters: {},
    created () {
      this.htmlSize = setRemFontSize
      this.planningMoney = this.saleAmount
    },
    beforeShow () {
    },
    afterShow () {
    },
    mounted () {
      this.echartline()
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .product-info {
    background-color: #fff;
    ul {
      display: flex;
      align-items: stretch;
      padding: .2rem 0;
      position: relative;
      &:after {
        @include setLine($border-color-default, bottom);
      }
      li {
        position: relative;
        &:not(:last-child):after {
          @include setLine($border-color-default, right);
        }
        p {
          text-align: center;
        }
      }
    }
  }

  .box {
    padding: .3rem 0 0;
    .box-title {
      margin: 0 .3rem;
    }
    .box-con {
      padding: 0 .3rem;
    }
    .info-cell {
      padding: .3rem;
      position: relative;
      &:after {
        @include setLine(#eee, top)
      }
      p {
        line-height: 2;
        span {
          font-size: .22rem;
        }
      }
    }
  }

  .echart {
    height: 4.8rem;
    position: relative;
    .svg {
      height: 2.8rem;
    }
  }

  .van-tabbar {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    .van-button {
      flex: 1;
      border-radius: 0;
      font-size: .3rem;
      height: 1rem;
      border: 0;
      @include flex-center;
      &:first-child {
        flex: 0 1 auto;
        background-color: #000;
        color: #fff;
      }
    }
  }

  .planning {
    position: relative;
    width: 7.5rem;
    height: 7.6rem;
    .close {
      position: absolute;
      right: 0;
      top: 0;
      width: .8rem;
      height: .8rem;
      @include flex-center;
      @include close;
    }
    .ruler {
      height: 1.1rem;
      overflow: hidden;
      position: relative;
      .ruler-con {
        height: 1.1rem;
        overflow: hidden;
        border-bottom: 1px solid #999;
        ul {
          display: flex;
          flex-flow: row nowrap;
          align-items: flex-end;
          justify-content: flex-start;
          height: 1.22rem;
          overflow-x: auto;
          webkit-overflow-scrolling: touch;
          li {
            flex: none;
            width: 1rem;
            height: .8rem;
            background: url("../assets/images/ruler.png") left 0 bottom .12rem no-repeat;
            background-size: 100%;
            span {
              transform: translate(-50%, 0);
              display: inline-block;
            }
            &:nth-child(2n+1) span {
              transform: translate(-50%, -100%);
            }
            &:first-child {
              margin-left: 0;
            }
            &:first-child, &:last-child {
              width: 3.75rem;
              background: none;
            }
          }
        }
      }
      .pointer {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        background: url("../assets/images/ruler-pointer.png") no-repeat;
        background-size: 100%;
        width: .14rem;
        height: 1.07rem;
      }
    }
    .mint-button {
      position: absolute;
      bottom: 0;
      border-radius: 0;
      width: 7.5rem;
      height: 1rem;
    }
  }

  .planning-block {
    padding: .4rem .4rem 0;
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

</style>
