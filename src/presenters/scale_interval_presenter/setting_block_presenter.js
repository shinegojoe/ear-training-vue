

class SettingBlockPresenter{
    constructor(setting_block_model){
        this.setting_block_model = setting_block_model
    }

    get_root_note_list(){
        return this.setting_block_model.get_root_note_list()
    }

    get_play_mode_option(){
        return this.setting_block_model.get_play_mode_option()
    }

    set_root_note_mode(val){
        this.setting_block_model.set_root_note_mode(val)
    }

    get_root_note_mode(){
        return this.setting_block_model.get_root_note_mode()
    }

    set_play_mode(val){
        this.setting_block_model.set_play_mode(val)
    }

    get_play_mode(){
        return this.setting_block_model.get_play_mode()
    }

    set_root_note(val){
        this.setting_block_model.set_root_note(val)
    }

    get_root_note(){
        return this.setting_block_model.get_root_note()
    }




}

export {SettingBlockPresenter}