<template>
    <div id="video-iframe-wrap">
        <iframe width="560" height="315" v-bind:src="video_url" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>

        

    </div>

</template>

<script>
export default {

    computed: {
        video_url(){
            return this.$store.state.find_key.video_url
        }
    }
    
}
</script>