import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/pages/Homepage.vue'
import Blog from '@/pages/Blog.vue'
import BlogDetail from '@/pages/BlogDetail.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', component: Homepage},
  { path: '/blog', component: Blog },
  { path: '/blog-detail/:id', component: BlogDetail, name: 'blog-detail' },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router