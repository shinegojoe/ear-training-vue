

class ChordTypeSelectorModel{
    constructor(store, chord_definition){
        this.store = store
        this.chord_definition = chord_definition
    }

    chord_type_init(){
        return Object.keys(this.chord_definition)
    }

    add_selected_chord_type(chord){
        this.store.commit('chord_classification/add_chord_type', chord)
    }

    remove_selected_chord_type(chord){
        this.store.commit('chord_classification/remove_chord_type', chord)
    }
}

export {ChordTypeSelectorModel}