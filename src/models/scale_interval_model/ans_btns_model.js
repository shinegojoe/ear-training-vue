

class AnsBtnsModel{
    constructor(store){
        this.store = store
    }

    get_selected_scale_list(){
        return this.store.state.scale_interval.selected_scale_list

    }

    _get_ans_scale(){
        return this.store.state.scale_interval.ans_scale
    }

    _set_help_msg(msg){
        this.store.commit('scale_interval/set_help_msg', msg)
    }

    _set_is_help(bool){
        this.store.commit('scale_interval/is_help', bool)
    }

    check_ans(scale){
        const ans_scale = this._get_ans_scale()
        let help_msg = ''
        if(scale === ans_scale){
            help_msg = 'correct!'
        }
        else{
            help_msg = 'incorrect!'
        }
        this._set_help_msg(help_msg)
        this._set_is_help(true)
    }
}

export {AnsBtnsModel}