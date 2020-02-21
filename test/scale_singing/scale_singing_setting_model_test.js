import {ScaleSingingSettingModel} from '@/models/scale_singing_model/scale_singing_setting_model.js'
import {note_definition} from "@/helpers/note_definition.js"
import {store} from '@/store/store.js'

const assert = require('chai').assert

describe('The ScaleSingingSettingModel Test', function(){

    const model = new ScaleSingingSettingModel(note_definition, store)
    describe('note_init()', function(){
        /*
        note_init()
        initialize the select note list for the start note list and end note list
        return ["E4", "F4", "F#4", ...]
        */

        it('shoud be return a array, each element shoud be a string', function(){
            const note_list = model.note_init()
            assert.isArray(note_list)
            // note_list.push(123)
            for(let note of note_list){
               assert.isString(note)
           }
        })
    })


    describe('play_time_interval(sec)', function(){
        /*
        seeter and getter
        */

        it('test the setter and getter', function(){
           const test_val = 1.5
           model.set_play_time_interval(test_val)
           const res = model.get_play_time_interval()
           assert.equal(test_val, res)
        })

       
    })


    describe('start_note()', function(){
        /*
        seeter and getter
        */

        it('test the setter and getter', function(){
            const test_val = "E4"
            model.set_start_note(test_val)
            const res = model.get_start_note()
            assert.equal(test_val, res)
        })
    })


    describe('end_note()', function(){
        /*
        seeter and getter
        */

        it('test the setter and getter', function(){
            const test_val = "G#4"
            model.set_end_note(test_val)
            const res = model.get_end_note()
            assert.equal(test_val, res)
        })
    })



})

    