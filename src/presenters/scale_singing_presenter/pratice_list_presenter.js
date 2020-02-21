

class PraticeListPresenter{
    constructor(model){
        this.pratice_list_model = model
    }

    get_pratice_list(){
        return this.pratice_list_model.get_pratice_list()
    }

    play(scale){
        this.pratice_list_model.play(scale)
    }   
}

export {PraticeListPresenter}