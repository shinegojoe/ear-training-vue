


class AnsBtnSelectorModel{
    constructor(store){
        this.store = store
    }

    get_selected_chord_type_list(){
        return this.store.state.chord_classification.selected_chord_type_list
    }

    _get_chord_type_ans(){
        return this.store.state.chord_classification.chord_type_ans
    }

    _set_help_msg(msg){
        this.store.commit('chord_classification/set_help_msg', msg)
    }

    _set_correct_count(val){
        this.store.commit('chord_classification/set_correct_count', val)

    }

    _get_correct_count(){
        return this.store.state.chord_classification.correct_count

    }

    _set_total_count(val){
        this.store.commit('chord_classification/set_total_count', val)

    }

    _get_total_count(){
        return this.store.state.chord_classification.total_count

    }

    check_ans(chord_type){
        this._set_total_count(this._get_total_count()+1)
        const chord_type_ans = this._get_chord_type_ans()
        let msg = ''
        if(chord_type === chord_type_ans){
            msg = 'Correct!!'
            this._set_correct_count(this._get_correct_count()+1)
        }
        else{
            msg = 'Try again!'
        }
        this.store.commit('chord_classification/is_help', true)
        this._set_help_msg(msg)

    }
}

export {AnsBtnSelectorModel}