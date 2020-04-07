const Index= () => import(/* webpackChunkName: "company.index" */ '@/view/company/Index.vue');
const Basics= () => import(/* webpackChunkName: "company.basics" */ '@/view/company/Basics.vue');
const Build= () => import(/* webpackChunkName: "company.build" */ '@/view/company/Build.vue');
const Device= () => import(/* webpackChunkName: "company.device" */ '@/view/company/Device.vue');
const FireControl= () => import(/* webpackChunkName: "company.fire-control" */ '@/view/company/FireControl.vue');
export default [
  {
    path: '/company',
    name: 'company',
    meta: { name: '单位信息', header: true },
    component: Index,
    children: [
      {
        path: '/company-basics',
        name: 'company-basics',
        meta: { name: '单位基本信息', header: true },
        component: Basics,
      },
      {
        path: '/company-build',
        name: 'company-build',
        meta: { name: '建筑管理', header: true },
        component: Build,
      },
      {
        path: '/company-device',
        name: 'company-device',
        meta: { name: '设备管理', header: true },
        component: Device,
      },
      {
        path: '/company-fireControl',
        name: 'company-fireControl',
        meta: { name: '单位消防系统', header: true },
        component: FireControl,
      },
    ]
  },
];