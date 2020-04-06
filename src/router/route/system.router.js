

const responsibility= () => import(/* webpackChunkName: "system.responsibility" */ '@/view/system/system.responsibility.vue');
const standard= () => import(/* webpackChunkName: "system.standard" */ '@/view/system/system.standard.vue');
export default [
  {
    path: '/system',
    name: 'system',
    meta:{name: '消防安全制度',header: true},
    children: [
        {
            path: '/system-responsibility',
            name: 'system-responsibility',
            meta:{name: '消防安全岗位职责',header: true},
            component: responsibility,
        },{
            path: '/system-standard',
            name: 'system-standard',
            meta:{name: '消防安全制度标准设置',header: true},
            component: standard,
        },
    ],
  }
];