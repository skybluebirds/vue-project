// 因为我们使用webpack打包，最终每个文件都是一个模块，没有所谓的全局变量，使用什么组件都要单独导入
import VueRouter from 'vue-router';
import ComptIndex from '../component/index.vue';

// 创建组件


// 这额js对外到处一个路由实例
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        {path:'/index',component:ComptIndex}
    ]
})