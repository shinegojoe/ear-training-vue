<template>
    <div id="control-btn-wrap">
        <button id="play-btn" @click="play">Play</button>
        <button id="help-btn" @click="help">Help</button>
        <button id="next-btn" @click="next">Next</button>

    </div>
</template>

<script>
import {SoundModel} from '@/models/sound_model.js'
import {PlayModel} from '@/models/play_model.js'

export default {

    created: function(){
        const sound_model = new SoundModel()
        this.play_model = new PlayModel(sound_model)
        
    },

    data: function(){
        return {
            play_model: undefined
        }
    },

    methods: {
        play: function(){
            // const chord_data = this.$store.getters['ans_btns/test']()
            // console.log("chord_data", chord_data)
            // console.log("x", this.$store.getters['ans_btns/test']())
            // const audio_list = this.sound_model.get_audio(chord_data["chord_type"], chord_data["root_note"])
            // const audio_list = this.sound_model.get_audio(chord_data.chord_type, chord_data.root_note)
            // for(let audio of audio_list){
            //     audio.play()
            // }
            this.play_model.play(this.$store)
            const chord_data = this.play_model.help()
            this.$store.commit('ans_btns/chord_data', chord_data)
        },
        help: function(){
            // console.log("help")
            const chord_data = this.play_model.help()
            // console.log("chord data", chord_data)
            this.$store.commit('ans_btns/chord_data', chord_data)
            this.$store.commit('ans_btns/is_help', true)
        },
        next: function(){
            // console.log("next")
            this.play_model.next(this.$store)
            const chord_data = this.play_model.help()
            this.$store.commit('ans_btns/chord_data', chord_data)
        }
    },
    
    
}
</script>

<style lang="sass">

</style>