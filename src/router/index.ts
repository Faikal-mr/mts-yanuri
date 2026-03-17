import { createRouter, createWebHistory } from 'vue-router'
import newsRoutes from './modules/news'

const HomePage = () => import('@/pages/HomePage.vue')
const TentangPage = () => import('@/pages/TentangPage.vue')
const ProgramPage = () => import('@/pages/ProgramPage.vue')
const BeritaPage = () => import('@/pages/BeritaPage.vue')
const KontakPage = () => import('@/pages/KontakPage.vue')
const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/tentang',
    component: TentangPage,
  },
  {
    path: '/program',
    component: ProgramPage,
  },
  {
    path: '/berita',
    component: BeritaPage,
  },
  {
    path: '/kontak',
    component: KontakPage,
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
