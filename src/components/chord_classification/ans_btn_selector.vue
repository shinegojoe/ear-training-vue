<template>
    <div id="ans-btn-selector-container">
        <h1>Select The Answer</h1>
        <div id="ans-btn-list-wrap">
            <div class="ans-btn-wrap"  v-for="ans_btn in ans_btn_list" :key="ans_btn">
                <button @click="ans_btn_click(ans_btn)">{{ans_btn}}</button>
            </div>
        </div>
    </div>
</template>

<script>

import {AnsBtnSelectorModel} from '@/models/chord_classification_models/ans_btn_selector_model.js'
import {AnsBtnSelectorPresenter} from '@/presenters/chord_classification_presenters/ans_btn_selector_presenter.js'

export default {
    data: function(){
        return {
            ans_btn_selector_presenter: undefined,
        }
    },

    methods: {
        ans_btn_click: function(chord_type){
            this.ans_btn_selector_presenter.check_ans(chord_type)
        }
    },

    created: function(){
        const ans_btn_selector_model = new AnsBtnSelectorModel(this.$store)
        this.ans_btn_selector_presenter = new AnsBtnSelectorPresenter(ans_btn_selector_model)
    },

    computed: {
        ans_btn_list: function(){
            // console.log(this.ans_btn_selector_presenter.get_selected_chord_type_list())
            return this.ans_btn_selector_presenter.get_selected_chord_type_list()
        }
    }
}
</script>