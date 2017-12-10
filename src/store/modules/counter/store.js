import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
    counter: 0
}

const module = {
    state,
    getters,
    mutations,
    actions
}

export default module;