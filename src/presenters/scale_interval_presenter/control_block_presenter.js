

class ControlBlockPresenter{
    constructor(control_block_model){
        this.model = control_block_model
    }

    play(){
        this.model.play()
    }

    help(){
        this.model.help()
    }

    next(){
        this.model.next()
    }
}

export {ControlBlockPresenter}