import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
    value: 0
}

module = {
    state,
    getters,
    mutations,
    actions
}

export default module;