
import Vue from 'vue'
import App from './app'
import router from './router'
import element from './element/index'
import './assets/css/comment.less'
import utils from './assets/js/utils.js'
Vue.prototype.$utils = utils
Vue.use(element)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')