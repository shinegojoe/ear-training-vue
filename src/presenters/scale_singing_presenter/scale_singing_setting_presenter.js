

class ScaleSingingSettingPresenter{
    constructor(model){
        this.scale_singing_setting_model = model
    }

    set_play_time_interval(sec){
        this.scale_singing_setting_model.set_play_time_interval(sec)
    }

    get_play_time_interval(){
        return this.scale_singing_setting_model.get_play_time_interval()
    }

    note_init(){
        return this.scale_singing_setting_model.note_init()
    }

    set_start_note(note){
        this.scale_singing_setting_model.set_start_note(note)
    }

    get_start_note(){
        return this.scale_singing_setting_model.get_start_note()
    }

    set_end_note(note){
        this.scale_singing_setting_model.set_end_note(note)
    }

    get_end_note(){
        return this.scale_singing_setting_model.get_end_note()
    }

}

export {ScaleSingingSettingPresenter}