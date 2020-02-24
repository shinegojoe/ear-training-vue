

class ControlBtnsModel{
    constructor(store, array_op, note_definition, chord_definition){
        this.store = store
        this.array_op = array_op
        this.note_definition = note_definition
        this.chord_definition = chord_definition
        this.is_next = true
        this.audio_list = undefined
    }

    _get_random_chord_type(){
        const selected_chord_type_list = this.store.state.chord_classification.selected_chord_type_list
        // console.log('selected_chord_type_list', selected_chord_type_list)
        const chord_type = this.array_op.get_random_element(selected_chord_type_list)
        return chord_type
    }

    _get_random_root_note(){
        const selected_root_note_list = this.store.state.chord_classification.selected_root_note_list
        const root_note = this.array_op.get_random_element(selected_root_note_list)
        return root_note
    }

    _get_audio_list(root_note, chord_type){
        const root_note_index = this.note_definition.note_to_index[root_note]
        const chord_type_index_list = this.chord_definition[chord_type]
        const audio_list = []
        for(let chord_type_index of chord_type_index_list){
            let note = this.note_definition.index_to_note[chord_type_index + root_note_index]
            note = note.replace('#', 'Sharp')

            const path = `./assert/sounds/piano/${note}.mp3`
            const audio = new Howl({
                src: path
            })
            audio_list.push(audio)
        }
        return audio_list
    }

    _play_audio(audio_list){
        for(let audio of audio_list){
            audio.play()
        }
    }

    _set_chord_type_ans(chord_type){
        this.store.commit('chord_classification/set_chord_type_ans', chord_type)
    }

    _set_root_note_ans(root_note){
        this.store.commit('chord_classification/set_root_note_ans', root_note)
    }

    _get_chord_type_ans(){
        return this.store.state.chord_classification.chord_type_ans
    }

    _get_root_note_ans(){
        return this.store.state.chord_classification.root_note_ans
    }

    play(){  
        if(this.is_next){
            const chord_type = this._get_random_chord_type()
            const root_note = this._get_random_root_note()
            this._set_chord_type_ans(chord_type)
            this._set_root_note_ans(root_note)
            this.audio_list = this._get_audio_list(root_note, chord_type)
        }
        this._play_audio(this.audio_list)
        this.is_next = false
    }

    help(){
        const chord_type = this._get_chord_type_ans()
        let root_note = this._get_root_note_ans()
        root_note = root_note.replace('4', '')
        const ans = `${root_note}${chord_type}`
        this.store.commit('chord_classification/set_help_msg', ans)
        this.store.commit('chord_classification/is_help', true)

    }

    next(){
        this.is_next = true
        this.play()
    }
}

export {ControlBtnsModel}