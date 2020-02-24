

class ChordTypeSelectorPresenter{
    constructor(model){
        this.chord_type_selector_model = model
    }

    chord_type_init(){
        return this.chord_type_selector_model.chord_type_init()
    }

    add_selected_chord_type(chord){
        return this.chord_type_selector_model.add_selected_chord_type(chord)
    }

    remove_selected_chord_type(chord){
        this.chord_type_selector_model.remove_selected_chord_type(chord)
    }
}

export {ChordTypeSelectorPresenter}