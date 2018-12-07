<template>
  <div class="page">
    <van-nav-bar title="投资资讯"></van-nav-bar>
    <router-view></router-view>
    <div class="content">
      <van-pull-refresh v-model="isrefresh" @refresh="onRefresh" class="refresh">
        <div class="news" v-for="item in cpnews" :key="item.id">
          <p class="flex-center mb20"><span class="flag-co-ddd mr0">{{item.time}}</span></p>
          <router-link tag="ul" :to="{ path: 'news/newsinfo', query: { id: item.id }}">
            <img src="/static/pic.png" class="mb20" alt="">
            <li class="f30 text-ellipsis-1">
              年报揭秘
            </li>
            <li class="f24 co-666 text-ellipsis-2">
              年报揭秘6.8万亿险资投资逻辑:看重低估值蓝筹股，年报揭秘6.8万亿险资投资逻辑:看重低估值蓝筹股
            </li>
            <li class="co-999 f22 tr">
              文章来源: {{item.from}}
            </li>
          </router-link>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
  import { NavBar, PullRefresh } from 'vant'

  export default {
    name: '',
    components: {
      [NavBar.name]: NavBar,
      [PullRefresh.name]: PullRefresh
    },
    data: () => ({
      isrefresh: false,
      news: [
        {
          id: 1,
          from: '时事金融',
          time: '2018-04-10 10：06'
        },
        {
          id: 2,
          from: '时事金融',
          time: '2018-04-9 10：06'
        },
        {
          id: 3,
          from: '时事金融',
          time: '2018-04-8 10：06'
        },
        {
          id: 4,
          from: '时事金融',
          time: '2018-04-7 10：06'
        }
      ],
      num: 1
    }),
    computed: {
      cpnews () {
        const {news, num} = this
        return news.slice(0, num)
      }
    },
    methods: {
      onRefresh () {
        setTimeout(() => {
          this.isrefresh = false
          this.num += 1
        }, 500)
      },
    },
    watch: {},
    filters: {},
    created () {},
    beforeShow () {},
    afterShow () {},

  }
</script>
<style scoped type="text/scss" lang="scss">
  .refresh {
    min-height: 100%;
    height: auto
  }

  .news {
    padding-top: .2rem;
    ul {
      background-color: #fff;
      width: 7rem;
      margin: 0 auto .3rem;
      padding-bottom: .2rem;
      border: 1px solid $border-color-default;
      border-radius: .15rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      overflow: hidden;
      img {
        width: 100%;
      }
      li {
        margin: .1rem .2rem;
      }
    }
  }

</style>
