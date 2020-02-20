

class GoogleSignInPresenter{
    constructor(google_signin_model, youtube_api_model){
        this.google_signin_model = google_signin_model
        this.youtube_api_model = youtube_api_model
    }

    gapi_load(gapi){
        return this.google_signin_model.gapi_load(gapi)
    }

    sign_in(){
        // const signin_promise = this.google_signin_model.sign_in()
        // signin_promise.then(function(token){
        //     console.log('token', token)
        // })
        return this.google_signin_model.sign_in()
    }

    load_play_list(access_token, api_key){
        const play_lists_promise = this.youtube_api_model.get_playlists(access_token, api_key)
        return play_lists_promise
    }

    set_access_token(access_token){
        this.youtube_api_model.set_access_token(access_token)

    }

    sign_out(){

    }
}

export {GoogleSignInPresenter}