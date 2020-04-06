


const Index= () => import(/* webpackChunkName: "company.index" */ '@/view/company/company.index.vue');
export default [
  {
    path: '/company',
    name:'company',
    meta:{name: '单位信息',header: true},
    children: [
        {
            path: '/company-index',
            name: 'company-index',
            meta:{name: '单位基本信息',header: true},
            component: Index,
        }
    ]
  }
];