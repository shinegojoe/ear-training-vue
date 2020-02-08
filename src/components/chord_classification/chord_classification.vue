<template>
    <div id="chord-classification-container">
        <h1>Chord Classification</h1>
        <score_board></score_board>
        <select_btns></select_btns>
        <control_btn></control_btn>
        <ans_btns></ans_btns>
        <help_hint></help_hint>
        <ans_btn_hint></ans_btn_hint>
    </div>
</template>

<script>
import select_btns from './select_btns.vue'
import control_btn from './control_btns.vue'
import ans_btns from './ans_btns.vue'
import help_hint from './help_hint.vue'
import ans_btn_hint from "./ans_btn_hint.vue"
import score_board from "./score_board.vue"

export default {
    components: {
        select_btns,
        control_btn,
        ans_btns,
        help_hint,
        ans_btn_hint,
        score_board
    }
}
</script>

<style lang="sass" src="@/sass/3-modules/chord_classification/chord_classification.sass">

</style>