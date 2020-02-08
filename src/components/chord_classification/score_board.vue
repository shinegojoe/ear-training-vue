<template>
    <div>
        <h1>Score: <span>{{total}}/{{correct}}</span></h1>
    </div>
</template>

<script>
export default {
    computed: {
        total: function(){
            return this.$store.state.ans_btns.total_count
            // return 100

        },
        correct: function(){
            return this.$store.state.ans_btns.correct_count
            // return 100
        }
    }
    
}
</script>