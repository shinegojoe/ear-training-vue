import Vue from 'vue'
import Vuex from 'vuex'
import ans_btns from './modules/ans_btns.js'
import find_key from './modules/find_key.js'
import scale_interval from './modules/scale_inrerval.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        ans_btns,
        find_key,
        scale_interval
    }
})