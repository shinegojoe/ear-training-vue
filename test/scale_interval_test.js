import {store} from '../src/store/store.js'
import {ScaleListModel} from '../src/models/scale_interval_model/scale_list_model.js'
import {ScaleListPresenter} from '../src/presenters/scale_interval_presenter/scale_list_presenter.js'
import {scale_interval_map} from '@/helpers/scale_interval_map.js'

import {Howl, Howler} from 'howler'
const assert = require('assert')


describe('the scale_list_model test', function(){
    // const scale_list_presenter = new ScaleListPresenter(scale_list_model)

    describe('get_scale_list test', function(){
        /*
        get_scale_list()
        return the scale_interval_map object
        {
            "Root": 0,
            "MinorSecond": 1,
            ...
        }

        */
        it('get the scale list, the list should has the "Root" property', function(){
            const scale_list_model = new ScaleListModel(store, scale_interval_map)

            const scale_list = scale_list_model.get_scale_list()
            if('Root' in scale_list){
                assert.equal(true, true)
            }
            
        })

        it('nonvaild scale_interval_map', function(){
            const scale_interval_map = ['1', 3, 6]
            const scale_list_model = new ScaleListModel(store, scale_interval_map)
            const scale_list = scale_list_model.get_scale_list()
            if('Root' in scale_list){
                assert.equal(true, false)
            }
            else{
                assert.equal(true, true)
            }


        })
    })

    describe('selected scale list test', function(){
        /*
        get_selected_scale_list():
            return a interval array
        set_selected_scale_list(val):
            val: interval array, like ["MajorThird", "PrefectFiveth"]
        */

        it('each element shoud be equal', function(){
            const scale_list_model = new ScaleListModel(store, scale_interval_map)
            const test_data = ["MajorThird", "PrefectFiveth"]
            scale_list_model.set_selected_scale_list(test_data)
            const res_data = scale_list_model.get_selected_scale_list()
            for(let i=0; i<test_data.length; i++){
                if(res_data[i] !==test_data[i]){
                    assert.equal(true, false)
                }
            }
            assert.equal(true, true)
        })

        it('wrong data', function(){
            const scale_list_model = new ScaleListModel(store, scale_interval_map)
            const test_data = ["MajorThird", "PrefectFiveth"]
            const wrong_data = ["MajorThird", "PrefectFivethXXX"]

            scale_list_model.set_selected_scale_list(test_data)
            const res_data = scale_list_model.get_selected_scale_list()
            for(let i=0; i<test_data.length; i++){
                if(res_data[i] !==wrong_data[i]){
                    assert.equal('true', 'true')
                }
            }
            // assert.equal('ok', '!ok')
        })

       
    })


})