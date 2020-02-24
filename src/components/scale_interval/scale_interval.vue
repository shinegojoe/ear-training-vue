<template>
    <div id="scale-interval-container">
        <div id="scale-interval-container-left">
            <root_note_selector></root_note_selector>
            <hr>
            <scale_selector></scale_selector>
            <hr>
        </div>

        <div id="scale-interval-container-right">
            <ans_btns></ans_btns>
            
            <control_btns></control_btns>
        </div>
       
       
    </div>
</template>

<script>
import root_note_selector from './root_note_selector.vue'
import scale_selector from './scale_selector.vue'
import control_btns from './control_btns.vue'
import ans_btns from './ans_btns.vue'


export default {
    components: {
        root_note_selector,
        scale_selector,
        control_btns,
        ans_btns
    }    
}
</script>

<style lang="sass" src="@/sass/3-modules/scale_interval.sass"></style>