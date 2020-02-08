import Vue from 'vue'
import Vuex from 'vuex'
import ans_btns from './modules/ans_btns.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        ans_btns
    }
})