<template>
  <van-tabbar v-model="selected">
    <van-tabbar-item to="index">
      <span>首页</span>
      <span slot="icon" class="iconfont icon-shouye"></span>
    </van-tabbar-item>
    <van-tabbar-item to="product">
      <span>投资</span>
      <span slot="icon" class="iconfont icon-touzilicai"></span>
    </van-tabbar-item>
    <van-tabbar-item dot to="myspace">
      <span>我的</span>
      <span slot="icon" class="iconfont icon-guanliyuan"></span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant'

  const tabBar = ['index', 'product', 'news', 'myspace']
  export default {
    name: '',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data: () => ({
      selected: 0
    }),
    computed: {},
    methods: {},
    watch: {},
    filters: {},
    created () {
      this.selected = tabBar.findIndex(item => item === this.$route.name)
    }

  }
</script>
