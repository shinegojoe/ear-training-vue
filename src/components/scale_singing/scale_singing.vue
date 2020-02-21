<template>
    <div id="scale-singing-container">
        <!-- <h1>Scale Singing</h1> -->
        <scale_singing_setting></scale_singing_setting>
        <hr>
        <pratice_list></pratice_list>
    </div>
</template>

<script>

import scale_singing_setting from './scale_singing_setting.vue'
import pratice_list from './pratice_list.vue'


export default {
    components: {
        scale_singing_setting,
        pratice_list,
    }
}
</script>

<style lang="sass" src='@/sass/3-modules/scale_singing.sass'></style>