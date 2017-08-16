'use strict';
// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';  //导入mint-ui组件js内容
import 'mint-ui/lib/style.css';    //导入mint-ui组件的css
import 'mui/dist/css/mui.css';  //导入mui的组件样式css
import 'mui/examples/hello-mui/css/icons-extra.css';    //导入mui组件扩展组件的css样式

// 1.1、在vue中使用路由,手动启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

// 二、导入自己的模块

// 2.4 导入图片预览
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

// 2.3 导入过滤器
import './filters.js';

// 2.1导入自己的模块
import router from './router.js';

//2.2 导入自己的组件
import ComptApp from '../component/App.vue';

// 三、创建一个Vue实例，关联视图，把根组件渲染到视图中
var vm = new Vue({
    el: '#app',
    render: function (c) {  
        return c(ComptApp);
    },
    router
});
