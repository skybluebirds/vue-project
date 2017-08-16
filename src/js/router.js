// 因为我们使用webpack打包，最终每个文件都是一个模块，没有所谓的全局变量，使用什么组件都要单独导入
// 导入包
import VueRouter from 'vue-router';
// 导入index组件
import Cindex from '../component/index/index.vue';
// 导入news中的list组件
import CnewsList from '../component/news/list.vue';
// 导入details组件
import CnewsDetails from '../component/news/details.vue';
// 导入photo中的list组件
import CphotoList from '../component/photo/list.vue';
// 导入photo中的details组件
import CphotoDetails from '../component/photo/details.vue';


// 创建组件


// 这个js对外导出一个路由实例，
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        { path: '/news/list', component: CnewsList },
        { path: '/news/details/:id', component: CnewsDetails },
        {path:'/photo/list/:id',component:CphotoList},
        {path:'/photo/details/:id',component:CphotoDetails}
    ]
})