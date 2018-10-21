import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    position: {
      customer: 'Schitz',
      projectName: 'lof'
    }
  },
  getters: {
    getPosition: state => {
      return state.position
    }
  },
  mutations: {
    setCustomerToWolfgang: (state, payload) => {
      state.position.customer = 'Wolfgang' + payload
    },
    setCustomerToSchitz: state => {
      state.position.customer = 'Schitz'
    }
  },
  actions: {
    setCustomerToWolfgang: ({ commit }, payload) => {
      commit('setCustomerToWolfgang', payload)
    },
    setCustomerToSchitz: ({ commit }) => {
      commit('setCustomerToSchitz')
    }
  }
})
