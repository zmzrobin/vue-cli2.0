const state = () => ({
  risk: '中等风险',
  riskTotal: 3,
  riskContent: [
    {
      title: '您的学历是？',
      content: [
        {label: '小学', value: '1'},
        {label: '高中', value: '2'},
        {label: '中专', value: '3'},
        {label: '大学', value: '4'}
      ],
      value: ''
    },
    {
      title: '您的主要收入来源是？',
      content: [
        {label: '工资、劳务报酬', value: '1'},
        {label: '生产经营所得', value: '2'},
        {label: '利息股息证券等金融性资产收入', value: '3'},
        {label: '无固定收入', value: '4'}
      ],
      value: ''
    },
    {
      title: '您要照顾的人？',
      content: [
        {label: '照顾自己', value: '1'},
        {label: '照顾另一半', value: '2'},
        {label: '抚养孩子', value: '3'},
        {label: '赡养老人', value: '4'}
      ],
      value: ''
    }
  ],
  currentItem: 1,
})
const getters = {
  currentContent (state) {
    return state.riskContent[state.currentItem - 1]
  }
}
const mutations = {
  setCurrentItem (state, n) {
    state.currentItem = n
  },
  setValue (state, value) {
    state.riskContent[state.currentItem - 1].value = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
