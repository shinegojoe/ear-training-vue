

class NoteDefinitionBuilder{
    constructor(){
        this.note_list = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
        this.note_definition = this.build_data()
    }

    build_data(){
        const note_to_index = {}
        const index_to_note = {}
        for(let i=0; i<3; i++){
            for(let j=0; j<this.note_list.length; j++){
                const note_name = `${this.note_list[j]}${i+3}`
                const note_index = 12*i + j
                // console.log(note_name, note_index)
                note_to_index[note_name] = note_index
                index_to_note[note_index] = note_name
            }
        }
        return {note_to_index, index_to_note}
    }

    get_data(){
        return this.note_definition
    }
}


const chord_definition = {
    "Major": [0, 4, 7],
    "Minor": [0, 3, 7],
    "Maj7": [0, 4, 7, 11],
    "Min7": [0, 3, 7, 11],
    "Dominant7": [0, 4, 7, 10],
    "Half-Diminished7": [0, 3, 7, 10]
}
const builder = new NoteDefinitionBuilder()

const note_definition = builder.get_data()

export {note_definition, chord_definition}