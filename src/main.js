import './assets/main.css'
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'


const app = createApp(App)
app.use(router) // Use the router

app.mount('#app')
