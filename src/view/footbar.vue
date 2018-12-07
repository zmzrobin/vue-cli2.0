<template>
  <tabbar v-model="selected">
    <tab-item id="index">
      <span slot="icon" class="iconfont icon-shouye"></span>
      首页
    </tab-item>
    <tab-item id="product">
      <span slot="icon" class="iconfont icon-jinronghangye"></span>
      产品
    </tab-item>
    <tab-item id="myspace">
      <span slot="icon" class="iconfont icon-wode"></span>
      我的
    </tab-item>
  </tabbar>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui'

  export default {
    name: '',
    components: {
      Tabbar,
      TabItem
    },
    data: () => ({
      selected: 'index'
    }),
    computed: {},
    methods: {},
    watch: {
      selected () {
        this.$router.push(this.selected)
      }
    },
    filters: {},
    created () {},
    beforeShow () {},
    afterShow () {},

  }
</script>

<style scoped lang="less" type="text/less">

</style>
