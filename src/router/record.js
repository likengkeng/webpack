const Guarantee= () => import(/* webpackChunkName: "recordGuarantee" */ '@/view/record/Guarantee.vue');
const Patrol= () => import(/* webpackChunkName: "recordPatrol" */ '@/view/record/Patrol.vue');
const Index= () => import(/* webpackChunkName: "recordIndex" */ '@/view/record/Index.vue');
export default [
  {
    path: '/record',
    name: 'record',
    meta: { name: '消防工作记录', header: true },
    component: Index,
    children: [
        {
            path: '/record-guarantee',
            name: 'record-guarantee',
            meta: { name: '设备巡查', header: true },
            component: Guarantee,
        },{
            path: '/record-patrol',
            name: 'record-patrol',
            meta:{name: '设备保修',header: true},
            component: Patrol,
        }
    ],
  }
];