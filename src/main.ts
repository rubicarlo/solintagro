import { createApp } from 'vue';
import App from './App.vue';
import './assets/estilos.css';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap';
import { createBootstrap } from 'bootstrap-vue-next';
import i18n from './i18n/i18n';

const app = createApp(App);
app.use(router);
app.use(createBootstrap());
app.use(i18n); // Usa i18n en la aplicación

app.mount('#app');