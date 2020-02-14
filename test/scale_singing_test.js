
import {ScaleListModel} from '../src/models/scale_singing_model/scale_list_model.js'
import {AudioListModel} from '../src/models/scale_singing_model/audio_list_model.js'
import {Howl, Howler} from 'howler'

const model = new ScaleListModel()
const audio_list_model = new AudioListModel()
var assert = require('assert')


describe('get_singing_scale_list', function(){
    it('each list should be a Array like [0, 2, 4, 5, 7, 9, 11, 12],', function(){
        const singing_scale_list = model.get_singing_scale_list()
        for(let scale of singing_scale_list){
            if(!Array.isArray(scale)){
                assert.equal(true, false)
            }
            
        }
        assert.equal(true, true)
    })
})



describe('audio model test', function(){

    describe('_get_audio_list test', function(){
        /*
        _get_audio_list(scale_list)
        scale_list: a note string array like [0, 2, 5]
        */
        it('return a audio list, each element is the Howl Object, should has the play property', function(){
            const test_scale_list = [0, 2, 4]
            // const test_scale_list = model.get_singing_scale_list()
            const audio_list = audio_list_model.get_audio_list(test_scale_list)
            for(let audio of audio_list){
                // console.log('audio', audio)
                // if(!audio.hasOwnProperty('play')){
                //     assert.equal(true, false)
                // }
                if(!"play" in audio){
                    assert.equal(true, false)
                }
            }
            return assert.equal(true, true)
        })

        it('the scale_list has the undefined index, raise error', function(){
            const test_scale_list = [0, 2, 400]
            try{
                const audio_list = audio_list_model.get_audio_list(test_scale_list)

            }
            catch(e){
                console.log('eeee', e)
                assert.equal(e.message, 'get_audio_list_failed')

            }
        })

    })


    describe('play test', function(){
        /*
        play(audio_list, play_interval)
        audio_list: 
            array: [HowlObject, HowlObject, ...]
        play_interval:
            string: a string number 
        */
        this.timeout(20000)

        it('pass case', function(){
            const test_scale_list = [0, 2, 4]
            const audio_list = audio_list_model.get_audio_list(test_scale_list)
            const res_promise = audio_list_model.play(audio_list, '1')

            return res_promise.then(function(){
                assert.equal(true, true)
            }).catch(function(){
                assert.equal(true, false)
            })

        })

        it('the audio list is not valid, raise error', function(){
            const audio_list = ['', 1, 2]
            const res_promise = audio_list_model.play(audio_list, '1')

            return res_promise.then(function(){
                assert.equal(true, true)
            }).catch(function(e){
                assert.equal(e.message, 'play_error')
            })

        })
    })
})



// describe('_get_audio_list from audio_list_model', function(){
    
//    it('return a audio list, each element is the Howl Object, should has the play property', function(){
//         const test_scale_list = [0, 2, 4]
//         // const test_scale_list = model.get_singing_scale_list()
//         console.log(test_scale_list)
//         const audio_list = audio_list_model.get_audio_list(test_scale_list)
//         for(let audio of audio_list){
//             // console.log('audio', audio)
//             // if(!audio.hasOwnProperty('play')){
//             //     assert.equal(true, false)
//             // }
//             if(!"play" in audio){
//                 assert.equal(true, false)
//             }
//             // try{
//             //     audio.qq()
//             // }
//             // catch(e){
//             //     return assert(true, false)
//             // }
//         }
//         return assert.equal(true, true)
//    })




//    it('play audio tets', function(){
//        this.timeout(20000)
//         // const test_scale_list = model.get_singing_scale_list()
//         const test_scale_list = [0, 2, 4]


//         const audio_list = audio_list_model.get_audio_list(test_scale_list)
//         // console.log('audio_list', audio_list)
//         const res = audio_list_model.play(audio_list, '1')
//         console.log('res', res)
//         return res.then(function(){
//             // console.log('vaaal', val)
//             assert.equal(true, true)
//         }).catch(function(e){
//             console.log('error', e)
//             assert.equal(true, false)
//         })
//         // assert.equal(res, 'play_done')

//    })
// })
   


// describe('promise test', function(){
//     it('', function(){
//         const promise = model.pm_test(false)
//         return promise.then(function(val){
//             assert.equal(val, 'ok')
//         }).catch(function(e){
//             console.log('eee', e)
//             assert.equal(e, 'nono!!!')
//         })
//     })
// })


// describe('promise test2', function(){
//     it('', function(){
//         const promise = model.pm_test(false)
//         return promise.then(function(val){
//             assert.equal(val, 'ok')
//         }, function(e){
//             console.log('error', e)
//             assert.equal(e, 'nono!!')
//         })
        
//     })
// })