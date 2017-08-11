'use strict';
// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 1.1、在vue中使用路由,手动启用插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 二、

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
