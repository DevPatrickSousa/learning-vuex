import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // importando o store
import './assets/main.css'
const app = createApp(App)

app.use(router)
app.use(store) // usando o store criado
app.mount('#app')
