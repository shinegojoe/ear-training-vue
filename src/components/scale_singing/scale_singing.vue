<template>
    <div>
        <h1>Scale Singing</h1>
        <label>play time interval: {{time_interval}}</label>
        <input v-model="time_interval">
        
        <div v-for="(scale, index) in singing_scale_list" :key="index">
            <div id="item-wrap" @click="item_click(scale)">
                <span>pratice{{index+1}}</span>
            </div>
        </div>

    </div>
</template>

<script>
// import {singing_scale_list} from '@/helpers/singing_scale_list.js'
// import {ScaleSingingModel} from '@/models/scale_singing_model.js'
// console.log('sing', singing_scale_list)
import {ScaleSingingPresenter} from '@/presenters/scale_singing_presenter.js'
import {ScaleListModel} from '@/models/scale_singing_model/scale_list_model.js'
import {AudioListModel} from '@/models/scale_singing_model/audio_list_model.js'
export default {
    data: function(){
        return {
            singing_model: undefined,
            singing_scale_list: undefined,
            time_interval: 1,
            root_note: undefined,
            presenter: undefined,
            
        }

    },
    created: function(){
        const scale_list_model = new ScaleListModel()
        const audio_list_model = new AudioListModel()
        this.presenter = new ScaleSingingPresenter(this.$store, scale_list_model, audio_list_model)
        this.singing_scale_list = this.presenter.get_singing_scale_list()
        // console.log(scale_list_model)
        // console.log(audio_list_model)
        // console.log(presenter)
    },

    methods: {
        item_click(scale_list){
            console.log('xxx')
            this.presenter.play(scale_list, this.time_interval)
        },

    }
}
</script>