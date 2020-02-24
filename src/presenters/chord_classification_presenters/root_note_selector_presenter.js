

class RootNoteSelectorPresenter{
    constructor(model){
        this.root_note_selector_model = model
    }

    note_list_init(){
        return this.root_note_selector_model.note_list_init()
    }

    add_selected_note(note){
        this.root_note_selector_model.add_select_note(note)
    }

    remove_selected_note(note){
        this.root_note_selector_model.remove_selected_note(note)
    }
}

export {RootNoteSelectorPresenter}