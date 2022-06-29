import { createApp } from 'vue'
import routes from './routers';
import {createWebHistory, createRouter} from "vue-router";
import App from './App.vue'
const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})
app.use(router).mount('#app');
