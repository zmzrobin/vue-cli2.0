<template>
  <div class="page">
    <Header fixed title="固定在顶部"></Header>
    <div class="content">
      <Button type="default">默认按钮</Button>
      <p class="font30">测试px2remLoader</p>
    </div>
  </div>
</template>

<script>
  import { Button } from 'vant'
  import { Header } from 'mint-ui'

  export default {
    name: 'index',
    components: {
      Button,
      Header
    }
  }
</script>

<style scoped>
  .index .weui-cells {
    font-size: .54rem;
  }

  .font30 {
    font-size: .3rem;
    border: 1px solid #dddddd;
    height: 1px;
  }
</style>
