<template>
    <div id="scale-selector-wrap">
        <h1>Step2: Select Scales</h1>
        <div id="scale-list-wrap">
            <div class="scale-item" v-for="(key, val) in scale_interval_map" :key="key">
            <input type="checkbox" :value="val" v-model="selected_scale_list">
            <label>{{val}}</label>
            </div>
        </div>
        
        <!-- <span>Checked names: {{ selected_scale_list }}</span> -->
        <!-- <div id="ans-btn-wrap">
            <button v-for="scale in selected_scale_list" :key="scale" @click="ans_btn_click(scale)">{{scale}}</button>
        </div> -->

        
    </div>
</template>

<script>
import {ScaleListModel} from '@/models/scale_interval_model/scale_list_model.js'
import {ScaleListPresenter} from '@/presenters/scale_interval_presenter/scale_list_presenter.js'
import {scale_interval_map} from '@/helpers/scale_interval_map.js'



export default {
    data: function(){
        return{
            scale_interval_map: undefined,
            // scale_selected_list: []
            scale_list_presenter: undefined

        }
    },
    created: function(){
        const scale_list_model = new ScaleListModel(this.$store, scale_interval_map)
        this.scale_list_presenter = new ScaleListPresenter(scale_list_model)
        this.scale_interval_map = this.scale_list_presenter.get_scale_list()
        // console.log(scale_list_model)
        // console.log(scale_list_presenter)

    },

    // filters: {
    //     qqscale: function(val){
    //         const scale = scale_interval_map[val]
    //         return scale
    //     }
    // },
    
    computed: {
        selected_scale_list: {
            get: function(){
                return this.scale_list_presenter.get_selected_scale_list()
                // return this.$store.state.scale_interval.selected_scale_list
            },
            set: function(val){
                this.scale_list_presenter.set_selected_scale_list(val)
                // this.$store.commit('scale_interval/selected_scale_list', val)
            }

        }
    }
}
</script>