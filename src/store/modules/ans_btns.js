import { store } from "../store"


const state = {
    selected_chord_type_list: [],
    selected_range_list: [],
    is_help: false,
    is_ans_show: false,
    ans_msg:'',
    chord_data: ["Test test"],
    total_count: 0,
    correct_count: 0
}


const helper_function = {
    remove_element: function(selected_list, name){
        for(let i=0; i<selected_list.length; i++){
            if(name === selected_list[i]){
                selected_list.splice(i, 1)
                break
                
            }
        }
    },
    get_random_element: function(selected_list){
        
        const index = Math.floor(Math.random() * selected_list.length)
        return selected_list[index]
    }
}

const getters = {
    // test: function(state){
    //     const range = helper_function.get_random_element(state.selected_range_list)
    //     const chord_type = helper_function.get_random_element(state.selected_chord_type_list)

    //     return range, chord_type
    // }
    chord_data: (state)=>()=>{
        const root_note = helper_function.get_random_element(state.selected_range_list)
        const chord_type = helper_function.get_random_element(state.selected_chord_type_list)

        return {root_note, chord_type}
    }

}

const mutations = {

    add_range: function(state, name){
       state.selected_range_list.push(name)
    },

    remove_range: function(state, name){
        helper_function.remove_element(state.selected_range_list, name)
    },

    add_ans_btn: function(state, name){
        state.selected_chord_type_list.push(name)
    },
    remove_ans_btn: function(state, name){
        helper_function.remove_element(state.selected_chord_type_list, name)
    },
    is_help: function(state, bool){
        state.is_help = bool
    },
    chord_data: function(state, chord_data){
        state.chord_data = chord_data
    },
    is_ans_show: function(state, bool){
        state.is_ans_show = bool
    },
    ans_msg: function(state, msg){
        state.ans_msg = msg
    },
    total_count: function(state, count){
        state.total_count = count
    },
    correct_count: function(state, count){
        state.correct_count = count
    }

}

export default{
    namespaced: true,
    state,
    mutations, 
    getters
}