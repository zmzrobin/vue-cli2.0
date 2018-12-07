<template>
  <div class="page">
    <van-nav-bar left-text="返回" left-arrow
                 @click-left="goBack">
    </van-nav-bar>
    <div class="content bgco-w">
      <div class="login">
        <img src="../assets/images/logo1.png" alt="" />
        <form class="login-form">
          <van-field
            v-model="username"
            label="用户名"
            clearable
            left-icon=" iconfont icon-shouji co-2"
            placeholder="绑定的手机号码"
            :error="submint && !username"
            :error-message="usernameerror"
          />
          <van-field
            v-model="password"
            label="密码"
            clearable
            left-icon=" iconfont icon-mima co-2"
            placeholder="请输入密码"
            :error="submint && !password"
            :error-message="passworderror"
          />
          <router-link tag="div" class="tr p20 co-2 f26" to="">忘记密码?</router-link>
          <div class="pl30">
            <van-button type="primary" class="bgco-1 h80 mt30 linh100 f36" bottom-action @click.native="goNext">登录
            </van-button>
          </div>
        </form>
        <router-link tag="div" class="tc p50 co-2 f28" :to="{path:'login/register',query:{to:this.$route.query.to}}"
                     replace>创建账号
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {NavBar, Field, Button} from 'vant'

  export default {
    name: '',
    components: {
      [NavBar.name]: NavBar,
      [Field.name]: Field,
      [Button.name]: Button
    },
    data: () => ({
      submint: false,
      username: '',
      password: '',
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
        localStorage.setItem('login', true)
        this.$router.replace({path: this.$route.query.to})
      },
      goBack () {
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
  .van-nav-bar {
    background-color: transparent;
    &::after {
      border-bottom: 0;
    }
    & ~ .content {
      top: 0;
    }
  }

  .login {
    background: url("../assets/images/login-bg.png") no-repeat;
    padding-top: 6.3rem;
    background-size: 100%;
    position: relative;
    img {
      position: absolute;
      top: 2.9rem;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2.2rem;
    }
    .login-form {
      padding: 0 .5rem 0 .2rem;
      .van-cell {
        height: 1rem;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
