


class ControlBlockModel{
    constructor(store, note_definition, scale_interval_map, root_note_option, Howl){
        this.store = store
        this.note_definition = note_definition
        this.scale_interval_map = scale_interval_map
        this.root_note_option = root_note_option
        this.Howl = Howl
        this.last_play_state = undefined
        this.is_next = true
    }

    _get_is_random_note(){
        return this.store.state.scale_interval.is_random_note
    }

    _get_root_note(is_random_note){
        let root_note = ''
        if(is_random_note){
            const index = Math.floor(Math.random() * this.root_note_option.length)
            root_note = this.root_note_option[index].value

        }
        else{
            root_note = this.store.state.scale_interval.root_note
        }
        return root_note
    }

    _get_audio_list(root_note, scale_interval){

        const root_note_index = this.note_definition.note_to_index[root_note]
        const scale_interval_index = this.scale_interval_map[scale_interval]
        const scale_index = root_note_index + scale_interval_index
        const scale_note = this.note_definition.index_to_note[scale_index]
        const note_list = [root_note, scale_note]
        const audio_list = []
        for(let note of note_list){
            console.log('note', note)
            note = note.replace("#", "Sharp")
            const path = `assert/sounds/piano/${note}.mp3`
            const audio = new Howl({
                src: [path]
            })
                
            audio_list.push(audio)

        }
        return audio_list
    }

    _get_random_scale(scale_list){
        const scale_index = Math.floor(Math.random() * scale_list.length)
        const scale_interval = scale_list[scale_index]
        return scale_interval
    }

    _get_selected_list(){
        return this.store.state.scale_interval.selected_scale_list
    }

    async _play_audio(play_state){
        const delay = function(s){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, s)
            })
        }
        try{
            for(let audio of play_state.audio_list){
                audio.play()
                await delay(play_state.delay_time)
            }

        }
        catch(e){
            console.log('error', e)

        }
    }

    _get_play_mode(){
        return this.store.state.scale_interval.play_mode
    }

    _get_delay_time(play_mode){
        let delay_time = 0

        if(play_mode === 'individual'){
            delay_time = 800
        }
        
        return delay_time

    }

    play(){
        if(this.is_next){
            const is_random_note = this._get_is_random_note()
            const root_note = this._get_root_note(is_random_note)
            const selected_list = this._get_selected_list()
            const audio_list = this._get_audio_list(root_note, selected_list)
            const play_mode = this._get_play_mode()
            let delay_time = this._get_delay_time(play_mode)
            this.last_play_state = {
                'audio_list': audio_list,
                'delay_time': delay_time
            }
            this.is_next = false
        }
        this._play_audio(this.last_play_state)
    }

    help(){

    }

    next(){
        this.is_next = true
        this.play()
    }
}

export {ControlBlockModel}