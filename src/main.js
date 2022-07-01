import { createApp } from 'vue'
import routes from './routers';
import {createWebHistory, createRouter} from "vue-router";
import App from './App.vue'
import i18n from './util';
const app = createApp(App).use(i18n);
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})
app.use(router).mount('#app');
