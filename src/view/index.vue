<template>
  <div class="content">
    <div class="index-p1">
      <div class="index-p1-top">
        <h4>HI，麦兜</h4>
        <span class="flag">追求稳健</span>
        <span class="flag">理财老司机</span>
        <span class="iconfont icon-xiaoxi co-w"><mt-badge size="small" color="">30</mt-badge></span>
        <span class="iconfont icon-search co-w"></span>
      </div>
      <h4 class="f30 tc ">总资产(元)</h4>
      <h2>3924,755.97</h2>
      <h4 class="f30 co-w tc">昨日收益 +35.56</h4>
      <div class="index-p1-data">
        <h4>上线至今</h4>
        <h3>平台累计成交金额：245.99亿</h3>
        <ul>
          <li>
            <img src="../assets/images/index-p1-0001.png" alt="">
            <p class="f28 co-333">合法合规</p>
            <p class="f24 co-999 mt25">持有交易所牌照</p>
          </li>
          <li>
            <img src="../assets/images/index-p1-0002.png" alt="">
            <p class="f28 co-333">资金稳定</p>
            <p class="f24 co-999 mt25">背靠央企、国企</p>
          </li>
          <li>
            <img src="../assets/images/index-p1-0003.png" alt="">
            <p class="f28 co-333">安全规范</p>
            <p class="f24 co-999 mt25">银行三方存管</p>
          </li>
        </ul>
      </div>
      <div class="index-p1-info">
        <img src="../assets/images/logo.png" alt="">
        <p>恒生针对目前金融资产行业中服务金融机构、C 端用户的区别，研发出一套具有互联网金融创新、满足非标产品投行业务</p>
        <i class="more"></i>
      </div>
    </div>
    <div class="box mt30">
      <div class="box-title">
        <h5>人气最高</h5>
        <span class="more">更多</span>
      </div>
      <div class="box-con shadow">
        <p class="co-5 flex cross-center">
          <span class="iconfont icon-thumb-re-o mr10"></span>
          恒生电子联合蚂蚁金融强势推出
        </p>
        <p class="flex cross-center main-center p30">
          <span class="mr20 co-4 f48">4.4150%</span>
          <span class="co-999 f24">预期年化收益率</span>
        </p>
        <p class="flex-center">
          <span class="flag-fenxian-middle">中风险</span>
          <span class="flag-co-6">额度紧张</span>
        </p>
        <van-button type="primary" class="bgco-1 h80 mt30 linh100 f36" bottom-action>马上去看</van-button>
      </div>
    </div>
    <div class="box mt30">
      <div class="box-title">
        <h5>为理财老司机优选</h5>
        <span class="co-5 f24">您有一张2%收益提升券可使用</span>
      </div>
      <div class="box-con buy">
        <ul>
          <li class="w280">
            <p class="tc co-4 f36">4.4150%</p>
            <p class="tc co-999 f22">预期年化收益率</p>
          </li>
          <li class="flex1">
            <p class="f28">一号理财产品待售</p>
            <p class="f22 co-999"><span>期限30天</span> | <span>起购1000元</span> | <span>低风险</span></p>
          </li>
        </ul>
        <ul>
          <li class="w280">
            <p class="tc co-4 f36">4.4150%</p>
            <p class="tc co-999 f22">预期年化收益率</p>
          </li>
          <li class="flex1">
            <p class="f28">一号理财产品待售</p>
            <p class="f22 co-999"><span>期限30天</span> | <span>起购1000元</span> | <span>低风险</span></p>
          </li>
        </ul>
      </div>
      <div class="f26 p25 tc"><a href="#">点击查看更多</a></div>
    </div>
    <van-swipe class="mt30" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img width="100%" v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
    <div class="box mt30">
      <div class="box-title">
        <h5>精选转让</h5>
      </div>
      <div class="box-con index-zhuanrang">
        <ul>
          <li>
            <p class="co-b tc mb10">剩余15天</p>
            <p class="co-4 f36 mb10">4.4150%</p>
            <p class="co-999 f22 mb10">受让方预期收益</p>
            <p class="co-b f24">浙商国际定向投资001号</p>
          </li>
          <li>
            <p class="co-b tc mb10">剩余15天</p>
            <p class="co-4 f36 mb10">4.4150%</p>
            <p class="co-999 f22 mb10">受让方预期收益</p>
            <p class="co-b f24">浙商国际定向投资001号</p>
          </li>
        </ul>
      </div>
      <div class="f26 p25 tc"><a href="#">点击查看更多</a></div>
    </div>
    <div class="box mt30">
      <div class="box-title">
        <h5>投资热点</h5>
        <span class="more">更多</span>
      </div>
      <div class="box-con index-news">
        <ul>
          <li class="w250">
            <img src="/static/news-pic.png" alt="">
          </li>
          <li class="flex1">
            <p class="f28 mb10">年报揭秘6.8万亿险资投资逻辑:看重低估值蓝筹股</p>
            <p class="co-999 f22 tr">时事金融 | 4-10 10：06</p>
          </li>
        </ul>
        <ul>
          <li class="w250">
            <img src="/static/news-pic.png" alt="">
          </li>
          <li class="flex1">
            <p class="f28 mb10">年报揭秘6.8万亿险资投资逻辑:看重低估值蓝筹股</p>
            <p class="co-999 f22 tr">时事金融 | 4-10 10：06</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="p40">
      <p class="co-666 f24 bc w500 divider">恒生金融资产</p>
      <p class="co-999 f22 tc mt15">市场有风险，投资需谨慎</p>
    </div>
  </div>
