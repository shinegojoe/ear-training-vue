// import {scale_interval_map} from '@/helpers/scale_interval_map.js'


class ScaleListModel{
    constructor(store, scale_interval_map){
        this.store = store
        this.scale_interval_map = scale_interval_map
    }

    get_scale_list(){
        return this.scale_interval_map
    }

    ans_btn_click(){
        
    }

    get_selected_scale_list(){
        return this.store.state.scale_interval.selected_scale_list

    }

    set_selected_scale_list(val){
        this.store.commit('scale_interval/selected_scale_list', val)
    }

}

export {ScaleListModel}