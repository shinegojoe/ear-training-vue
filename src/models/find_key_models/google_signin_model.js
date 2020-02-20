

class GoogleSignModel{
    constructor(){
        this.auth2 = undefined
    }

    gapi_load(gapi, client_id){
        const gapi_init_promise = new Promise((resolve, reject)=>{

            gapi.load('auth2', ()=>{
                let auth2 = gapi.auth2.init({
                    // client_id: this.api_info.get_client_id(),
                    client_id: client_id,
                    // client_id: 'xx',
                    scope: 'profile'
                })
                auth2.then((auth)=>{
                    this.auth2 = auth
                    resolve('ok')

                }).catch(function(err){
                    reject(err)
                })
                // console.log('auth', auth2)
                // this.auth2 = auth2
            })

        })

        return gapi_init_promise
        

    }

    // _get_token(google_user){
    //     const access_token = google_user.getAuthResponse().access_token
    //     return access_token

    // }

    sign_in(){
        const signin_promise = new Promise((resolve, reject)=>{
            this.auth2.signIn().then((google_user)=>{
                const access_token = google_user.getAuthResponse().access_token
                resolve(access_token)
                
            }).catch((err)=>{
                reject(err)
            })

        })
        return signin_promise

        // this.auth2.signIn().then((google_user)=>{
        //     const access_token = google_user.getAuthResponse().access_token

        // }).catch((err)=>{

        // })
        
    }


    sign_out(){

    }
}

export {GoogleSignModel}