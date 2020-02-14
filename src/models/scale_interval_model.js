import {note_definition, chord_definition} from '@/helpers/note_definition.js'
import {Howl, Howler} from 'howler'
import {scale_interval_map, root_note_option} from '@/helpers/scale_interval_map.js'

class ScaleIntervalModel{
    constructor(state){
        this.state = state
        this.last_root_note = undefined
        this.last_scale_interval = undefined
    }


    _get_random_scale(scale_list){
        const scale_index = Math.floor(Math.random() * scale_list.length)
        const scale_interval = scale_list[scale_index]
        return scale_interval
    }

    _get_audio_list(root_note, scale_interval){

        const root_note_index = note_definition.note_to_index[root_note]
        const scale_interval_index = scale_interval_map[scale_interval]


        const scale_index = root_note_index + scale_interval_index
        const scale_note = note_definition.index_to_note[scale_index]
        const note_list = [root_note, scale_note]
        const audio_list = []
        for(let note of note_list){
            note = note.replace("#", "Sharp")
            const path = `assert/sounds/piano/${note}.mp3`
            const audio = new Howl({
                src: [path]
            })
                
            audio_list.push(audio)

        }
        return audio_list
        

    }

    _get_root_note(state){
        let root_note = ''
        if(state.scale_interval.is_random_note){
            const index = Math.floor(Math.random() * root_note_option.length)
            root_note = root_note_option[index].value

        }
        else{
            root_note = state.scale_interval.root_note
        }
        return root_note
    }

    async play(store){
        const root_note = this._get_root_note(store.state)
        const scale_list = store.state.scale_interval.selected_scale_list


        if(store.state.scale_interval.is_next){
            this.last_root_note = root_note
            this.last_scale_interval = this._get_random_scale(scale_list)
            store.commit('scale_interval/is_next', false)
            store.commit('scale_interval/ans_scale', this.last_scale_interval)
        }
        
        const audio_list = this._get_audio_list(this.last_root_note, this.last_scale_interval)
        console.log('audio_list', audio_list)


        const delay = function(s){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, s)
            })
        }
        
        if(store.state.scale_interval.play_mode === 'individual'){
            for(let audio of audio_list){
                audio.play()
                await delay(800)
                
            }
        }
        else{
            for(let audio of audio_list){
                audio.play()  
            }
        }
       

    }
    help(store){

    }
    next(store){
        store.commit('scale_interval/is_next', true)
        this.play(store)
    }
}

export {ScaleIntervalModel}