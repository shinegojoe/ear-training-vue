<template>
    <div id="ans-btn-wrap">
        <!-- <h1>range</h1> -->
        <!-- <button v-for="data in range_list" :key="data">{{data}}</button> -->
        <!-- <h1>chord</h1> -->
        <button v-for="data in chord_list" :key="data" @click="ans_btn_click" v-bind:name="data">{{data}}</button>

    </div>
</template>

<script>
export default {

    // data: function(){
    //     return {
    //         test_data: [1, 2, 3, 5]
    //     }
    // },
    methods: {
        ans_btn_click: function(event){
            // console.log(event.target.getAttribute("name"))
            const ans = event.target.getAttribute("name")
            // const chord_data = this.$store.getters['ans_btns/chord_data']()
            const chord_data = this.$store.state.ans_btns.chord_data

            console.log("ccc", chord_data)
            console.log("chord_type" , ans)
            let ans_msg = ''
            let total_count = this.$store.state.ans_btns.total_count
            let correct_count = this.$store.state.ans_btns.correct_count
            if(ans === chord_data.chord_type){
                ans_msg = "You got it !!"
                this.$store.commit('ans_btns/total_count', total_count+1)
                this.$store.commit('ans_btns/correct_count', correct_count+1)
                
            }
            else{
                ans_msg = "Wrong Wrong !!"
                this.$store.commit('ans_btns/correct_count', correct_count+1)

            }
            this.$store.commit('ans_btns/ans_msg', ans_msg)
            this.$store.commit('ans_btns/is_ans_show', true)
            
        }        
    },

    computed: {
        chord_list(){
            return this.$store.state.ans_btns.selected_chord_type_list
        },
        range_list(){
            return this.$store.state.ans_btns.selected_range_list

        },
       

    }
    
}
</script>

<style lang="sass">

</style>