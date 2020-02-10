<template>
    <div id="google-signin-wrap">
        <h1>Sep1:SignIn With Google</h1>
        <button id="my-signin2" @click="sign_in"></button>
        <!-- <button @click="sign_out">signOut</button> -->
    </div>
</template>

<script>
import {ApiInfo} from '@/helpers/google_api_helper.js'
import {YoutubeApi} from '@/axios_modules/youtube_api.js'

export default {

    data: function(){
        return {
            api_info: undefined,
            auth2: undefined,
            access_token: '',
            play_lists: undefined
        }
    },

    created: function(){
        this.api_info = new ApiInfo()
        this.youtube_api = new YoutubeApi()

        console.log('yoyoy', this.youtube_api)
        
    },
    
    methods: {
        sign_in: function(){
            this.auth2.signIn().then((google_user)=>{
                console.log('google_user', google_user)
                const access_token = google_user.getAuthResponse().access_token
                console.log("access_token", access_token)
                this.youtube_api.set_access_token(access_token)
                const play_lists_promise = this.youtube_api.get_playlists(access_token, this.api_info.get_api_key())
                console.log('play_lists_promise', play_lists_promise)
                play_lists_promise.then((data)=>{
                    console.log('play_lists', data)
                    this.play_lists = data
                    this.$store.commit('find_key/play_lists', data)
                })


            })

        },
        sign_out: function(){

        }
    }, 
    mounted: function(){
        gapi.load('auth2', ()=>{
            let auth2 = gapi.auth2.init({
                client_id: this.api_info.get_client_id(),
                scope: 'profile'
            })
            this.auth2 = auth2
        })
    },
    
}
</script>