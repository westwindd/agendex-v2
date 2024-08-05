import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';
import vuetify from './plugins/vuetify' // Ensure this path is correct

const app = createApp(App)

app.use(VueChartkick);
app.use(router)
app.use(vuetify)
app.mount('#app')
