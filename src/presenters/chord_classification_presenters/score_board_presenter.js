

class ScoreBoardPresenter{
    constructor(model){
        this.score_board_model = model
    }

    get_correct_count(){
        return this.score_board_model.get_correct_count()

    }

    
    get_total_count(){
        return this.score_board_model.get_total_count()
    }
}

export {ScoreBoardPresenter}