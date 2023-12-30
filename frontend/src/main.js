import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from '../store/index.js'
import VueCookies from 'vue-cookies';
createApp(App).use(router).use(router).use(store).use(VueCookies).mount('#app')
