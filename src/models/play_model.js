

class PlayModel{
    constructor(sound_model){
        this.sound_model = sound_model
        this.is_next = true
        this.audio_list = undefined
        this.chord_data = undefined
    }


    get_audio_list(store){
        const chord_data = store.getters['ans_btns/chord_data']()
        this.chord_data = chord_data
        const audio_list = this.sound_model.get_audio(chord_data.chord_type, chord_data.root_note)
        return audio_list
    }

    play_sound(audio_list){
        for(let audio of audio_list){
            audio.play()
        }
    }

    play(store){
        console.log('store', store)
        if(this.is_next){
            const audio_list = this.get_audio_list(store)
            console.log('audio_list', audio_list)
            this.audio_list = audio_list
            this.is_next = false
        }
        this.play_sound(this.audio_list)

        
    }
    help(){
        console.log(this.chord_data)
        return this.chord_data

    }
    next(store){
        this.is_next = true
        this.play(store)
    }
}

export {PlayModel}