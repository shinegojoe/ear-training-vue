

class AnsBtnSelectorPresenter{
    constructor(model){
        this.ans_btn_selector_model = model
    }

    get_selected_chord_type_list(){
        return this.ans_btn_selector_model.get_selected_chord_type_list()   
    }

    check_ans(chord_type){
        this.ans_btn_selector_model.check_ans(chord_type)
    }
}

export {AnsBtnSelectorPresenter}