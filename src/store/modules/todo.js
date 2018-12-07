const state = {
  list: [
    {
      title: '12133',
      checked: false,
    },
    {
      title: '1211133',
      checked: false,
    },
    {
      title: '1242342133',
      checked: false,
    },
    {
      title: '1215633',
      checked: false,
    }
  ],
  checkbox: [],
}
const getters = {
  todoList: (state, getters) => {
    return state.list.filter(item => !item.checked)
  },
  completeList: (state, getters) => {
    return state.list.filter(item => item.checked)
  }
}
const mutations = {
  addlist (state, payload) {
    if (state.list.find(item => item.title === payload)) {
      return
    }
    const newitem = {
      title: payload,
      checked: false
    }
    state.list.push(newitem)
  },
  del (state, payload) {
    state.list.forEach((item, index) => {
      if (item.title !== payload.title) {
        return
      }
      state.list.splice(index, 1)
    })
  },
  updateCheckbox (state, value) {
    state.checkbox = value
    state.list.forEach(function (item) {
      state.checkbox.includes(item.title)
        ? (item.checked = true)
        : (item.checked = false)
    })
  },
  back (state, payload) {
    state.checkbox.forEach((item, index) => {
      if (item !== payload.title) {
        return
      }
      state.checkbox.splice(index, 1)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
