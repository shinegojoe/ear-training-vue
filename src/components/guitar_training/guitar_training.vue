<template>
    <div>
        <h1>Guitar Training</h1>

        <div id="guitar-panel">

            <div class="guitar-panel-row visible-row" v-for="(row, index) in panel_data.panel_data_first_line" :key="index + `1`">
               
                <div class="guitar-panel-column">
                    <div v-for="(obj, index) in row" :key="index">
                        <div class="grid first-line">
                            <template v-if="obj.is_show">
                                <button class="mark"><span v-if="obj.show_note">{{obj.note}}</span></button>
                            </template>
                        </div>
                    </div>
                </div>
                <div class=panel-mark></div>
            </div>


            <div class="guitar-panel-row" v-for="(row, index) in panel_data.panel_data_other" :key="index">
                <div id="string-line-top"></div>

                <div class="guitar-panel-column">
                    <div v-for="(obj, index) in row" :key="index">

                    <div class="grid">
                        <template v-if="obj.is_show">
                            <button class="mark"><span v-if="obj.show_note">{{obj.note}}</span></button>
                        </template>
                    </div>
                        
                    </div>
                </div>
                <div class=panel-mark></div>
                <div id="string-line-buttom"></div>




            </div>
        </div>

        <button @click=get_random_key>xx</button>
        <button id="show-scale-btn" @click="show_scale" :Class=show_btn_class>Show Scale</button>

    </div>
</template>

<script>

import {GuitarPanelModel} from '@/models/guitar_panel_model.js'

const model = new GuitarPanelModel()


export default {
    data: function(){
        return {
            // show: this.get_data(),
            col_data: this.get_col_data(),
            row_data: this.get_row_data(),
            panel_data: this.get_panel_data(),
            

            show_is_clicked: false,
            show_btn_class: ''
        }
    },
    methods: {
        // get_data: function(){
        //     const show = model.get_data()
                
        //     return show
        // },
        get_panel_data(){
            console.log(model.get_panel_data())
            return model.get_panel_data()
        },
       
        get_col_data(){
            const data = model.get_col_data()
            console.log("data", data)
            return data
        },
        get_row_data(){
            const data = model.get_row_data()
            return data
        },
        get_random_key(){
            if(!this.show_is_clicked){
                model.get_random_key()

            }
        },
        show_scale(event){
            console.log(event.target)
            if(this.show_is_clicked){
                model.show_scale(false)
                this.show_btn_class = ""
                event.target.innerText = 'Show Scale'

            }
            else{
                model.show_scale(true)
                this.show_btn_class = "show-btn-clicked"
                event.target.innerText = 'off'


            }
            this.show_is_clicked = !this.show_is_clicked
            // console.log(this.show_is_clicked)
            
        },

        

    },

    // mounted: function(){
    //     this.test_col = model.test_col()
    // }

    

    
}
</script>

