import { ref, watch } from 'vue'
import { getNewsPaginated } from '@/services/newsService'
import type { News } from '@/types/news'

export function useNewsPagination() {
  const news = ref<News[]>([])
  const loading = ref(true)

  const page = ref(1)
  const total = ref(0)
  const perPage = 6

  const loadNews = async () => {
    loading.value = true

    const res = await getNewsPaginated(page.value, perPage)

    news.value = res.data
    total.value = res.total

    loading.value = false
  }

  watch(page, loadNews, { immediate: true })

  return {
    news,
    loading,
    page,
    total,
    perPage,
    loadNews,
  }
}
