<template>
    <div id="select-btn-container">
        <h1>Select Range</h1>

        <div id="root-wrap">
            <button v-for="val in range_data" :key="val" @click="range_btn_clicked" 
                    v-bind:id="val" v-bind:is_clicked="is_click" class="root-btns">
                {{val | remove_number}}
            </button>
        </div>

        <div class="title">
            <h1>Select Chrod</h1>
        </div>

        <div id="chord-type-wrap">
            <button v-for="chord in chord_type_list" :key="chord" @click="chord_btn_clicked"
                    v-bind:id="chord" v-bind:is_clicked="is_click" v-bind:class="class_name">
                {{chord}}
            </button>
        </div>
    </div>
</template>

<script>
import {SelectBtnModel} from '@/models/chord_classification_model.js'


export default {
    data: function(){
        return {
            // select_btn_model: new SelectBtnModel(),
            // range_data: this.select_btn_model.get_range(),
            range_data: [],
            chord_type_list: [],
            select_btn_model: undefined ,
            class_name: "chord-type-btns",
            is_click: 'false'

        }
    },

    created: function(){
        this.select_btn_model = new SelectBtnModel()
        this.range_data = this.select_btn_model.get_range()
        this.chord_type_list = this.select_btn_model.get_chord_type()
        

    },
    filters: {
        remove_number(data){
            data = data.replace("4", "")
            return data
        }
    },
    methods: {

        click_switch: function(event, add_fn_name, remove_fn_name){
            const btn = event.target
            const is_clicked = (btn.getAttribute("is_clicked") === "true")

            if(!is_clicked){
                this.$store.commit('ans_btns/' + add_fn_name, btn.id)

            }
            else{
                this.$store.commit('ans_btns/' + remove_fn_name, btn.id)
                // this.class_name = ''

            }
            // btn.setAttribute("is_clicked", (!is_clicked).toString())
            btn.setAttribute("is_clicked", !is_clicked)



        },
        
        chord_btn_clicked: function(event){
            this.click_switch(event, "add_ans_btn", "remove_ans_btn")
        },
        range_btn_clicked: function(event){
            this.click_switch(event, "add_range", "remove_range")
            
        }
    }

    // mounted: function(){
    //     return this.select_btn_model = new SelectBtnModel()

    // }
    
}
</script>
<style lang="sass">

</style>