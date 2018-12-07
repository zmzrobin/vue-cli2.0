<template>
  <div>
    <h4>{{title}}</h4>
    <div class="input">
      <input type="text" v-model.lazy="inputText" placeholder="输入TODO，回车确定" @keyup.enter="addList($event)">
    </div>
    <div class="list">
      <h5>待处理列表</h5>
      <ul>
        <li v-for="(item,index) in todoList" :key="index">
          <input type="checkbox" v-model="checkBox" :value="item.title" :key="index" checked="item.checked && checked">
          <span>{{item.title}}</span>
          <a href="javascript:void(0)" @click="del(item)">删除</a>
        </li>
      </ul>
    </div>
    <div class="list">
      <h5>已完成列表</h5>
      <ul>
        <li v-for="(item,index) in completeList" :key="index">
          <input type="checkbox" v-model="checkBox" :value="item.title" :key="index" checked="item.checked && checked">
          <span>{{item.title}}</span>
          <a href="javascript:void(0)" @click="back(item)">还原</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapGetters, mapMutations} = createNamespacedHelpers('todo')
  export default {
    name: 'todo',
    components: {},
    data: () => ({
      title: '测试列表',
      inputText: '',
    }),
    computed: {
      checkBox: {
        get () {
          return this.$store.state.todo.checkbox
        },
        set (value) {
          this.$store.commit('todo/updateCheckbox', value)
        }
      },
      ...mapGetters([
        'todoList',
        'completeList',
      ])
    },
    methods: {
      addList () {
        const {inputText} = this
        this.$store.commit('todo/addlist', inputText)
      },
      ...mapMutations([
        'del',
        'back',
      ]),
    },
    watch: {
      checkBox (value) {
        this.$store.commit('todo/updateCheckbox', value)
      }
    },
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
  .input {
    padding: 30px;
    text-align: left;
    input {
      border: 1px solid $input-border-color-default;
      width: 300px;
      height: 40px;
      padding: 5px;
    }
  }

  .list {
    border: 1px solid #ddd;
    border-width: 1px 0;
    margin-bottom: 20px;
    h5 {
      font-size: 17px;
      padding: 10px 0;
    }
    ul li {
      padding: 10px 30px;
      text-align: left;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 17px;
        flex: 1;
      }
      a {
        background-color: #ffff00;
        display: inline-block;
        padding: 3px 15px;
        border-radius: 4px;
        font-size: 13px;
      }
    }
  }
</style>
