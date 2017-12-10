export const increment =  state => state.counter++
export const decrement =  state => state.counter--
export const asyncIncrementBy =  (state, payload) => {
    state.counter += payload.by
}
