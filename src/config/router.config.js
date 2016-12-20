import index from '../components/index.vue';//主页
import order from '../components/order/orderManage.vue';//订单管理
import stock from '../components/cha/stockManage.vue';//库存管理
import one from '../components/mywork/one.vue'//我的工作台1
import two from '../components/mywork/two.vue'//我的工作台2
import three from '../components/mywork/three.vue'//我的工作台3
import VueRouter from 'vue-router';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/order',
            component: order
        },
        {
            path: '/one',
            component: one
        },
        {
            path: '/two',
            component: two
        },
        {
            path: '/three',
            component: three
        },
        {
            path: '/stock',
            component: stock
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});