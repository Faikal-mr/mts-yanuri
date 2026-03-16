import type { RouteRecordRaw } from 'vue-router'

const newsRoutes: RouteRecordRaw[] = [
  {
    path: '/berita/:slug',
    name: 'berita-detail',
    component: () => import('@/pages/BeritaDetailPage.vue'),
    props: true,
  },
]

export default newsRoutes
