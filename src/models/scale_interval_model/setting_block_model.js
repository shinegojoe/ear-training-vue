

class SettingBlockModel{
    constructor(store, root_note_option){
        this.store = store
        this.root_note_option = root_note_option
        this.play_mode_option = [
            'same-time', 'individual'
        ]
    }

    get_root_note_list(){
        return this.root_note_option
    }

    get_play_mode_option(){
        return this.play_mode_option
    }

    set_root_note_mode(val){
        this.store.commit('scale_interval/is_random_note', val)
    }

    get_root_note_mode(){
        return this.store.state.scale_interval.is_random_note
    }

    set_play_mode(val){
        this.store.commit('scale_interval/play_mode', val)
    }

    get_play_mode(){
        return this.store.state.scale_interval.play_mode 
    }

    set_root_note(val){
        this.store.commit('scale_interval/root_note', val)

    }

    get_root_note(){
        return this.store.state.scale_interval.root_note

    }

    

}


export {SettingBlockModel}