import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // Ensure this path is correct

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
