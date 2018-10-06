import apiUser from '../../api/user'
import { setToken } from '@/auth'
// initial state
const state = {
  name: null,
  password: null
}

// getters
const getters = {

}

// actions
const actions = {
  loginUser ({commit}, payload) {
    apiUser.login(
      cookie => {
        commit('setName', payload.name)
        commit('setPassword', payload.pwd)
        setToken(cookie)
        payload.callback('success')
      },
      () => {
        console.log('Login failed.')
        payload.callback('fail')
      },
      payload.name,
      payload.pwd
    )
  }
}

// mutations
const mutations = {
  setName (state, name) {
    state.name = name
  },
  setPassword (state, pwd) {
    state.password = pwd
  },
  clearUser (state) {
    state.name = null
    state.password = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
