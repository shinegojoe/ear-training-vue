<template>
    <div id="ans-btn-wrap">
        <button v-for="scale in selected_scale_list" :key="scale" @click="ans_btn_click(scale)">{{scale}}</button>
    </div>
</template>

<script>
import {AnsBtnsPresenter} from '@/presenters/scale_interval_presenter/ans_btns_presenter.js'
import {AnsBtnsModel} from '@/models/scale_interval_model/ans_btns_model.js'


export default {
    data: function(){
        return {
            ans_btn_presenter: undefined
        }
    },

    created: function(){
        const ans_btns_model = new AnsBtnsModel(this.$store)
        this.ans_btn_presenter = new AnsBtnsPresenter(ans_btns_model)
    },
    methods: {
        ans_btn_click(scale){
            console.log("ans", scale)
        },
    },
    computed: {
        selected_scale_list: {
            get: function(){
                return this.ans_btn_presenter.get_selected_scale_list()
            },
            // set: function(val){
            //     this.ans_btn_presenter.set_selected_scale_list(val)
            // }

        }
    }

    
}
</script>