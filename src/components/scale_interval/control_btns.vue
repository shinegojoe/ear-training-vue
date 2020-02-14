<template>
    <div id="control-btn-wrap">
        <button id="play-btn" @click="play">Play</button>
        <button id="help-btn" @click="help">Help</button>
        <button id="next-btn" @click="next">Next</button>
    </div>
</template>

<script>
import {ScaleIntervalModel} from '@/models/scale_interval_model.js'
export default {
    data: function(){
        return {
            scale_interval_model: undefined
        }
    },
    methods: {
        play(){
            this.scale_interval_model.play(this.$store)

        },
        help(){ 
            this.scale_interval_model.help(this.$store)
        },
        next(){
            this.scale_interval_model.next(this.$store)
        }
    },

    created: function(){
        this.scale_interval_model = new ScaleIntervalModel(this.$store.state)
    }
    
}
</script>