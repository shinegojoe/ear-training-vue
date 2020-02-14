

class ApiInfo{
    constructor(){
        this.api_key = "AIzaSyDrlqwGOq6InuPUEel-NW8k4E4ah2Zl1PE"
        this.client_id = '528621893287-p4ahqcale30or3kg780ujnpgi19aki08.apps.googleusercontent.com'
    }

    get_api_key(){
        return this.api_key
    }

    get_client_id(){
        return this.client_id
    }
}

export {ApiInfo}