<template>
    <div id="root-note-selector-wrap">
        <h1>Step1: Select Root note</h1>
        <select v-model="selected">
            <option v-for="(option, index) in options" :key="index" v-bind:value="option.value">
                {{option.text}}
            </option>
        </select>
        <input type="checkbox" id="random-checkbox" v-model="is_random">
        <label for="random-checkbox">random note {{ is_random }}</label>
        <span>The root note {{selected}}</span>

        <select v-model="play_mode">
            <option v-for="pm in play_mode_option" :key="pm" v-bind:value="pm">
                {{pm}}
            </option>
        </select>
        <span>The root note {{play_mode}}</span>



    </div>
    
</template>

<script>
import {root_note_option} from '@/helpers/scale_interval_map.js'
export default {
    data: function(){
        return {
            // is_random: false,
            // selected: "C4",
            options: root_note_option,
            play_mode_option: [
                'same-time', 'individual'
            ]
        }
    },
    computed: {
        selected:{
            get: function(){
                return this.$store.state.scale_interval.root_note
            },
            set: function(val){
                console.log('xxx', val)
                this.$store.commit('scale_interval/root_note', val)
            }
        },
        is_random: {
            get: function(){
                return this.$store.state.scale_interval.is_random_note
            },
            set: function(val){
                this.$store.commit('scale_interval/is_random_note', val)
            }

        },
        play_mode: {
            get: function(){
                return this.$store.state.scale_interval.play_mode

            },
            set: function(val){
                this.$store.commit('scale_interval/play_mode', val)
            }
        }
    }
    
}
</script>

