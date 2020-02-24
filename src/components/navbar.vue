
<template>
    <div id="navbar-container">
        <div id="logo">
            <img src="/dist/images/6.png">
        </div>
        <div id="links">
            <router-link class="link-item" to="/">Chord Classification</router-link>
            <router-link class="link-item" to="/find_key">Find Key</router-link>
            <router-link class="link-item" to="/scale_interval">Scale Interval</router-link>
            <!-- <router-link class="link-item" to="/guitar_training">Guitar Training</router-link> -->
            <router-link class="link-item" to="/scale_singing">Scale Singing</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" src="../sass/3-modules/navbar.sass">

</style>