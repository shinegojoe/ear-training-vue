<template>
    <div id="google-signin-wrap">
        <h1>SignIn With Google</h1>
        <button id="my-signin2" @click="sign_in"></button>
        <!-- <button @click="sign_out">signOut</button> -->
    </div>
</template>

<script>
import {ApiInfo} from '@/helpers/google_api_helper.js'
import {YoutubeApi} from '@/axios_modules/youtube_api.js'
import {GoogleSignInPresenter} from '@/presenters/find_key_presenters/google_signin_presenter.js'
import {GoogleSignModel} from '@/models/find_key_models/google_signin_model.js'

export default {

    data: function(){
        return {
            google_signin_presenter: undefined,
            api_info: undefined,
            auth2: undefined,
            access_token: '',
            play_lists: undefined
        }
    },

    created: function(){
        this.api_info = new ApiInfo()
        const youtube_api = new YoutubeApi()

        const google_signin_model = new GoogleSignModel()
        this.google_signin_presenter = new GoogleSignInPresenter(google_signin_model, youtube_api)

        
    },
    
    methods: {
        gapi_init: function(){
        const gapi_init_promise = this.google_signin_presenter.gapi_load(gapi, this.api_info.get_client_id())
                gapi_init_promise.then(function(val){
                    // console.log('qqq', val)
                }).catch(function(err){
                    // console.log('qqq', err)
                })

        },

        load_play_list: function(access_token){
                // const play_lists_promise = this.youtube_api.get_playlists(access_token, this.api_info.get_api_key())
                const play_lists_promise = this.google_signin_presenter.load_play_list(access_token, this.api_info.get_api_key())
                console.log('play_lists_promise', play_lists_promise)
                play_lists_promise.then((data)=>{
                    this.play_lists = data
                    this.$store.commit('find_key/play_lists', data)
                }).catch((err)=>{
                    console.log('load_play_list err', err)
                })
        },

        sign_in: function(){
            const signin_promise = this.google_signin_presenter.sign_in()
            signin_promise.then((access_token)=>{
                this.google_signin_presenter.set_access_token(access_token)

                this.load_play_list(access_token)
            }).catch((err)=>{
                console.log('signin err', err)
            })
            // this.auth2.signIn().then((google_user)=>{
            //     console.log('google_user', google_user)
            //     const access_token = google_user.getAuthResponse().access_token
            //     console.log("access_token", access_token)
            //     this.youtube_api.set_access_token(access_token)
            //     const play_lists_promise = this.youtube_api.get_playlists(access_token, this.api_info.get_api_key())
            //     console.log('play_lists_promise', play_lists_promise)
            //     play_lists_promise.then((data)=>{
            //         console.log('play_lists', data)
            //         this.play_lists = data
            //         this.$store.commit('find_key/play_lists', data)
            //     })


            // })

        },
        sign_out: function(){

        }
    }, 
    mounted: function(){
        this.gapi_init()
        // gapi.load('auth2', ()=>{
        //     let auth2 = gapi.auth2.init({
        //         client_id: this.api_info.get_client_id(),
        //         scope: 'profile'
        //     })
        //     this.auth2 = auth2
        // })
    },
    
}
</script>