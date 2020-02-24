import {array_op} from '@/helpers/array_operation.js'

const state = {
    selected_root_note_list: [],
    selected_chord_type_list: [],
    chord_type_ans: undefined,
    root_note_ans: undefined,
    is_help: false,
    help_msg: undefined,
    correct_count: 0,
    total_count: 0,

}

const getters = {

}

const mutations = {
    add_root_note: function(state, note){
        state.selected_root_note_list.push(note)
    },

    remove_root_note: function(state, note){
        array_op.remove_element(state.selected_root_note_list, note)
    },

    add_chord_type: function(state, chord){
        state.selected_chord_type_list.push(chord)
    },

    remove_chord_type: function(state, chord){
        array_op.remove_element(state.selected_chord_type_list, chord)
    },

    set_chord_type_ans: function(state, chord_type){
        state.chord_type_ans = chord_type
    },

    set_root_note_ans: function(state, root_note){
        state.root_note_ans = root_note
    },

    is_help: function(state, bool){
        state.is_help = bool
    },

    set_help_msg: function(state, msg){
        state.help_msg = msg
    },

    set_correct_count(state, correct_count){
        state.correct_count = correct_count
    },

    set_total_count(state, total_count){
        state.total_count = total_count
    },




}

export default{
    namespaced: true,
    state,
    mutations,
    getters
}