import { createRouter, createWebHistory } from 'vue-router'
import newsRoutes from './modules/news'

const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/tentang',
    component: () => import('../pages/TentangPage.vue'),
  },
  {
    path: '/program',
    component: () => import('../pages/ProgramPage.vue'),
  },
  {
    path: '/berita',
    component: () => import('../pages/BeritaPage.vue'),
  },
  {
    path: '/kontak',
    component: () => import('../pages/KontakPage.vue'),
  },

  ...newsRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
