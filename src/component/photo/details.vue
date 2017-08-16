<template>
  <section class="details">
    <v-title :title="title"></v-title>
    <div class="mui-card">
      <div class="mui-card-header mui-block">
        <h4>{{info.title}}</h4>
        <div>
          <span> {{info.add_time | formatDate}} </span>
          <span class="mui-pull-right"> {{info.click}}次浏览 </span>
        </div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in thums" :key="item.src">
              <img class="mui-media-object" v-preview="item.src" :src="item.src">
            </li>
          </ul>
          <p v-html="info.content"></p>
        </div>
      </div>
    </div>
    <v-comment :id='id'></v-comment>
  </section>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
import Ccomment from '../common/comment.vue';
export default {
  data() {
    return {
      title: '图片详情',
      info: {},
      thums: [],
      id: this.$route.params.id
    }
  },
  methods: {
    getImagesInfo() {
      let url = config.imagesInfo + this.$route.params.id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.info = resp.body.message[0];
        }
      });
    },
    getThums(id) {
      let url = config.thumsimages + id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          // console.log(resp);
          this.thums = resp.body.message.map(function (img, i) {
            img.src = config.imgDomain + img.src;
            return img;
          });
        }
      });
    }
  },
  created() {
    this.getImagesInfo();
    this.getThums(this.$route.params.id);
  },
  components: {
    'v-title': Ctitle,
    'v-comment': Ccomment
  }
}
</script>

    <style lang="less">
.details {
  .mui-card-header {
    >div {
      color: #999;
    }
  }
}
</style>
