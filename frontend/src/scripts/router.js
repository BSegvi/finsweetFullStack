import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Homepage from '@/pages/Homepage.vue'
import Blog from '@/pages/Blog.vue'

const routes = [
  { path: '/', component: Homepage},
  { path: '/blog', component: Blog }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
