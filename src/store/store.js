import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters : {
      doubleCounter: state => state.counter * 2,
      stringCounter: state => state.counter + ' clicks'
    },
    mutations: {
        increment: state => state.counter++,
        decrement: state => state.counter--,
        asyncIncrementBy: (state, payload) => {
            state.counter += payload.by
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
        }
    }
})