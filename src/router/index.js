import Vue from 'vue'
import Router from 'vue-router'
import Company from './route/company.router.js'
import Home from './route/home.router.js'
import Record from './route/record.router.js'
import Staff from './route/staff.router.js'
import System from './route/system.router.js'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component(resolve) {
                require(['../view/index.vue'], resolve)
            },
            children: [...Company, ...Home, ...Record, ...Staff, ...System]
        }
    ]
})