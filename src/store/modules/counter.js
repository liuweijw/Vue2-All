import { COUNTER } from '../mutations-types'

// init state
const state = {
  num: 1
}

// init getters
const getters = {
  num: state => state.num,
  // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来 https://vuex.vuejs.org/zh-cn/modules.html
  switchNum (state, getters, rootState) {
    return state.num + rootState.count
  }
}

// init mutations
const mutations = {
  [COUNTER] (state, { num }) {
    state.num += num
  }
}

// actions
const actions = {
  // 根节点状态则为 context.rootState
  addnum ({ commit, state, rootState }, num) {
    num++
    commit(COUNTER, { num })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
