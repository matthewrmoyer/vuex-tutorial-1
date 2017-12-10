export const increment = context => context.commit('increment')
export const asyncIncrementBy = ( {commit}, payload) => {
    setTimeout(() => {
        commit('asyncIncrementBy', payload)
    }, payload.duration);
}

export const decrement = context => context.commit('decrement')
export const asyncDecrement = ({ commit }) => {
    setTimeout(() => {
        commit('decrement')
    }, 1000);
}