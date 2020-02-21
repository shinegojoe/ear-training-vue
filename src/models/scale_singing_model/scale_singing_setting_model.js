

class ScaleSingingSettingModel{
    constructor(note_definition, store){
        this.note_definition = note_definition
        this.store = store
        this.play_time_interval_init()
    }

    play_time_interval_init(){
        this.set_play_time_interval(0.5)
    }

    note_init(){
        const start_index = this.note_definition.note_to_index['E4']
        const end_index = this.note_definition.note_to_index['E5']
        const note_list = []
        for(let i=start_index; i<=(end_index); i++){
            note_list.push(this.note_definition.index_to_note[i])
        }
        return note_list
    }

   

    set_play_time_interval(sec){
        this.store.commit('scale_singing/play_time_interval', sec)
    }

    get_play_time_interval(){
        return this.store.state.scale_singing.play_time_interval
    }

    set_start_note(note){
        this.store.commit('scale_singing/start_note', note)
    }

    get_start_note(){
        return this.store.state.scale_singing.start_note
    }

    set_end_note(note){
        this.store.commit('scale_singing/end_note', note)
    }

    get_end_note(){
        return this.store.state.scale_singing.end_note
    }

}

export {ScaleSingingSettingModel}