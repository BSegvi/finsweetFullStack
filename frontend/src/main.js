import './assets/base.css'
import './assets/shared.scss'
import { createMemoryHistory, createRouter } from 'vue-router'
import Homepage from './pages/Homepage.vue'
import { createApp } from 'vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Homepage},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')