</template>

<script>
  import { Button, Swipe, SwipeItem } from 'vant'
  import { Badge } from 'mint-ui'

  export default {
    components: {
      [Button.name]: Button,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Badge.name]: Badge
    },
    data: () => ({
      images: [
        '/static/lb.png',
        '/static/lb.png'
      ]
    })
  }
</script>

<style scoped lang="scss" type="text/scss">
  .index-p1 {
    background: url("../assets/images/index_bg.png") no-repeat;
    background-size: contain;
    height: 12.34rem;
    width: 7.5rem;
    .index-p1-top {
      height: 1.5rem;
      display: flex;
      align-items: center;
      padding: 0 .5rem;
      h4 {
        font-size: .3rem;
        text-align: center;
        color: #fff;
        font-weight: normal;
        margin-right: .2rem;
      }
      .flag {
        color: #dbc9fa;
        font-size: .18rem;
        border: 1px solid #9169e2;
        background-color: rgba(84, 72, 193, .4);
        border-radius: .03rem;
        padding: 0 .1rem;
        margin-right: .2rem;
        height: .32rem;
        @include flex-center;
      }
      .iconfont {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .mint-badge.is-size-small {
          border-radius: 0.16rem;
          font-size: 0.18rem;
          padding: 0.04rem 0.1rem;
        }
      }
    }
    h2 {
      color: #fff601;
      font-size: .6rem;
      padding: .25rem 0;
      text-align: center;
      line-height: 1;
      font-weight: normal;
    }
    h4 {
      color: #bcb1ee;
      font-weight: normal;
    }
    .index-p1-data {
      border-radius: .1rem;
      background-color: #ededf8;
      width: 6.7rem;
      height: 5.23rem;
      margin: .75rem auto 0;
      border-bottom: 1px dashed #3b6dc5;
      h4 {
        border-radius: .1rem .1rem 0 0;
        background-color: #4e57cb;
        height: .85rem;
        @include flex-center;
        color: #fff;
        transform: translate(0, -.1rem);
      }
      h3 {
        color: #fa5f1d;
        @include flex-center;
        height: 1.5rem;
        font-size: .36rem;
        font-weight: normal;
      }
      ul {
        display: flex;
        justify-content: space-around;
        li {
          text-align: center;
          width: 2rem;
          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
    }
    .index-p1-info {
      padding: .3rem .4rem;
      margin: 0 auto;
      border-radius: .1rem;
      background-color: #ededf8;
      width: 6.7rem;
      height: 2.2rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      position: relative;
      img {
        width: 1.4rem;
        height: .94rem;
      }
      p {
        font-size: .23rem;
        color: #333;
        width: 4.15rem;
      }
      i {
        position: absolute;
        background: url("../assets/images/index-p1-0004.png") no-repeat;
        background-size: 100%;
        width: .78rem;
        height: .78rem;
        bottom: 0;
        right: 0;
      }
    }
  }
</style>
