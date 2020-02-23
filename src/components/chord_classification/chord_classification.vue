<template>
    <div id="chord-classification-container">
        <!-- <h1>Chord Classification</h1> -->
        <score_board></score_board>
        <hr>
        <!-- <select_btns></select_btns> -->
        <!-- <ans_btns></ans_btns> -->
        <help_hint></help_hint>
        <!-- <ans_btn_hint></ans_btn_hint> -->
        <root_note_selector></root_note_selector>
        <hr>
        <chord_type_selector></chord_type_selector>
        <hr>
        <control_btn></control_btn>
        <hr>
        <ans_btn_selector></ans_btn_selector>



    </div>
</template>

<script>
// import select_btns from './select_btns.vue'
import control_btn from './control_btns.vue'
import ans_btns from './ans_btns.vue'
import help_hint from './help_hint.vue'
// import ans_btn_hint from "./ans_btn_hint.vue"
import score_board from "./score_board.vue"
import root_note_selector from './root_note_selector.vue'
import chord_type_selector from './chord_type_selector.vue'
import ans_btn_selector from './ans_btn_selector.vue'

export default {
    components: {
        control_btn,
        ans_btns,
        help_hint,
        // ans_btn_hint,
        score_board,
        root_note_selector,
        chord_type_selector,
        ans_btn_selector,
    }
}
</script>

<style lang="sass" src="@/sass/3-modules/chord_classification.sass"></style>
