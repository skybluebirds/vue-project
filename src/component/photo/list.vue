<template>
    <section class="category">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-col-xs-4 mui-col-sm-3" ref='addClass'>
                <router-link to="/photo/list/0" :class="{active:isTrue}">全部</router-link>
            </li>
            <li class="mui-table-view-cell mui-col-xs-4 mui-col-sm-3" v-for="item in list" :key="item.id" ref='addClass'>
                <router-link :to='"/photo/list/"+item.id' :class="{active:isTrue}">{{item.title}}</router-link>
            </li>
        </ul>
        <div v-for="item in images" :key="item.id" class="mui-card">
            <router-link :to="'/photo/details/' + item.id">
                <div class="mui-card-header mui-card-media" :style="getStyle(item)"></div>
            </router-link>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h5 class="mui-esllpsis">{{item.title}}</h5>
                    <p class="mui-esllpsis-2">{{item.zhaiyao}}</p>
                </div>
            </div>
    
        </div>
    
    </section>
</template>

<script>
import config from '../../js/config.js';
export default {
    data() {
        return {
            list: [],
            images: [],
            isTrue: false
        }
    },
    watch: {
        $route() {
            this.getImages(this.$route.params.id);
            for (var i = 0; i < this.list.length; i++) {
                var id = this.list[i].id;
                this.isTrue = false;
                if (this.$route.params.id == id) {
                    this.isTrue = true;
                }

            }
        }
    },
    methods: {
        getCategory() {
            let url = config.photoCatagory;
            this.$http.get(url).then(resp => {
                if (resp.body.status == 0) {
                    this.list = resp.body.message
                }
            })
        },
        getImages(id) {
            let url = config.photoImages + id;
            this.$http.get(url).then(resp => {
                if (resp.body.status == 0) {
                    this.images = resp.body.message.map(function (img, i) {
                        img.img_url = config.imgDomain + img.img_url;
                        return img;
                    });
                }
            })
        },
        // 获取背景style
        getStyle(item) {
            return 'height:80vw; background-image:url("' + item.img_url + '");background-size:cover';
        }
    },
    created() {
        this.getCategory();
        this.getImages(this.$route.params.id);
    }
}
</script>

<style lang="less">
.category {
    box-sizing: border-box;
    ul {
        overflow: hidden;
        li.mui-table-view-cell {
            float: left;
            text-align: center;
            padding: 0px;
            font-size: 12px;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            a{
                padding: 5px 0;
                margin: 0;
            }
            .router-link-active {
                background-color: #ccc;
                color: #f00;
                font-weight: 700;
            }
            &:after {
                height: 0px;
            }
        }
    }
    .mui-card {
        .mui-card-content {
            position: absolute;
            bottom: -10px;
            left: 0;
            &-inner {
                background-color: rgba(0, 0, 0, .2);
                padding: 0;
                h5 {
                    color: white;
                    font-weight: 700;
                }
                p {
                    color: white;
                    height: 40px;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>
