import Vue from 'vue'
import Router from 'vue-router'
import Company from './company.js'
import Home from './home.js'
import Record from './record.js'
import Staff from './staff.js'
import System from './system.js'

Vue.use(Router)
export default new Router({
    // mode: 'history',
    routes: [ 
        ...Home, 
        ...System, 
        ...Staff,  
        ...Company, 
        ...Record,
    ],
})