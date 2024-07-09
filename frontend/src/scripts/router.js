import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/pages/Homepage.vue'
import Blog from '@/pages/Blog.vue'
import BlogDetail from '@/pages/BlogDetail.vue'

const routes = [
  { path: '/', component: Homepage},
  { path: '/blog', component: Blog },
  { path: '/blog-detail/:id', component: BlogDetail, name: 'BlogDetail' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router