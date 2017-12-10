const state = {
    counter: 0    
}

const getters = {
    doubleCounter:  (state) => state.counter * 2,
    // export const stringCounter = (state) => state.counter + ' clicks'
    stringCounter: (state) => state.counter + ' clicks'
}

const mutations = {
    increment:  state => state.counter++,
    decrement:  state => state.counter--,
    asyncIncrementBy:  (state, payload) => {
        state.counter += payload.by
    }
}

const actions = {
    increment: (context) => context.commit('increment'),

    asyncIncrementBy: ({ commit }, payload) => {
        setTimeout(() => {
            commit('asyncIncrementBy', payload)
        }, payload.duration);
    },

    decrement: (context) => context.commit('decrement'),

    asyncDecrement: ({ commit }) => {
        setTimeout(() => {
            commit('decrement')
        }, 1000);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}