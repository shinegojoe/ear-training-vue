import {store} from '@/store/store.js'
import {SettingBlockModel} from '@/models/scale_interval_model/setting_block_model.js'
import {root_note_option} from '@/helpers/scale_interval_map.js'


const assert = require('chai').assert
describe('the SettingBlockModel test', function(){
    

    describe('get_root_note_list test', function(){
        /*
        get_root_note_list()
        return the root_note_option object
        [
            {text: "C", value: "C4"},
            {text: "C#", value: "C#4"},
            ...
        ]

        */
        it('get_root_note_list, each element should has the "text" and "value" property', function(){

            const model = new SettingBlockModel(store, root_note_option)
            // root_note_option.push({'qqq': 123})
            const root_note_list = model.get_root_note_list()
            for(let obj of root_note_list){
                if(!('text' in obj)){
                    assert.isOk(false)
                }
                if(!('value' in obj)){
                    assert.isOk(false)
                }
            }
            assert.isOk(true, 'ok')
        })


        it('add {"xxx": 234} in fake data, is not ok', function(){
            const fake_data = Object.assign([], root_note_option)
            fake_data.push({'xxx': 234})
            const model = new SettingBlockModel(store, fake_data)
            // root_note_option.push({'qqq': 123})
            const root_note_list = model.get_root_note_list()
            for(let obj of root_note_list){
                if(!('text' in obj)){
                    assert.isNotOk(false)
                }
                if(!('value' in obj)){
                    assert.isNotOk(false)
                }
            }
        })
    })

    describe('get_play_mode_option test', function(){
        /*
        get_play_mode_option()
        return ['same-time', 'individual']
        */
        it('the list shoud be equal ["same-time", "individual"]', function(){
            const model = new SettingBlockModel(store, root_note_option)
            const play_mode_list = model.get_play_mode_option()
            assert.deepEqual(play_mode_list, ['same-time', 'individual'])
        })
       
    })

    describe('set_get_root_note_mode test', function(){
        /*
        set_root_note_mode(val)
            val: bool
        get_root_note_mode()
        */
        it('the setter val shoud be the same for getter', function(){
            const model = new SettingBlockModel(store, root_note_option)
            const root_mode = false
            model.set_root_note_mode(root_mode)
            let res = model.get_root_note_mode()
            // res = ''
            assert.deepEqual(res, root_mode)
        })
    })

    describe('set_get_play_mode test', function(){
        /*
        set_play_mode(val)
            val: 'same-time' or 'individual'
        get_play_mode()
        */
        it('the setter val shoud be the same for getter', function(){
            const model = new SettingBlockModel(store, root_note_option)
            const play_mode = 'individual'
            model.set_play_mode(play_mode)
            let res = model.get_play_mode()
            // res = ''
            assert.deepEqual(res, play_mode)
        })
    })

    describe('set_get_root_note test', function(){
        /*
        set_root_note(val)
            val: string like C4, G#4, ...
        get_root_note()
        */
       it('the setter val shoud be the same for getter', function(){
        const model = new SettingBlockModel(store, root_note_option)
        const root_note = 'C#4'
        model.set_root_note(root_note)
        let res = model.get_root_note()
        assert.deepEqual(res, root_note)
        })
    })

})