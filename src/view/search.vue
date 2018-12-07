<template>
  <div class="page" style="z-index: 2">
    <form action="/">
      <van-search placeholder="请输入商品名称"
                  :background="'#d9d9d9'"
                  v-model="value"
                  show-action
                  autofocus="true"
                  @search="onSearch"
                  @cancel="onCancel"
      />
    </form>
    <div class="content top88" v-if="value">
      <van-cell
        v-for="(item,index) in result"
        :key="index"
        :title="item"
        is-link>
      </van-cell>
    </div>
    <div class="content search-body" v-if="!value">
      <div class="search-history">
        <h5 v-if="history.length>0">
          <span>历史搜索</span>
          <span class="iconfont icon-shanchu" @click="deleteHistory"></span>
        </h5>
        <ul v-if="history.length>0">
          <li v-for="(item,index) in history" :key="index">{{item}}</li>
        </ul>
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
  </div>
</template>

<script>
  import { Search, Cell, Dialog } from 'vant'

  export default {
    name: '',
    components: {
      [Search.name]: Search,
      [Cell.name]: Cell
    },
    data: () => ({
      value: '',
      history: [
        '浙商国际',
        '浙商国际定向投资001号',
        '定向投资001号',
        '浙商国际定向投资002号'
      ],
      result: [
        '浙商国际',
        '浙商国际定向投资001号',
        '定向投资001号',
        '浙商国际定向投资002号'
      ]
    }),
    computed: {},
    methods: {
      deleteHistory () {
        Dialog.confirm({
          message: '确定删除历史搜索记录'
        }).then(() => {
          this.history = []
        }).catch(() => {
          // on cancel
        })
      },
      onCancel () {
        this.$router.go(-1)
      },
      onSearch () {

      }
    },
    watch: {},
    filters: {},
    created () {},
    beforeShow () {},
    afterShow () {}

  }
</script>

<style scoped lang="scss" type="text/scss">
  .top88 {
    top: .92rem;
  }

  .search-body {
    @extend .top88;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  .search-history {
    padding: .3rem .2rem;
    h5 {
      font-size: .24rem;
      padding-top: .2rem;
      margin-bottom: .3rem;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      border-bottom: 1px solid $border-color-default;
      padding-bottom: .1rem;
      margin-bottom: .2rem;
      @include last-child-none;
      li {
        flex: none;
        background-color: #eee;
        border-radius: .05rem;
        margin: 0 .2rem .2rem 0;
        padding: .1rem .2rem;
        font-size: .26rem;
        @include flex-center;
        &.active {
          @include selectIco(nth($color, 1));
          background-color: nth($color, 8);
        }
      }
    }
  }

</style>
