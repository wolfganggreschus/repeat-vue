import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    position: []
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
    },
    addPosition: (state, payload) => {
      state.position.push(payload)
      console.log('mutation executed customer' + payload.customer)
    }
  },
  actions: {
    setCustomerToWolfgang: ({ commit }, payload) => {
      commit('setCustomerToWolfgang', payload)
    },
    setCustomerToSchitz: ({ commit }) => {
      commit('setCustomerToSchitz')
    },
    addPosition: ({ commit }, payload) => {
      commit('addPosition', payload)
      console.log('action executed customer' + payload.customer)
    }
  }
})
