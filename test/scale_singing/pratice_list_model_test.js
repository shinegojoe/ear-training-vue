import {PraticeListModel} from '@/models/scale_singing_model/pratice_list_model.js'
import {singing_scale_list} from '@/helpers/singing_scale_list.js'
import {note_definition} from '@/helpers/note_definition.js'
import {store} from '@/store/store.js'
import {Howl, Howler} from 'howler';


const assert = require('chai').assert

describe('The PraticeListModel Test', function(){

    const model = new PraticeListModel(store, singing_scale_list, note_definition)
    describe('get_pratice_list()', function(){
        /*
        get the pratice list from the singing_scale_list helper
        const singing_scale_list = [
            [0, 2, 4, 5, 7, 9, 11, 12],
            [0, 4, 2, 5, 4, 7, 5, 9, 7, 11, 9, 12],
            [7, 5, 4, 2, 0],
            [0, 4, 7, 12, 7, 4, 0],
        ]
        */

        it('eatch element should be a number ', function(){
           const pratice_list = model.get_pratice_list()
        //    pratice_list.push([1, 'xx', 'yy'])
           for(let list of pratice_list){
               for(let ele of list){
                   assert.isNumber(ele)
               }
           }
        })
    })


    describe('_get_play_time_interval()', function(){
        /*
        get the data from store
        */

        it('should be a number', function(){
           const res = model._get_play_time_interval()
           assert.isNumber(res)
        })
    })


    describe('_get_start_note()', function(){
        /*
        get the data from store
        */

        it('should be a string', function(){
           const res = model._get_start_note()
           assert.isString(res)
        })
    })


    describe('_get_end_note()', function(){
        /*
        get the data from store
        */

        it('should be a string', function(){
           const res = model._get_end_note()
           assert.isString(res)
        })
    })


    describe('_get_audio_list(pratice_scale, start_note, end_note)', function(){
        /*
        retuen a Howl Object list
        [
            [audio, audio, ...],
            [audio, audio, ....],
            ...
        ]
        */

        it('eatch element should has the play() property', function(){
            const pratice_scale = [1, 2, 4]
            const start_note = 'E4'
            const end_note = 'F#4'
            const audio_list = model._get_audio_list(pratice_scale, start_note, end_note)
            for(let audio_array of audio_list){
                for(let ele of audio_array){
                    assert.property(ele, 'play')
                }
            }
        })
    })

    describe('_play_sound(pratice_audio_list, play_time_interval)', function(){
        /*
      
        */

        it('', function(){
           
        })
    })

})

    