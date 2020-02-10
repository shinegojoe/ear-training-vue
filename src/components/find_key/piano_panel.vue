<template>
    <div id="piano-panel-wrap">
        <div id="black">
            <button id="C#4" class="piano-panel-btn" @click="key_click"></button>
            <button id="D#4" class="piano-panel-btn" @click="key_click"></button>
            <button id="F#4" class="piano-panel-btn" @click="key_click"></button>
            <button id="G#4" class="piano-panel-btn" @click="key_click"></button>
            <button id="A#4" class="piano-panel-btn" @click="key_click"></button>
        </div>
        <div id="white">
            <button id="C4" class="piano-panel-btn" @click="key_click">C</button>
            <button id="D4" class="piano-panel-btn" @click="key_click">D</button>
            <button id="E4" class="piano-panel-btn" @click="key_click">E</button>
            <button id="F4" class="piano-panel-btn" @click="key_click">F</button>
            <button id="G4" class="piano-panel-btn" @click="key_click">G</button>
            <button id="A4" class="piano-panel-btn" @click="key_click">A</button>
            <button id="B4" class="piano-panel-btn" @click="key_click">B</button>
        </div>
    </div>
</template>

<script>
import {SoundModel} from '@/models/sound_model.js'
export default {
    data: function(){
        return {
            sound_model: undefined
        }
    },
    created: function(){
        this.sound_model = new SoundModel()
    },
    methods: {
        key_click(event){
            const note = event.target.id
            const audio = this.sound_model.get_single_note(note)
            audio.play()
        }
    }
    
}
</script>