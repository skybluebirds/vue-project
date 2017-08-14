<template>
    <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>评论发布</h3>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <textarea v-model="content" id="textarea" rows="5" placeholder="请输入评论内容"></textarea>
                    <button @click="commentPost" type="button" class="mui-btn mui-btn-primary mui-btn-block">发表评论</button>
                </div>
            </div>
        </div>
    
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>评论列表</h3>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="mui-table-view">
                        <li v-for="(item,i) in list" :key="i" class="mui-table-view-cell">
                            <div>
                                <span>第{{i+1}}楼</span>
                                <span>作者：{{item.user_name}}</span>
                                <span>发布：{{item.add_time |formatDate}}</span>
                            </div>
                            <p>{{item.content}}</p>
                        </li>
                    </ul>
                    <button ref="loadingBtn" @click="commentGet" type="button" class="mui-btn  mui-btn-block">加载更多</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Toast } from 'mint-ui';
import config from '../../js/config';
import '../../js/filters'
export default {
    data() {
        return {
            content: "",
            pageindex: 1,
            list: []
        }
    },
    props: ['id'],
    methods: {
        // 发表内容
        commentPost() {
            let url = config.commentPut + this.$route.params.id;
            let data = { content: this.content };
            this.$http.post(url, data, { emulateJSON: true }).then(resp => {
                if (resp.body.status == 0) {
                    // console.log(resp);
                    this.list.unshift({
                        user_name:'无名',
                        add_time:Date.now(),
                        content:this.content
                    });
                    Toast({
                        message: '操作成功',
                        iconClass: 'mui-icon mui-icon-extra mui-icon-extra-like'
                    });
                    this.content = '';
                }
            });
        },
        // 点击加载更多
        commentGet() {
            let url = config.commentGet + this.$route.params.id + '?pageindex=' + this.pageindex;
            this.$http.get(url).then(resp => {
                // console.log(resp);
                if (resp.body.status == 0 && resp.body.message.length > 0) {
                    this.list = resp.body.message;
                    this.pageindex++;
                } else {
                    // console.log(this.$refs);
                    this.$refs.loadingBtn.disabled = true;
                }
            });
        }
    },
    created() {
        this.commentGet();
    }
}
</script>

<style lang="less">

</style>
