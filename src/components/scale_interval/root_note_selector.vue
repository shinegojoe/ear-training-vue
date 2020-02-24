<template>
    <div id="root-note-selector-wrap">
        <h1>Select Root note</h1>
        <div>
            <select v-model="selected">
                <option v-for="(option, index) in root_note_option" :key="index" v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
            <span>The root note is {{selected}}</span>
        </div>
        
        <div>
            <input type="checkbox" id="random-checkbox" v-model="is_random">
            <label for="random-checkbox">random note is {{ is_random | random_mode}}</label>
        </div>

        <div>
            <select v-model="play_mode">
                <option v-for="pm in play_mode_option" :key="pm" v-bind:value="pm">
                    {{pm}}
                </option>
            </select>
            <span>The play mode is {{play_mode}}</span>
        </div>
    
    </div>
    
</template>

<script>
import {root_note_option} from '@/helpers/scale_interval_map.js'
import {SettingBlockModel} from '@/models/scale_interval_model/setting_block_model.js'
import {SettingBlockPresenter} from '@/presenters/scale_interval_presenter/setting_block_presenter.js'


export default {
    data: function(){
        return {
            // is_random: false,
            // selected: "C4",
            setting_block_presenter: undefined,
            options: undefined,
            play_mode_option: undefined
        }
    },

    created: function(){
        
        const setting_block_model = new SettingBlockModel(this.$store, root_note_option)
        this.setting_block_presenter = new SettingBlockPresenter(setting_block_model)
        this.root_note_option = this.setting_block_presenter.get_root_note_list()
        this.play_mode_option = this.setting_block_presenter.get_play_mode_option()
        // console.log(setting_block_model)
        // console.log(this.setting_block_presenter)
    },

    filters: {
        random_mode: function(is_random){
            if(is_random){
                return 'On'
            }
            else{
                return 'Off'
            }
        }
    },

    computed: {
        selected:{
            get: function(){
                return this.setting_block_presenter.get_root_note()
                // return this.$store.state.scale_interval.root_note
            },
            set: function(val){
                this.setting_block_presenter.set_root_note(val)
                // this.$store.commit('scale_interval/root_note', val)
            }
        },
        is_random: {
            get: function(){
                return this.setting_block_presenter.get_root_note_mode()
                // return this.$store.state.scale_interval.is_random_note
            },
            set: function(val){
                this.setting_block_presenter.set_root_note_mode(val)
                // this.$store.commit('scale_interval/is_random_note', val)
            }

        },
        play_mode: {
            get: function(){
                return this.setting_block_presenter.get_play_mode()
                // return this.$store.state.scale_interval.play_mode

            },
            set: function(val){
                this.setting_block_presenter.set_play_mode(val)
                // this.$store.commit('scale_interval/play_mode', val)
            }
        }
    }
    
}
</script>

