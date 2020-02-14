<template>
    <div>
        <root_note_selector></root_note_selector>
        <scale_selector></scale_selector>
        <control_btns></control_btns>
    </div>
</template>

<script>
import root_note_selector from './root_note_selector.vue'
import scale_selector from './scale_selector.vue'
import control_btns from './control_btns.vue'


export default {
    components: {
        root_note_selector,
        scale_selector,
        control_btns
    }    
}
</script>