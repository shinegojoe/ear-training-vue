

class AnsBtnsPresenter{
    constructor(model){
        this.ans_btns_model = model 
    }

    get_selected_scale_list(){
        return this.ans_btns_model.get_selected_scale_list()
    }

}

export {AnsBtnsPresenter}