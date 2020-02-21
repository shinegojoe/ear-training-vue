import {store} from '@/store/store.js'
import {ScaleIntervalModel} from '@/models/scale_interval_model.js'
import {ControlBlockModel} from '@/models/scale_interval_model/control_block_model.js'
import {note_definition, chord_definition} from '@/helpers/note_definition.js'
import {Howl, Howler} from 'howler'
import {scale_interval_map, root_note_option} from '@/helpers/scale_interval_map.js'

const assert = require('chai').assert

describe('The ConrolBlockModel Test', function(){

    const model = new ControlBlockModel(store, note_definition, scale_interval_map, root_note_option, Howl)

    describe('_get_is_random_note()', function(){
        /*
        _get_is_random_note()
            return is_random_note (bool)
        */

        it('should get a bool', function(){
            const is_random_note = model._get_is_random_note()
            assert.isBoolean(is_random_note, 'should a bool')
        })
    })

    describe('_get_root_note', function(){
        /*
        _get_root_note( )
        select a note randomly from the root_note_option
        return C4, G#4, ....(string)
        */
        it('shoud return a string', function(){
           const root_note = model._get_root_note()
           assert.isString(root_note)
        })
    })

    describe('_get_audio_list(root_note, scale_interval)', function(){
        /*
        _get_audio_list(root_note, scale_interval)
            root_note: 'C4'
            scale_interval: 'MajorThird'
            retrun [Howl, Howl, ...]

        */
        it('should get a Howl list', function(){
            const root_note = 'C4'
            const scale_interval = 'MajorThird'
            const audio_list = model._get_audio_list(root_note, scale_interval)
            // const audio_list = ['1', 2]
            for(let audio of audio_list){
                assert.property(audio, 'play')
                // if(!('play' in audio)){
                //     assert.fail('have no play property')
                // }
            }
            // assert.isOk(true)
        })
    })
   
})