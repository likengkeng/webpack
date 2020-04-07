const Department= () => import(/* webpackChunkName: "staff.department" */ '@/view/staff/Department.vue');
const Role= () => import(/* webpackChunkName: "staff.role" */ '@/view/staff/Role.vue');
const Staff= () => import(/* webpackChunkName: "staff.staff" */ '@/view/staff/Staff.vue');
export default [
  {
    path: '/staff',
    name: 'staff',
    meta: { name: '人员管理', header: true },
    children: [
        {
            path: '/staff-department',
            name: 'staff-department',
            meta: { name: '角色管理', header: true },
            component: Department,
        },{
            path: '/staff-role',
            name: 'staff-role',
            meta: { name: '部门管理', header: true },
            component: Role,
        },{
            path: '/staff-staff',
            name: 'staff-staff',
            meta: { name: '人员管理', header: true },
            component: Staff,
        }
    ],
  }
];