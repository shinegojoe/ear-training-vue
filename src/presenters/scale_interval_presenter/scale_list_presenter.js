


class ScaleListPresenter{
    constructor(scale_list_model){
        this.scale_list_model = scale_list_model
    }

    get_scale_list(){
        const scale_list = this.scale_list_model.get_scale_list()
        return scale_list
    }

    ans_btn_click(){
        
    }

    set_selected_scale_list(val){
        this.scale_list_model.set_selected_scale_list(val)
    }

    get_selected_scale_list(){
        return this.scale_list_model.get_selected_scale_list()
    }

}

export {ScaleListPresenter}