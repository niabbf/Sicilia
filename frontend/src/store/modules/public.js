import apiPublic from '@/api/public'
import _ from 'lodash'

const state = {
  publicLocatedTasks: [],
  publicDeadlineTasks: []
}

const getters = {

}

// actions
const actions = {
  getPublicTasks ({commit}, payload) {
    apiPublic.getPublicTasks(
      tasks => {
        if (payload.location !== undefined) {
          commit('addLocatedTasks', tasks)
        } else {
          commit('addDeadlineTasks', tasks)
        }
        payload.callback('success')
      },
      msg => {
        console.log(msg)
        payload.callback(msg)
      },
      payload.begin,
      payload.length,
      payload.location
    )
  },
  resetPublicTasks ({commit}, payload) {
    apiPublic.getPublicTasks(
      tasks => {
        if (payload.location !== undefined) {
          commit('setLocatedTasks', tasks)
        } else {
          commit('setDeadlineTasks', tasks)
        }
        payload.callback('success')
      },
      msg => {
        console.log(msg)
        payload.callback(msg)
      },
      payload.begin,
      payload.length,
      payload.location
    )
  }
}

// mutations
const mutations = {
  addLocatedTasks (state, locTasks) {
    state.publicLocatedTasks = _.concat(state.publicLocatedTasks, locTasks)
  },
  addDeadlineTasks (state, ddlTasks) {
    state.publicDeadlineTasks = _.concat(state.publicDeadlineTasks, ddlTasks)
  },
  setLocatedTasks (state, locTasks) {
    state.publicLocatedTasks = locTasks
  },
  setDeadlineTasks (state, ddlTasks) {
    state.publicDeadlineTasks = ddlTasks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
