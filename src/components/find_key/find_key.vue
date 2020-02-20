

<template>
    <div id="find-key-container">
        <!-- <div id="my-signin2"></div> -->
        <div id="find-key-container-right">
            <video_iframe></video_iframe>
            <piano_panel></piano_panel>
        </div>
       
        <div id="find-key-container-left">
            <google_signin></google_signin>
            <play_list></play_list>
        </div>

        <!-- <video_iframe></video_iframe>
        <piano_panel></piano_panel>
        <google_signin></google_signin>
        <play_list></play_list> -->
        

       
        <!-- <div v-for="(play_list, index) in play_lists" :key="index">
            <button @click="link_btn_click(play_list)">{{play_list | play_list_title}}</button>

        </div> -->
        <!-- <div v-for="video in video_list" :key="video">
            <div class="video-wrap">
                <img v-bind:src="video | video_img">
                <button @click="video_click(video)">{{video | video_name}}</button>
            </div>
            
        </div> -->

    </div>
</template>


<script>

import axios from 'axios'
import google_signin from './google_signin.vue'
import play_list from './play_list.vue'
import video_iframe from './video_iframe.vue'
import piano_panel from './piano_panel.vue'

export default {

    data: function(){
        return {
            // play_list: undefined,
            google_user: undefined,
            video_list: undefined,

        }
    },
    components: {
        google_signin,
        video_iframe, 
        play_list,
        piano_panel
    },
    filters: {
        play_list_title: function(val){
            return val.snippet.title
        },
        video_name: function(video){
            const title = video.snippet.title
            return title
        },
        video_img: function(video){
            const url = video.snippet.thumbnails.default.url
            return url
        }
    },

    methods: {
        // onSuccess: function(googleUser){
        //     console.log(googleUser)
        //     const access_token = googleUser.uc.access_token
        //     console.log('access_token', access_token)
        //     var profile = googleUser.getBasicProfile();
            

        // },
        link_btn_click: function(event){
            console.log("event", this, event)
            const access_token = this.google_user.uc.access_token

            let url = `https://content.googleapis.com/youtube/v3/playlistItems?maxResults=20&part=snippet&contentDetails&playlistId=${event.id}`
            let headers = {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${access_token}`
                        }
                        axios.get(url, {headers:headers}).then((res)=>{
                            console.log(res)
                            this.video_list = res.data.items
                        })
        },
        video_click: function(video){
            const video_id = video.snippet.resourceId.videoId
            console.log('video_id', video_id)
            this.video_url = `https://www.youtube-nocookie.com/embed/${video_id}?controls=0`

        },
       
        signOut: function(){
            var auth2 = gapi.auth2.getAuthInstance()
            console.log('auth2', auth2)
            auth2.signOut().then(function(){
                console.log("out out out!!")
            })
        },
    },


    
}
</script>

<style lang="sass" src="@/sass/3-modules/find_key.sass">

</style>
