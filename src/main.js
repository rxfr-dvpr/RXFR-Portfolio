import './assets/scss/main.scss';
import './assets/css/all.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
