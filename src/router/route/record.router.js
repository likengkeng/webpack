

const guarantee= () => import(/* webpackChunkName: "record.guarantee" */ '@/view/record/record.guarantee.vue');
const patrol= () => import(/* webpackChunkName: "record.patrol" */ '@/view/record/record.patrol.vue');
export default [
  {
    path: '/record',
    name: 'record',
    meta:{name: '消防工作记录',header: true},
    children: [
        {
            path: '/record-guarantee',
            name: 'record-guarantee',
            meta:{name: '设备巡查',header: true},
            component: guarantee,
        },{
            path: '/record-patrol',
            name: 'record-patrol',
            meta:{name: '设备保修',header: true},
            component: patrol,
        }
    ],
  }
];