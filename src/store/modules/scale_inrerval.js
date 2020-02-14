

const state = {
    is_random_note: false,
    root_note: "C4",
    selected_scale_list: [],
    ans_scale: undefined,
    play_mode: 'individual',
    is_next: true


}

const mutations = {
    is_random_note(state, bool){
        state.is_random_note = bool
    },
    root_note(state, root_note){
        state.root_note = root_note
    },
    selected_scale_list(state, selected_scale_list){
        state.selected_scale_list = selected_scale_list
    },
    ans_scale(state, ans_scale){
        state.ans_scale = ans_scale
    },
    play_mode(state, play_mode){
        state.play_mode = play_mode
    },
    is_next(state, bool){
        state.is_next = bool
    }
    

}

export default{
    namespaced: true,
    state,
    mutations
}