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
      (str) => {
        console.log('Login failed.')
        payload.callback(str)
      },
      payload.name,
      payload.pwd
    )
  },
  logUp ({commit}, payload) {
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
