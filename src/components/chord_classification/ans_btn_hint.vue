<template>
    <div id="ans-btn-hint-wrap" v-bind:class="index_up_class">
        <transition name="msg-hint" v-on:enter="enter(enter_done)">
            <div id="ans-msg" v-if="is_ans_show">{{ans_msg}}</div>
            <!-- <div id="ans-msg">{{ans_msg}}</div> -->
        </transition>
    </div>
    
</template>

<script>
export default {
    data: function(){
        return {
            index_up_class: 'z-index-last'
        }
    },
    methods: {
        enter: function(done){
            this.index_up_class = ''
            done()  
            setTimeout(()=>{
                this.index_up_class = 'z-index-last'
            }, 1000)  
                    
        },
        enter_done: function(){
            this.$store.commit('ans_btns/is_ans_show', false)

        }

    },
    computed:{
        is_ans_show(){
            return this.$store.state.ans_btns.is_ans_show
        },
        ans_msg(){
            return this.$store.state.ans_btns.ans_msg
        }
    }
    
}
</script>