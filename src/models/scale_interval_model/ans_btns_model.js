

class AnsBtnsModel{
    constructor(store){
        this.store = store
    }

    get_selected_scale_list(){
        return this.store.state.scale_interval.selected_scale_list

    }
}

export {AnsBtnsModel}