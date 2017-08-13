<template>
    <article class="list">
        <v-title :title='title'></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/news/details/'+item.id" >
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">
                            <span>创建日期：{{item.add_time}}</span>
                            <span>点击量：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </article>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
export default {
    data() {
        return {
            list:[],
            title: '新闻咨询',
        }
    },
    methods: {
        getNewsList() {
            this.$http.get(config.newsListUrl).then(resp => {
                // console.log(resp);
                if(resp.body.status ==0){
                    this.list = resp.body.message;
                }
            });
        }
    },
    components: {
        'v-title': Ctitle
    },
    created(){
        this.getNewsList();
    }
}
</script>


<style lang="less">

</style>
