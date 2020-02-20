import axios from 'axios'

let instance;
class YoutubeApi{
    constructor(){
        if(!instance){
            instance = this
        }
        this.axios_instance = axios.create({
            // baseURL: "https://www.googleapis.com/youtube/v3",
        })
        this.access_token = undefined
        return instance
        
    }
    set_access_token(access_token){
        this.access_token = access_token
    }
    get_playlists(access_token, api_key){
        const playlists_promise = new Promise((resolve, reject)=>{
            let headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
            }
            let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=${api_key}`
            this.axios_instance.get(url, {headers:headers}).then((res)=>{
                resolve(res.data.items)
            })

        })
        return playlists_promise
      
    }
    get_playlist_items(event){
        let url = `https://content.googleapis.com/youtube/v3/playlistItems?maxResults=20&part=snippet&contentDetails&playlistId=${event.id}`
        const playlist_items_promise = new Promise((resolve, reject)=>{
            let headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.access_token}`
            }
            axios.get(url, {headers:headers}).then((res)=>{
                resolve(res.data.items)
            })

        })
        return playlist_items_promise


    }

}

export {YoutubeApi}