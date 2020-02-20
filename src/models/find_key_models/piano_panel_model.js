

class PiaonPanelModel{
    constructor(note_definition){
        this.note_definition = note_definition
        this.key_list = this._key_init()

    }

    _key_init(){
        const start_key = "C4"
        const end_key = "B4"
        const start_index = this.note_definition.note_to_index[start_key]
        const end_index = this.note_definition.index_to_note[end_key]
        const white_key_list = []
        const black_key_list = []
        for(let i=start_index; i<=end_index; i++){
            const note = this.note_definition.index_to_note[i]
            if(note.contain("#")){
                black_key_list.push(note)
            }
            else{
                white_key_list.push(note)
            }
        }
        return {white: white_key_list, black: black_key_list}

    }

    get_white_key(){
        return this.key_list.white
    }

    get_black_key(){
        return this.key_list.black
    }


}

export {PiaonPanelModel}