// import Vue from 'vue';
import { 
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Row,
    Col,
} from 'element-ui';


const element = {
    install: function (Vue) {
        Vue.use(Button);
        Vue.use(Menu);
        Vue.use(Submenu);
        Vue.use(MenuItem);
        Vue.use(MenuItemGroup);
        Vue.use(Row);
        Vue.use(Col);
    }
   }
   export default element