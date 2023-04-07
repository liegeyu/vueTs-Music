import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index'
import("@/assets/styles/index.scss");
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(store).use(router);
app.mount("#app");

