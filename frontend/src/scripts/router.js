import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/pages/Homepage.vue'
import Blog from '@/pages/Blog.vue'
import BlogDetail from '@/pages/BlogDetail.vue'
import About from '@/pages/About.vue'
import Category from '@/pages/Category.vue'
import AuthorDetail from '@/pages/AuthorDetail.vue'
import Contact from '@/pages/Contact.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'

const routes = [
  { path: '/', component: Homepage},
  { path: '/blog', component: Blog },
  { path: '/blog-detail/:id', component: BlogDetail, name: 'blog-detail' },
  { path: '/about', component: About },
  { path: '/category/:id', component: Category },
  { path: '/author/:id', component: AuthorDetail },
  { path: '/contact', component: Contact },
  { path: '/privacy-policy', component: PrivacyPolicy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router