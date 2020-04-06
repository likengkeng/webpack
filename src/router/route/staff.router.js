const department= () => import(/* webpackChunkName: "staff.department" */ '@/view/staff/staff.department.vue');
const role= () => import(/* webpackChunkName: "staff.role" */ '@/view/staff/staff.role.vue');
const staff= () => import(/* webpackChunkName: "staff.staff" */ '@/view/staff/staff.staff.vue');
export default [
  {
    path: '/staff',
    name: 'staff',
    meta:{name: '人员管理',header: true},
    children: [
        {
            path: '/staff-department',
            name: 'staff-department',
            meta:{name: '角色管理',header: true},
            component: department,
        },{
            path: '/staff-role',
            name: 'staff-role',
            meta:{name: '部门管理',header: true},
            component: role,
        },{
            path: '/staff-staff',
            name: 'staff-staff',
            meta:{name: '人员管理',header: true},
            component: staff,
        }
    ],
  }
];