import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App); //Crea l'aplicació

app.use(router); //Utilitza el router amb un middleware

app.mount('#app'); //Monta l'aplicació
