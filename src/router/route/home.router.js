


const home= () => import(/* webpackChunkName: "home" */ '@/view/home/home.vue');
export default [
  {
    path: '/home',
    name:'home',
    meta:{name: '首页',header: true},
    component: home,
    children:[]
  }
];