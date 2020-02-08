<template>
    <div id="help-wrap" v-bind:class="index_up_class">
        <!-- <h1>Help hint</h1> -->
        <transition name="hint" v-on:enter="enter(enter_done)">
            <div id="help-msg" v-if="is_help">{{chord_data}}</div>
        </transition>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
           
            index_up_class: "z-index-last",
            // chord_data: [],
            // is_help: false
        }
    },


    methods: {
        enter_done: function(){
            // console.log(this)
            // this.is_help = false
            this.$store.commit('ans_btns/is_help', false)

        },
        enter: function(done){
            // console.log("el", el)
            // console.log("done", done)
            this.index_up_class = ""

            done()
            setTimeout(()=>{
                this.index_up_class = "z-index-last"
            }, 1000)
        },
       
    },
    computed: {
        chord_data(){
            const chord_data = this.$store.state.ans_btns.chord_data
            const root_note = chord_data.root_note.replace("4", "")
            const msg = `${root_note}${chord_data.chord_type}`
            return msg

        },
        is_help(){
            return this.$store.state.ans_btns.is_help
        }
    },
        
}
</script>

