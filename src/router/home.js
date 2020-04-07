const Home= () => import(/* webpackChunkName: "home" */ '@/view/home/Index.vue');
export default [
  {
    path: '/home',
    name: 'home',
    meta: { name: '首页', header: true },
    component: Home,
    children:[]
  }
];