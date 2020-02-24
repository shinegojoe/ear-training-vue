<template>
    <div>
        <div id="play-lists-wrap">
            <h1>Select Play List</h1>
            <div v-for="(play_list, index) in play_lists" :key="index">
                <div id="play-item-wrap">
                    <div @click="play_list_click(play_list)">{{play_list | play_list_title}}</div>    
                </div>
            </div>
        </div>
        
        <div id="video-list-wrap">
            <h1>Select Video</h1>
            <div v-for="(video, index) in video_list" :key="index">
                <div class="video-item-wrap" @click="video_click(video)">
                    <img v-bind:src="video | video_img">
                    <div class="title">{{video | video_name}}</div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
import {YoutubeApi} from '@/axios_modules/youtube_api.js'

export default {

    data: function(){
        return {
            youtube_api: undefined,
            video_list: undefined

        }

    },
    created: function(){
        this.youtube_api = new YoutubeApi()

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
        play_list_click(event){
            // console.log(this.youtube_api.access_token)
            const video_list_promise = this.youtube_api.get_playlist_items(event)
            video_list_promise.then((data)=>{
                this.video_list = data
            })

        },
        video_click: function(video){
            const video_id = video.snippet.resourceId.videoId
            console.log('video_id', video_id)
            const video_url = `https://www.youtube-nocookie.com/embed/${video_id}?controls=0`
            this.$store.commit('find_key/video_url', video_url)

        },
    },
    
    computed: {
    play_lists(){
        return this.$store.state.find_key.play_lists
    }
}
}
</script>