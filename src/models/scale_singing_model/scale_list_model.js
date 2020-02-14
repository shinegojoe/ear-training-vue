import {singing_scale_list} from '../../helpers/singing_scale_list.js'




class ScaleListModel{
    constructor(){

    }

    get_singing_scale_list(){
        return singing_scale_list
    }

    pm_test(data){
        const p = new Promise(function(resolve, reject){
            try{
                for(let x of data){

                }
                resolve('ok')

            }
            catch(e){
                reject('nono')
            }
           
        })
        return p
    }

    error_test(data){
        try{
            for(let x of data){

            }
        }
        catch(e){
            console.log('error', e)
            throw new Error('qq123')
        }

        return 'ok'
    }
}

export {ScaleListModel}