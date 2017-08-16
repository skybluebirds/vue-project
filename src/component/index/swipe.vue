<template>
    <section class="swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
import domain from '../../js/config.js';
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getLunBo() {
            this.$http.get(domain.swipeUrl).then(resp => {
                console.log(resp);
                if (resp.body.status == 0) {
                    this.list = resp.body.message;
                }
            })
        }
    },
    // 生命周期函数调用
    created() {
        this.getLunBo();
    }
}
</script>


<style lang='less'>
.swipe {
    height: 200px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
