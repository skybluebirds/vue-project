<template>
    <main>
        <!--lg-preview需要在内容之上显示  -->
        <lg-preview></lg-preview>   
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
