<template>
    <div id="root-note-selector-container">
        <h1>Select Root Note</h1>
        <div id="btn-list-wrap">
             <div class="note-btn-wrap" v-for="note in root_note_list" :key="note">
                <button @click="root_note_btn_click($event, note)">{{note | note_name}}</button>
            </div>
        </div>
       
    </div>
</template>

<script>

import {RootNoteSelectorModel} from '@/models/chord_classification_models/root_note_selector_model.js'
import {RootNoteSelectorPresenter} from '@/presenters/chord_classification_presenters/root_note_selector_presenter.js'
import {note_definition} from '@/helpers/note_definition.js'

export default {

    data: function(){
        return {
            root_note_selector_presenter: undefined,
            root_note_list: undefined,
            test_list_data: [],
        }

    },

    created: function(){
        const root_note_selector_model = new RootNoteSelectorModel(this.$store, note_definition)
        this.root_note_selector_presenter = new RootNoteSelectorPresenter(root_note_selector_model)
        this.root_note_list = this.root_note_selector_presenter.note_list_init()
        // console.log('root_note_list', root_note_list)

    },
    filters: {
        note_name: function(note){
            const note_name = note.replace('4', '')
            return note_name
        }
    },

    methods: {
        click_switch: function(event, note, note_name){
            const btn = event.target
            const is_clicked = (btn.getAttribute("is_clicked") === 'true')
            // const is_clicked = btn.getAttribute("is_clicked")
            console.log(is_clicked, note)
            if(is_clicked){
                this.root_note_selector_presenter.remove_selected_note(note)
                btn.innerHTML = this.$options.filters.note_name(note)
            }
            else{
                this.root_note_selector_presenter.add_selected_note(note)
                const note_name = this.$options.filters.note_name(note)
                btn.innerHTML = `${note_name} \n (clicked)`
            }
            btn.setAttribute('is_clicked', !is_clicked)

        },

        root_note_btn_click: function(event, note){
            this.click_switch(event, note)
        }

    },
    computed: {
        slected_list: function(){
            return this.$store.state.chord_classification.root_note_list
        }
    }
    
}
</script>