<template>
  <div class="page">
    <van-nav-bar title="注册" left-text="返回" left-arrow
                 @click-left="goNext">
    </van-nav-bar>
    <div class="content bgco-w">
      <form class="login-form">
        <van-field
          v-model="username"
          label="用户名"
          clearable
          left-icon=" iconfont icon-shouji co-999"
          placeholder="请输入手机"
          :error="submint && !username"
          :error-message="usernameerror"
        />
        <van-field
          v-model="code"
          label="验证码"
          clearable
          left-icon=" iconfont icon-yanzhengma co-999"
          placeholder="请输入验证码">
          <span slot="button" class="f28 co-3">发送验证码</span>
        </van-field>
        <van-field
          v-model="password"
          label="登录密码"
          clearable
          left-icon=" iconfont icon-mima co-999"
          placeholder="请设置登录密码"
          :error="submint && !password"
          :error-message="passworderror"
        />
        <van-field
          v-model="repassword"
          label="确认密码"
          clearable
          left-icon=" iconfont icon-mima co-999"
          placeholder="请确认密码"
          :error="submint && !password"
          :error-message="passworderror"
        />
        <div class="pl30 mt50">
          <van-button type="primary" class="bgco-7 h80 linh100 f36" bottom-action @click.native="goNext">注册
          </van-button>
        </div>
      </form>
      <router-link tag="div" class="tc p50 co-2 f28" :to="{path:'/login',query:{to:this.$route.query.to}}" replace>返回登录
      </router-link>
    </div>
  </div>
</template>

<script>
  import {NavBar, Field, Button} from 'vant'

  export default {
    components: {
      [NavBar.name]: NavBar,
      [Field.name]: Field,
      [Button.name]: Button
    },
    data: () => ({
      submint: false,
      username: '',
      tel: '',
      code: '',
      password: '',
      repassword: ''
    }),
    computed: {
      passworderror () {
        if (this.submint) {
          return '密码错误，请重新输入'
        }
      },
      usernameerror () {
        if (this.submint) {
          return '用户名不存在'
        }
      }
    },
    methods: {
      goNext () {
        this.$router.go(-1)
      }
    },
    watch: {},
    filters: {},
    created () {
    },
    beforeShow () {
    },
    afterShow () {
    },

  }
</script>

<style scoped lang="scss" type="text/scss">
  .login-form {
    padding: 0 .5rem 0 .2rem;
  }

  .van-cell {
    height: 1rem;
    display: flex;
    align-items: center;
  }

</style>
