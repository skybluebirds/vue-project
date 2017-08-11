<template>
    <main>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </main>
</template>

<script>
import Cfooter from './home/footer.vue';
import Cheader from './home/header.vue';
export default {
    data() {
        return {}
    },
    components: {
        'v-header': Cheader,
        'v-footer': Cfooter
    }
}
</script>

<style>

</style>
