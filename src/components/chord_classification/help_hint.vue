<template>

    <div id="help-wrap">
        <transition name="hint" v-on:after-enter="afterEnter">
            <!-- <div id="help-msg" v-if="is_help">{{chord_data}}</div> -->
            <div id="help-msg" v-if="is_help">
                <div>{{help_msg}}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    
    methods: {
        test: function(){
            this.$store.commit('chord_classification/is_help', true)

        },
        afterEnter: function(ele){
            console.log('after_enter')
            this.$store.commit('chord_classification/is_help', false)
            
        }
       
    },
    computed: {
    
        is_help(){
            return this.$store.state.chord_classification.is_help
        },

        help_msg(){
            return this.$store.state.chord_classification.help_msg
        }
    },
        
}
</script>

