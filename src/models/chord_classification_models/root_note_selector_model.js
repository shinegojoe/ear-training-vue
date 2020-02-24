import { store } from "../../store/store"


class RootNoteSelectorModel{
    constructor(store, note_definition){
        this.store = store
        this.note_definition = note_definition
    }

    note_list_init(){
        const note_list = []
        const start_index = this.note_definition.note_to_index['C4']
        const end_index = this.note_definition.note_to_index['B4']
        for(let i=start_index; i<=end_index; i++){
            let note = this.note_definition.index_to_note[i]
            // note = note.replace('4', '')
            note_list.push(note)
        }
        return note_list
    }

    add_select_note(note){
        this.store.commit('chord_classification/add_root_note', note)
    }

    remove_selected_note(note){
        this.store.commit('chord_classification/remove_root_note', note)
    }
}

export {RootNoteSelectorModel}