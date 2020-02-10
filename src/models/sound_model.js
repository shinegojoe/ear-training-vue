import {note_definition, chord_definition} from '@/helpers/note_definition.js'
import {Howl, Howler} from 'howler'


class SoundModel{
    constructor(){

    }

    _get_play_note(chord_type, root_note){
        const note_index_list = chord_definition[chord_type]
        const root_index = note_definition.note_to_index[root_note]
        const note_list = []
        for(let note_index of note_index_list){
            let note = note_definition.index_to_note[root_index+note_index]
            note = note.replace("#", "Sharp")
            note_list.push(note)
        }
        return note_list
    }

    get_audio(chord_type, root_note){
        console.log("chord_type", chord_type, "root_note", root_note)
        console.log(note_definition)
        // let path = "assert/sounds/piano/A4.mp3"
        const audio_list = []
        const note_list = this._get_play_note(chord_type, root_note)
        console.log('note_list', note_list)
        for(let note of note_list){
            const path = `assert/sounds/piano/${note}.mp3`
            // const audio = new Audio(path)
            const audio = new Howl({
                src: [path]
            })
                
            audio_list.push(audio)
        }
        
        return audio_list
    }

    get_single_note(note){
        note = note.replace("#", "Sharp")
        const path = `assert/sounds/piano/${note}.mp3`
        const audio = new Howl({
            src: [path]
        })
        return audio




    }
}

export {SoundModel}