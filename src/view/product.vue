<template>
  <div class="page">
    <router-view></router-view>
    <van-nav-bar title="投资"
                 @click-right="goSearchPage">
      <span class="iconfont icon-search co-w" slot="right"></span>
    </van-nav-bar>
    <div class="content product-tab">
      <van-tabs v-model="selected">
        <van-tab title="新品认购" id="1">
          <van-pull-refresh v-model="isrefresh" @refresh="onRefresh" class="refresh">
            <van-list
              v-model="loading"
              :finished="finished"
              :offset="50"
              @load="onLoad"
            >
              <div class="product-plan">
                <router-link tag="ul" :to="{ path: 'product/productdetail', query: { id: item.productCode }}"
                             v-for="item in productList"
                             :key="item.productCode" :class="{'end':item.progress==='100'}">
                  <li class="flex cross-center">
                    <span class="mr30 text-ellipsis-1">B219-中赢恒稳03号</span>
                    <span class="flag-co-3 f20">可转让</span>
                    <span class="flag-co-1 f20">每1个月付息</span>
                  </li>
                  <li class="flex cross-center main-between mt50">
                    <p class="co-4 f36">
                      <strong class="co-888">预计年化利率</strong>
                      <span class="f40 co-2">{{parseFloat(item.productProfit).toFixed(4)}}</span><span class="f26 co-2">%</span>
                    </p>
                    <p class="co-999 f22">
                      <strong>期限</strong>
                      <span class="f26 co-333">{{item.productHoldTime}}</span>
                    </p>
                    <p class="co-999 f22">
                      <strong class="tr" v-if="item.progress!=='100'">起购金额</strong>
                      <span class="f26 co-333" v-if="item.progress!=='100'">563.5万元</span>
                    </p>
                  </li>
                  <div class="svg" v-if="item.progress==='100'">
                    <svg width="1rem" height="1rem" viewBox="0 0 62 62" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <rect id="path-1" x="0" y="0" width="79.2" height="64.32"></rect>
                      </defs>
                      <g id="index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="产品-申购" transform="translate(-313.000000, -367.000000)">
                          <g id="Group-9" transform="translate(0.000000, 103.000000)">
                            <g id="盖章-copy-2" transform="translate(296.000000, 261.000000)">
                              <g id="Group">
                                <mask id="mask-2" fill="white">
                                  <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="Mask"></g>
                                <g mask="url(#mask-2)">
                                  <g transform="translate(18.240000, 3.840000)">
                                    <circle id="盖章" stroke="#DDDDDD" stroke-width="0.5" cx="37.68" cy="37.68"
                                            r="34.32"></circle>
                                    <circle id="盖章" stroke="#DDDDDD" stroke-width="0.96" cx="37.68" cy="37.68"
                                            r="37.68"></circle>
                                    <text id="已经售罄" stroke="none"
                                          transform="translate(35.122100, 31.275283) rotate(-46.000000) translate(-35.122100, -31.275283) "
                                          font-family="PingFangSC-Regular, PingFang SC" font-size="11.52"
                                          font-weight="normal">
                                      <tspan x="17.6221001" y="35.2752833" fill="#DDDDDD">已售罄</tspan>
                                    </text>
                                    <path d="M21.84,62.64 L62.64,18.96" id="Line-3" stroke="#DDDDDD" stroke-width="0.5"
                                          stroke-linecap="square"></path>
                                    <path
                                      d="M38.4138521,9.67874436 L11.5885453,35.5252758 C11.2259378,35.2223213 10.759059,35.04 10.2495968,35.04 C9.09554434,35.04 8.16,35.9755443 8.16,37.1295968 C8.16,38.2836492 9.09554434,39.2191935 10.2495968,39.2191935 C11.4036492,39.2191935 12.3391935,38.2836492 12.3391935,37.1295968 C12.3391935,36.6480316 12.1762927,36.2045141 11.90259,35.851143 L38.7420465,9.99097821 C39.0936176,10.2596178 39.5329717,10.4191935 40.0095968,10.4191935 C41.1636492,10.4191935 42.0991935,9.48364921 42.0991935,8.32959677 C42.0991935,7.17554434 41.1636492,6.24 40.0095968,6.24 C38.8555443,6.24 37.92,7.17554434 37.92,8.32959677 C37.92,8.84384854 38.1057654,9.31471246 38.4138521,9.67874436 Z"
                                      id="Combined-Shape" stroke="#DDDDDD" stroke-width="0.5"
                                      stroke-linecap="square"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </router-link>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="特约认购" id="2">
          <van-pull-refresh v-model="isrefresh" @refresh="onRefresh" class="refresh">
            <van-list
              v-model="loading"
              :finished="finished"
              :offset="50"
              @load="onLoad"
            >
              <div class="product-plan">
                <router-link tag="ul" :to="{ path: 'product/productdetail', query: { id: item.productCode }}"
                             v-for="item in productList"
                             :key="item.productCode" :class="{'end':item.progress==='100'}">
                  <li class="flex cross-center">
                    <span class="mr30 text-ellipsis-1">A59-中赢恒稳15号</span>
                    <span class="flag-co-3 f20">可转让</span>
                    <span class="flag-co-1 f20">每1个月付息</span>
                  </li>
                  <li class="flex cross-center main-between mt50">
                    <p class="co-4 f36">
                      <strong class="co-888">预计年化利率</strong>
                      <span class="f40 co-2">{{parseFloat(item.productProfit).toFixed(4)}}</span><span class="f26 co-2">%</span>
                    </p>
                    <p class="co-999 f22">
                      <strong>期限</strong>
                      <span class="f26 co-333">{{item.productHoldTime}}</span>
                    </p>
                    <p class="co-999 f22">
                      <strong class="tr" v-if="item.progress!=='100'">起购金额</strong>
                      <span class="f26 co-333" v-if="item.progress!=='100'">563.5万元</span>
                    </p>
                  </li>
                  <div class="svg" v-if="item.progress==='100'">
                    <svg width="1rem" height="1rem" viewBox="0 0 62 62" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <rect id="path-1" x="0" y="0" width="79.2" height="64.32"></rect>
                      </defs>
                      <g id="index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="产品-申购" transform="translate(-313.000000, -367.000000)">
                          <g id="Group-9" transform="translate(0.000000, 103.000000)">
                            <g id="盖章-copy-2" transform="translate(296.000000, 261.000000)">
                              <g id="Group">
                                <mask id="mask-2" fill="white">
                                  <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="Mask"></g>
                                <g mask="url(#mask-2)">
                                  <g transform="translate(18.240000, 3.840000)">
                                    <circle id="盖章" stroke="#DDDDDD" stroke-width="0.5" cx="37.68" cy="37.68"
                                            r="34.32"></circle>
                                    <circle id="盖章" stroke="#DDDDDD" stroke-width="0.96" cx="37.68" cy="37.68"
                                            r="37.68"></circle>
                                    <text id="已经售罄" stroke="none"
                                          transform="translate(35.122100, 31.275283) rotate(-46.000000) translate(-35.122100, -31.275283) "
                                          font-family="PingFangSC-Regular, PingFang SC" font-size="11.52"
                                          font-weight="normal">
                                      <tspan x="17.6221001" y="35.2752833" fill="#DDDDDD">已售罄</tspan>
                                    </text>
                                    <path d="M21.84,62.64 L62.64,18.96" id="Line-3" stroke="#DDDDDD" stroke-width="0.5"
                                          stroke-linecap="square"></path>
                                    <path
                                      d="M38.4138521,9.67874436 L11.5885453,35.5252758 C11.2259378,35.2223213 10.759059,35.04 10.2495968,35.04 C9.09554434,35.04 8.16,35.9755443 8.16,37.1295968 C8.16,38.2836492 9.09554434,39.2191935 10.2495968,39.2191935 C11.4036492,39.2191935 12.3391935,38.2836492 12.3391935,37.1295968 C12.3391935,36.6480316 12.1762927,36.2045141 11.90259,35.851143 L38.7420465,9.99097821 C39.0936176,10.2596178 39.5329717,10.4191935 40.0095968,10.4191935 C41.1636492,10.4191935 42.0991935,9.48364921 42.0991935,8.32959677 C42.0991935,7.17554434 41.1636492,6.24 40.0095968,6.24 C38.8555443,6.24 37.92,7.17554434 37.92,8.32959677 C37.92,8.84384854 38.1057654,9.31471246 38.4138521,9.67874436 Z"
                                      id="Combined-Shape" stroke="#DDDDDD" stroke-width="0.5"
                                      stroke-linecap="square"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </router-link>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="转让专区" id="3">
          <van-pull-refresh v-model="isrefresh" @refresh="onRefresh" class="refresh">
            <van-list
              v-model="loading"
              :finished="finished"
              :offset="50"
              @load="onLoad"
            >
              <div class="product-plan">
                <router-link tag="ul" :to="{ path: 'product/transferdetail', query: { id: item.productCode }}"
                             v-for="item in productList"
                             :key="item.productCode" :class="{'end':item.progress==='100'}">
                  <li class="co-4 f22 pb10">
                    交易编号：945830469503
                  </li>
                  <li class="flex cross-center">
                    <span class="mr30 text-ellipsis-1">A59-中赢恒稳15号</span>
                    <span class="flag-fengxian-low f20">低风险</span>
                    <span class="flag-co-1 f20">每1个月付息</span>
                  </li>
                  <li class="flex cross-center main-between mt30">
                    <p class="co-4 f36">
                      <strong class="co-888">预计年化利率</strong>
                      <span class="f40 co-2">{{parseFloat(item.productProfit).toFixed(4)}}</span><span class="f26 co-2">%</span>
                    </p>
                    <p class="co-999 f22">
                      <strong>剩余期限</strong>
                      <span class="f26 co-333">{{item.productHoldTime}}</span>
                    </p>
                    <p class="co-999 f22">
                      <strong class="tr" v-if="item.progress!=='100'">转让总价</strong>
                      <span class="f26 co-333" v-if="item.progress!=='100'">563.5万元</span>
                    </p>
                  </li>
                  <li class="flex cross-center main-between mt20">
                    <p class="f22 co-888">交易账号：user-mai</p>
                    <p class="f24 co-888">原始认购金：5000元</p>
                  </li>
                  <div class="svg" v-if="item.progress==='100'">
                    <svg width="1rem" height="1rem" viewBox="0 0 62 62" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <rect id="path-1" x="0" y="0" width="79.2" height="64.32"></rect>
                      </defs>
                      <g id="index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="产品-申购" transform="translate(-313.000000, -367.000000)">
                          <g id="Group-9" transform="translate(0.000000, 103.000000)">
                            <g id="盖章-copy-2" transform="translate(296.000000, 261.000000)">
                              <g id="Group">
                                <mask id="mask-2" fill="white">
                                  <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="Mask"></g>
                                <g mask="url(#mask-2)">
                                  <g transform="translate(18.240000, 3.840000)">
                                    <circle id="盖章" stroke="#DDDDDD" stroke-width="0.5" cx="37.68" cy="37.68"
                                            r="34.32"></circle>
                                    <circle id="盖章" stroke="#DDDDDD" stroke-width="0.96" cx="37.68" cy="37.68"
                                            r="37.68"></circle>
                                    <text id="已经售罄" stroke="none"
                                          transform="translate(35.122100, 31.275283) rotate(-46.000000) translate(-35.122100, -31.275283) "
                                          font-family="PingFangSC-Regular, PingFang SC" font-size="11.52"
                                          font-weight="normal">
                                      <tspan x="17.6221001" y="35.2752833" fill="#DDDDDD">已转让</tspan>
                                    </text>
                                    <path d="M21.84,62.64 L62.64,18.96" id="Line-3" stroke="#DDDDDD" stroke-width="0.5"
                                          stroke-linecap="square"></path>
                                    <path
                                      d="M38.4138521,9.67874436 L11.5885453,35.5252758 C11.2259378,35.2223213 10.759059,35.04 10.2495968,35.04 C9.09554434,35.04 8.16,35.9755443 8.16,37.1295968 C8.16,38.2836492 9.09554434,39.2191935 10.2495968,39.2191935 C11.4036492,39.2191935 12.3391935,38.2836492 12.3391935,37.1295968 C12.3391935,36.6480316 12.1762927,36.2045141 11.90259,35.851143 L38.7420465,9.99097821 C39.0936176,10.2596178 39.5329717,10.4191935 40.0095968,10.4191935 C41.1636492,10.4191935 42.0991935,9.48364921 42.0991935,8.32959677 C42.0991935,7.17554434 41.1636492,6.24 40.0095968,6.24 C38.8555443,6.24 37.92,7.17554434 37.92,8.32959677 C37.92,8.84384854 38.1057654,9.31471246 38.4138521,9.67874436 Z"
                                      id="Combined-Shape" stroke="#DDDDDD" stroke-width="0.5"
                                      stroke-linecap="square"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </router-link>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="协议买入" id="4">
          <div class="product-plan pt30">
            <div class="search">
              <van-search placeholder="请输入搜索关键词" :background="'#fff'" v-model="searchvalue" />
            </div>
            <div class="tc pt30 pb30 co-2 linebdb">搜索结果：0092010111982</div>
              <van-list
                v-model="loading"
                :finished="finished"
                :offset="50"
                @load="onLoad"
              >
                <router-link tag="ul" :to="{ path: 'product/productdetail', query: { id: item.productCode }}"
                             v-for="item in productList"
                             :key="item.productCode" v-if="item.progress!=='100'">
                  <li class="co-4 f22 pb10">
                    交易编号：945830469503
                  </li>
                  <li class="flex cross-center">
                    <span class="mr30 text-ellipsis-1">A59-中赢恒稳15号</span>
                    <span class="flag-fengxian-low f20">低风险</span>
                    <span class="flag-co-1 f20">每1个月付息</span>
                  </li>
                  <li class="flex cross-center main-between mt30">
                    <p class="co-4 f36">
                      <strong class="co-888">预计年化利率</strong>
                      <span class="f40 co-2">{{parseFloat(item.productProfit).toFixed(4)}}</span><span class="f26 co-2">%</span>
                    </p>
                    <p class="co-999 f22">
                      <strong>剩余期限</strong>
                      <span class="f26 co-333">{{item.productHoldTime}}</span>
                    </p>
                    <p class="co-999 f22">
                      <strong class="tr" v-if="item.progress!=='100'">转让总价</strong>
                      <span class="f26 co-333" v-if="item.progress!=='100'">563.5万元</span>
                    </p>
                  </li>
                  <li class="flex cross-center main-between mt20">
                    <p class="f22 co-888">原始认购金：5000元</p>
                    <p class="f24 co-888"></p>
                  </li>
                  <div class="svg" v-if="item.progress!=='100'">
                    <svg width=".8rem" height="1rem" viewBox="0 0 52 42" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <rect id="path-1" x="0" y="0" width="79.2" height="64.32"></rect>
                      </defs>
                      <g id="index" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="产品-申购" transform="translate(-313.000000, -367.000000)">
                          <g id="Group-9" transform="translate(0.000000, 103.000000)">
                            <g id="盖章-copy-2" transform="translate(296.000000, 261.000000)">
                              <g id="Group">
                                <mask id="mask-2" fill="white">
                                  <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="Mask"></g>
                                <g mask="url(#mask-2)">
                                  <g transform="translate(18.240000, 3.840000)">
                                    <circle id="盖章" stroke="#5588ff" stroke-width="0.5" cx="37.68" cy="37.68"
                                            r="34.32"></circle>
                                    <circle id="盖章" stroke="#5588ff" stroke-width="0.96" cx="37.68" cy="37.68"
                                            r="37.68"></circle>
                                    <text id="已经售罄" stroke="none"
                                          transform="translate(35.122100, 31.275283) rotate(-46.000000) translate(-35.122100, -31.275283) "
                                          font-family="PingFangSC-Regular, PingFang SC" font-size="11.52"
                                          font-weight="normal">
                                      <tspan x="17.6221001" y="35.2752833" fill="#5588ff">在售中</tspan>
                                    </text>
                                    <path d="M21.84,62.64 L62.64,18.96" id="Line-3" stroke="#5588ff" stroke-width="0.5"
                                          stroke-linecap="square"></path>
                                    <path
                                      d="M38.4138521,9.67874436 L11.5885453,35.5252758 C11.2259378,35.2223213 10.759059,35.04 10.2495968,35.04 C9.09554434,35.04 8.16,35.9755443 8.16,37.1295968 C8.16,38.2836492 9.09554434,39.2191935 10.2495968,39.2191935 C11.4036492,39.2191935 12.3391935,38.2836492 12.3391935,37.1295968 C12.3391935,36.6480316 12.1762927,36.2045141 11.90259,35.851143 L38.7420465,9.99097821 C39.0936176,10.2596178 39.5329717,10.4191935 40.0095968,10.4191935 C41.1636492,10.4191935 42.0991935,9.48364921 42.0991935,8.32959677 C42.0991935,7.17554434 41.1636492,6.24 40.0095968,6.24 C38.8555443,6.24 37.92,7.17554434 37.92,8.32959677 C37.92,8.84384854 38.1057654,9.31471246 38.4138521,9.67874436 Z"
                                      id="Combined-Shape" stroke="#5588ff" stroke-width="0.5"
                                      stroke-linecap="square"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </router-link>
              </van-list>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import { NavBar, PullRefresh, list, Button, Tab, Tabs, Search } from 'vant'
  import { createNamespacedHelpers } from 'vuex'

  const {mapState, mapGetters, mapMutations} = createNamespacedHelpers('product')
  export default {
    name: '',
    components: {
      [NavBar.name]: NavBar,
      [Button.name]: Button,
      [Tabs.name]: Tabs,
      [Tab.name]: Tab,
      [Search.name]: Search,
      [PullRefresh.name]: PullRefresh,
      [list.name]: list
    },
    data: () => ({
      selected: '0',
      isrefresh: false,
      loading: false,
      finished: false,
      num: 6,
      transfer: false,
      searchvalue: ''
    }),
    computed: {
      ...mapState({
        productList: state => state.subscribeProductBo
      }),
      ...mapGetters({})
    },
    methods: {
      goSearchPage () {
        this.$router.push('product/search')
      },
      onRefresh () {
        setTimeout(() => {
          this.isrefresh = false
        }, 500)
      },
      onLoad () {
        const self = this
        setTimeout(() => {
          self.num += 1
          this.loading = false
          if (self.num >= 10) {
            this.finished = true
          }
        }, 500)
      },
      showTransfer () {
        const self = this
        this.transfer = !this.transfer
        setTimeout(() => {
            self.transfer = false
          }, 2000
        )
      }
    },
    watch: {},
    filters: {},
    created () {
    },
    beforeShow () {
    },
    afterShow () {
    }

  }
</script>

<style scoped lang="scss" type="text/scss">
  .refresh {
    min-height: 100%;
    height: auto
  }

  .search {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    .van-search{
      padding: 0.10rem 0rem;
    }
  }
</style>
