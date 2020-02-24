<template>
    <div id="chord-type-selector-container">
        <h1>Select Chord Type</h1>
        <div id="btn-list-wrap">
            <div class="chord-btn-wrap" v-for="chord in chord_type_list" :key="chord">
                <button @click="chord_type_btn_click($event, chord)" v-bind:is_clicked="'false'">{{chord}}</button>
            </div>
        </div>

    </div>
</template>

<script>
import {chord_definition} from '@/helpers/note_definition.js'
import {ChordTypeSelectorModel} from '@/models/chord_classification_models/chord_type_selector_model.js'
import {ChordTypeSelectorPresenter} from '@/presenters/chord_classification_presenters/chord_type_selector_presenter.js'

export default {

    data: function(){
        return {
            chord_type_selector_presenter: undefined,
            chord_type_list: undefined,
        }
    },

    methods: {

        click_switch: function(event, chord){
            const btn = event.target
            const is_clicked = (btn.getAttribute("is_clicked") === 'true')
            console.log(is_clicked, chord)
            if(is_clicked){
                this.chord_type_selector_presenter.remove_selected_chord_type(chord)
                btn.innerHTML = chord
            }
            else{
                this.chord_type_selector_presenter.add_selected_chord_type(chord)
                btn.innerHTML = `${chord} \n (clicked)`
            }
            btn.setAttribute('is_clicked', !is_clicked)

        },
        chord_type_btn_click: function(event, chord){
            this.click_switch(event, chord)
        }
    },

    created: function(){
        const chord_type_selector_model = new ChordTypeSelectorModel(this.$store, chord_definition)
        this.chord_type_selector_presenter = new ChordTypeSelectorPresenter(chord_type_selector_model)
        this.chord_type_list = this.chord_type_selector_presenter.chord_type_init()
    }
    
}
</script>