

const state = {
    play_time_interval: 0,
    note_list: undefined,
    start_note: 'E4',
    end_note: 'E4'

}

const mutations = {
    play_time_interval(state, val){
        state.play_time_interval = val
    },

    note_list(state, note_list){
        state.note_list = note_list
    },

    start_note(state, val){
        state.start_note = val
    },

    end_note(state, val){
        state.end_note = val
    }
}

export default{
    namespaced: true,
    state, 
    mutations
}