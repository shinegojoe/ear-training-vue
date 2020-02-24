<template>
    <div id="control-btn-wrap">
        <button id="play-btn" @click="play">Play</button>
        <button id="help-btn" @click="help">Help</button>
        <button id="next-btn" @click="next">Next</button>
    </div>
</template>

<script>
// import {ScaleIntervalModel} from '@/models/scale_interval_model.js'
import {ControlBlockModel} from '@/models/scale_interval_model/control_block_model.js'
import {ControlBlockPresenter} from '@/presenters/scale_interval_presenter/control_block_presenter.js'

import {note_definition, chord_definition} from '@/helpers/note_definition.js'
import {Howl, Howler} from 'howler'
import {scale_interval_map, root_note_option} from '@/helpers/scale_interval_map.js'



export default {
    data: function(){
        return {
            control_block_presenter: undefined,
        }
    },
    methods: {
        play(){
            // this.scale_interval_model.play(this.$store)
            this.control_block_presenter.play()

        },
        help(){ 
            this.control_block_presenter.help()
        },
        next(){
            this.control_block_presenter.next()
        }
    },

    created: function(){

        const control_block_model = new ControlBlockModel(this.$store, note_definition, scale_interval_map, root_note_option, Howl)
        this.control_block_presenter = new ControlBlockPresenter(control_block_model)
        
    }
    
}
</script>