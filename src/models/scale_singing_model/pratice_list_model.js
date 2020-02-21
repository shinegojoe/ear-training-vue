

class PraticeListModel{
    constructor(store, singing_scale_list, note_definition){
        this.store = store
        this.pratice_list = singing_scale_list
        this.note_definition = note_definition
    }

    get_pratice_list(){
        return this.pratice_list
    }

    _get_play_time_interval(){
        return this.store.state.scale_singing.play_time_interval
    }

    _get_start_note(){
        return this.store.state.scale_singing.start_note
    }

    _get_end_note(){
        return this.store.state.scale_singing.end_note
    }

    _get_audio_list(pratice_scale, start_note, end_note){
        const start_index = this.note_definition.note_to_index[start_note]
        const end_index = this.note_definition.note_to_index[end_note]
        const pratice_audio_list = []

        for(let i=start_index; i<=end_index; i++){
            const audio_list = []
            for(let scale_index of pratice_scale){
                let note = this.note_definition.index_to_note[scale_index+i]
                note = note.replace('#', 'Sharp')
                const path = `./assert/sounds/piano/${note}.mp3`
                const audio = new Howl({
                    src: path
                })
                audio_list.push(audio)
            }
            pratice_audio_list.push(audio_list)
        }
        return pratice_audio_list
    }

    async _play_sound(pratice_audio_list, play_time_interval){
        const delay = function(s){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, s)
            })
        }


        try{
            const delay_time = parseFloat(play_time_interval) * 1000
            console.log('delay', delay_time)

            for(let audio_list of pratice_audio_list){
                for(let i=0; i<2; i++){
                    audio_list[0].play()
                    await delay(delay_time * 2)
                }
                for(let audio of audio_list){
                    audio.play()
                    await delay(delay_time)
                    console.log('play')
                }
                await delay(delay_time * 2)


            }
           
        }
        catch(e){
            console.log('error', e)
            throw new Error('play_error')
        }


    }

    play(pratice_scale){
        const play_time_interval = this._get_play_time_interval()
        const start_note = this._get_start_note()
        const end_note = this._get_end_note()
        const pratice_audio_list = this._get_audio_list(pratice_scale, start_note, end_note)
        console.log('pratice_audio_list', pratice_audio_list)
        this._play_sound(pratice_audio_list, play_time_interval)
    }
}

export {PraticeListModel}