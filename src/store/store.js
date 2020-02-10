import Vue from 'vue'
import Vuex from 'vuex'
import ans_btns from './modules/ans_btns.js'
import find_key from './modules/find_key.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        ans_btns,
        find_key
    }
})