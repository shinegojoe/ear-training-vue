<template>
    <div id="help-hint-container">
        <transition name="hint" v-on:after-enter="afterEnter">
            <div id="help-msg" v-if="is_help">
                <div>{{help_msg}}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {

    methods: {
        afterEnter: function(ele){
            return this.$store.commit('scale_interval/is_help', false)
        }
    },

    computed: {
        is_help: function(){
            return this.$store.state.scale_interval.is_help
        },
        help_msg: function(){
            return this.$store.state.scale_interval.help_msg
        }
    }
    
}
</script>