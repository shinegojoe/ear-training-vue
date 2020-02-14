import {note_definition} from '@/helpers/note_definition.js'
import {Howl, Howler} from 'howler'


class ScaleSingingModel{
    constructor(){

    }

    _get_audio_list(scale_list){
        const audio_list = []
        for(let scale_index of scale_list){
            const note = note_definition.index_to_note[scale_index]
            const path = `assert/sounds/piano/${note}.mp3`

            const audio = new Howl({
                src: path
            })
            audio_list.push(audio)
        }
        return audio_list
    }

    async play(scale_list, play_time_interval){
        const audio_list = this._get_audio_list(scale_list)
        const delay = function(s){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, s)
            })
        }
        const delay_time = parseFloat(play_time_interval) * 1000
        
        for(let audio of audio_list){
            audio.play()
            await delay(delay_time)
        }
    }
}

export {ScaleSingingModel}