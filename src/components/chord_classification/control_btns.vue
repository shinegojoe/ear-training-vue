<template>
    <div id="control-btn-wrap">
        <button id="play-btn" @click="play">Play</button>
        <button id="help-btn" @click="help">Help</button>
        <button id="next-btn" @click="next">Next</button>
    </div>
</template>

<script>


import {ControlBtnsModel} from '@/models/chord_classification_models/control_btns_model.js'
import {ControlBtnsPresenter} from '@/presenters/chord_classification_presenters/control_btns_presenter.js'
import {array_op} from '@/helpers/array_operation.js'
import {note_definition, chord_definition} from '@/helpers/note_definition.js'



export default {

    data: function(){
        return {
            play_model: undefined,
            control_btns_presenter: undefined,
        }
    },

    created: function(){
        const control_btns_model = new ControlBtnsModel(this.$store, array_op, note_definition, chord_definition)
        this.control_btns_presenter = new ControlBtnsPresenter(control_btns_model)
    },

    methods: {
        play: function(){
            this.control_btns_presenter.play()
        },
        help: function(){
            this.control_btns_presenter.help()
            // console.log(chord_type_ans)
        },
        next: function(){
            this.control_btns_presenter.next()
        }
    },
}
</script>
