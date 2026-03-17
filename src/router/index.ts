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
    meta: {
      title: 'Beranda',
      description: 'Website resmi MTs Yanuri Annamira.',
    },
  },
  {
    path: '/tentang',
    component: TentangPage,
    meta: {
      title: 'Tentang',
      description: 'Mengenal MTs Yanuri Annamira lebih dekat.',
    },
  },
  {
    path: '/program',
    component: ProgramPage,
    meta: {
      title: 'Program',
      description: 'Program unggulan MTs Yanuri Annamira.',
    },
  },
  {
    path: '/berita',
    component: BeritaPage,
    meta: {
      title: 'Berita',
      description: 'Informasi dan berita terbaru MTs Yanuri.',
    },
  },
  {
    path: '/kontak',
    component: KontakPage,
    meta: {
      title: 'Kontak',
      description: 'Hubungi MTs Yanuri Annamira.',
    },
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

router.afterEach((to) => {
  const baseTitle = 'MTs Yanuri'

  const route = to.matched[to.matched.length - 1]

  const title = route?.meta?.title as string | undefined
  const description = route?.meta?.description as string | undefined

  document.title = title ? `${title} | ${baseTitle}` : baseTitle

  const metaDescription = document.querySelector('meta[name="description"]')

  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'Website resmi MTs Yanuri Annamira.')
  }
})

export default router
