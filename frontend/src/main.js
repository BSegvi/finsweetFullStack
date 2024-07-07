import './assets/base.css'
import './assets/shared.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './scripts/router'

createApp(App).use(router).mount('#app')