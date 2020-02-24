<template>
    <div id="pratice-list-wrap">
         <div v-for="(scale, index) in pratice_list" :key="index">
            <!-- <div class="item-wrap" @click="item_click(scale)">
                <span>pratice{{index+1}}</span>
            </div> -->
            <button class="item-wrap" @click="item_click(scale)">pratice{{index+1}}</button>
        </div>

    </div>
</template>

<script>

import {PraticeListPresenter} from '@/presenters/scale_singing_presenter/pratice_list_presenter.js'
import {PraticeListModel} from '@/models/scale_singing_model/pratice_list_model.js'
import {singing_scale_list} from '@/helpers/singing_scale_list.js'
import {note_definition} from '@/helpers/note_definition.js'


export default {
    data: function(){
        return {
            pratice_list: undefined,
            pratice_list_presenter: undefined,
        }
    },

    created: function(){
        const pratice_list_model = new PraticeListModel(this.$store, singing_scale_list, note_definition)
        this.pratice_list_presenter = new PraticeListPresenter(pratice_list_model)
        // console.log('model', pratice_list_model)
        // console.log('p', this.pratice_list_presenter)
        this.pratice_list = this.pratice_list_presenter.get_pratice_list()
    },

    methods: {
        item_click: function(scale){
            // console.log(scale)
            this.pratice_list_presenter.play(scale)
        }
    }
    
}
</script>