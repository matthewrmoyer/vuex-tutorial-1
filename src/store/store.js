import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters : {
      doubleCounter: state => state.counter * 2,
      stringCounter: state => state.counter + ' clicks',
      value: state => state.value
    },
    mutations: {
        increment: state => state.counter++,
        decrement: state => state.counter--,
        asyncIncrementBy: (state, payload) => {
            state.counter += payload.by
        },
        updateValue: (state, payload) => {
            state.value = payload
        }
    },
    actions: {
        increment: context => context.commit('increment'),
        asyncIncrementBy: ( {commit}, payload) => {
            setTimeout(() => {
                commit('asyncIncrementBy', payload)
            }, payload.duration);
        },

        decrement: context => context.commit('decrement'),
        asyncDecrement: ({ commit }) => {
            setTimeout(() => {
                commit('decrement')
            }, 1000);
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload)
        }
    }
})