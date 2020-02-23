<template>
    <div>
        <h1>Score: <span>{{correct}}/{{total}}</span></h1>
    </div>
</template>

<script>

import {ScoreBoardModel} from '@/models/chord_classification_models/score_board_model.js'
import {ScoreBoardPresenter} from '@/presenters/chord_classification_presenters/score_board_presenter.js'

export default {
    data: function(){
        return {
            score_board_presenter: undefined
        }
    },
    
    created: function(){
        const score_board_model = new ScoreBoardModel(this.$store)
        this.score_board_presenter = new ScoreBoardPresenter(score_board_model)

    },
    computed: {
        total: function(){
            return this.score_board_presenter.get_total_count()
        },
        correct: function(){
            return this.score_board_presenter.get_correct_count()
        }
    }
    
}
</script>