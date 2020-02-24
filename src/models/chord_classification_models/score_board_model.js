

class ScoreBoardModel{
    constructor(store){
        this.store = store
    }

    get_correct_count(){
        return this.store.state.chord_classification.correct_count
    }

    get_total_count(){
        return this.store.state.chord_classification.total_count
    }
}

export {ScoreBoardModel}