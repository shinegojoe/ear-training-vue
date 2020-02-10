

const state = {
    play_lists: undefined,
    play_list_items: undefined,
    video_url: "https://www.youtube-nocookie.com/embed/65IKNssGRPI?controls=0"
}


const mutations = {
    play_lists: function(state, play_lists){
        state.play_lists = play_lists
    },
    video_url: function(state, video_url){
        state.video_url = video_url
    }

}

export default{
    namespaced: true,
    state,
    mutations
}