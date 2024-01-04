import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App);

const CLIENT_ID = '1054099314145-pvfmp848o4dnjdfpckp0ip47m3l0da4i.apps.googleusercontent.com'

app.use(vue3GoogleLogin,{
    clientId:CLIENT_ID
})

app.use(ElementPlus);

app.use(router);

app.mount('#app');
