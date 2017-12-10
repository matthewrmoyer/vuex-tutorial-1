import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter/store'
import value from './modules/value/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    modules: {
        counter,
        value
    }
})