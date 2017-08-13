<template>
    <section class="details">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{details.title}}</div>
            <div class="mui-card-footer">
                <span>创建时间：{{details.add_time | formatDate('YYYY-MM-DD')}} </span>
                <span>浏览量：{{details.click}} </span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html='details.content'></div>
            </div>
        </div>
    </section>
</template>

<script>
import config from '../../js/config';
import Ctitle from '../common/title.vue';
export default {
    data() {
        return {
            details: {},
            title: '新闻详情'
        }
    },
    methods: {
        getDetails() {
            this.$http.get(config.newsDetailsUrl + this.$route.params.id).then(resp => {
                console.log(resp);
                if (resp.body.status == 0) {
                    this.details = resp.body.message[0];
                }
            });
        }
    },
    created() {
        this.getDetails();
    },
    components: {
        'v-title': Ctitle
    }
}
</script>


<style lang="less">
.details {
    .mui-card {
        .mui-card-footer span {
            font-size: 12px;
        }
        .mui-card-content p {
            color: #000;
        }
    }
}
</style>

