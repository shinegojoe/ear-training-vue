

class ScaleSingingPresenter{
    constructor(store, scale_list_model, audio_list_model){
        this.store = store
        this.scale_list_model = scale_list_model
        this.audio_list_model = audio_list_model
    }

    get_singing_scale_list(){
        const singing_scale_list = this.scale_list_model.get_singing_scale_list()
        return singing_scale_list
    }

    set_play_time_interval(){

    }

    set_root_note(){

    }

    _get_audio_list(scale_list){
        const audio_list = this.audio_list_model.get_audio_list(scale_list)
        return audio_list
    }

    play(scale_list, play_interval){
        const audio_list = this._get_audio_list(scale_list)
        console.log('audio', audio_list)
        this.audio_list_model.play(audio_list, play_interval)
    }


}

export {ScaleSingingPresenter}