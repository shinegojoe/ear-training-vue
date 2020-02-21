<template>
    <div id="scale-singing-setting-wrap">
        <div id="play-time-interval-wrap">
            <h1>Step1: Set Play Time Interval</h1>
            <input v-model="play_time_interval">
            <br>
            <label>The Play Time Interval Is {{play_time_interval}}</label>

        </div>

        <div id="start-note-wrap">
            <h1>Step2: Set Start Note</h1>
            <select v-model="start_note">
                <option v-for="val in note_list" :key="val">
                    {{val}}
                </option>
            </select>
            <label>The Selected note Is {{start_note}}</label>
        </div>

        <div id="end-note-wrap">
            <h1>Step3: Set End Note</h1>
            <select v-model="end_note">
                <option v-for="val in note_list" :key="val">
                    {{val}}
                </option>
            </select>
            <label>The Selected note Is {{end_note}}</label>


        </div>
       
    </div>
</template>

<script>

import {ScaleSingingSettingModel} from '@/models/scale_singing_model/scale_singing_setting_model.js'
import {ScaleSingingSettingPresenter} from '@/presenters/scale_singing_presenter/scale_singing_setting_presenter.js'
import {note_definition} from "@/helpers/note_definition.js"


export default {

    data: function(){
        return {
            scale_singing_setting_presenter: undefined,
            play_time_interval_q: 0,
            note_list: [1, 2, 4],
            end_note_list: [],
            qq: 'E4'
        }
    },

    created: function(){
        const scale_singing_setting_model = new ScaleSingingSettingModel(note_definition, this.$store)
        this.scale_singing_setting_presenter = new ScaleSingingSettingPresenter(scale_singing_setting_model)
        this.note_list = this.scale_singing_setting_presenter.note_init()
    },

    methods: {
        init: function(){

        }
    }, 
    computed: {
        play_time_interval: {
            get: function(){
                return this.scale_singing_setting_presenter.get_play_time_interval()
            },
            set: function(val){
                if(isNaN(val))
                {
                    /*
                        disable the pratice button 
                    */
                }
                else{
                    this.scale_singing_setting_presenter.set_play_time_interval(val)
                }
            }
        },

        start_note: {
            get: function(){
                return this.scale_singing_setting_presenter.get_start_note()
            },

            set: function(val){
                this.scale_singing_setting_presenter.set_start_note(val)
            }
        },

        end_note: {
            get: function(){
                return this.scale_singing_setting_presenter.get_end_note()
            },

            set: function(val){
                this.scale_singing_setting_presenter.set_end_note(val)
            }
        }
    }
    
}
</script>
