

class ControlBtnsPresenter{
    constructor(model){
        this.control_btns_model = model
    }

    play(){
        this.control_btns_model.play()
    }

    help(){
        this.control_btns_model.help()
    }

    next(){
        this.control_btns_model.next()
    }
}

export {ControlBtnsPresenter}