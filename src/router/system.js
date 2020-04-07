const Index= () => import(/* webpackChunkName: "system-standard" */ '@/view/system/Index.vue');
const Responsibility= () => import(/* webpackChunkName: "system-responsibility" */ '@/view/system/Responsibility.vue');
const Standard= () => import(/* webpackChunkName: "system-standard" */ '@/view/system/Standard.vue');
export default [
  {
    path: '/system',
    name: 'system',
    meta: { name: '消防安全制度', header: true },
    component: Index,
    children: [
      {
        path: '/system-responsibility',
        name: 'system-responsibility',
        meta: { name: '消防安全岗位职责', header: true },
        component: Responsibility,
      },{
        path: '/system-standard',
        name: 'system-standard',
        meta: { name: '消防安全制度标准设置', header: true },
        component: Standard,
      },
    ],
  }
];