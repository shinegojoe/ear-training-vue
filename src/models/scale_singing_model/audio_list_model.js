import {Howl, Howler} from 'howler'
import {note_definition} from '@/helpers/note_definition.js'

class AudioListModel{
    constructor(){

    }

    get_audio_list(scale_list){
        const audio_list = []
        try{
            for(let scale_index of scale_list){
                let note = note_definition.index_to_note[scale_index]
                note = note.replace('#', 'Sharp')
                const path = `./assert/sounds/piano/${note}.mp3`
                const audio = new Howl({
                    src: path
                })
                audio_list.push(audio)
            }

        }

        catch(e){
            throw new Error('get_audio_list_failed')
        }
        
        return audio_list
    }

    async play(audio_list, play_interval){
        const delay = function(s){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, s)
            })
        }


        // const delay_time = parseFloat(play_interval) * 1000
        // for(let audio of audio_list){
        //     audio.play()
        //     await delay(delay_time)
        // }
        try{
            const delay_time = parseFloat(play_interval) * 1000
            console.log('delay', delay_time)
            for(let audio of audio_list){
                audio.play()
                await delay(delay_time)
                console.log('play')
            }
        }
        catch(e){
            console.log('error', e)
            throw new Error('play_error')
        }
    }

}

export {AudioListModel}