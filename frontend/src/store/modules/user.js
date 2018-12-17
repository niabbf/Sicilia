import apiUser from '../../api/user'
import { setToken, removeToken } from '@/auth'
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
        console.log(str)
        payload.callback(str)
      },
      payload.name,
      payload.pwd
    )
  },
  signUp ({commit}, payload) {
    apiUser.signUp(payload.name, payload.pwd, payload.callback)
  },
  logOut ({commit}, payload) {
    apiUser.logUp(payload.cookie)
    removeToken()
    payload.callback()
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
