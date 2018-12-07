import mockData from '../../../static/mockData.json'

const state = () => (mockData)
const getters = {
  getproductById: (state) => (id) => {
    return state.subscribeProductBo.find(item => item.productCode === id)
  }
}
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
