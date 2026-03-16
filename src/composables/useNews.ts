import { ref, onMounted } from 'vue'
import { getLatestNews } from '@/services/newsService'
import type { News } from '@/types/news'

export function useNews() {
  const news = ref<News[]>([])
  const loading = ref(true)

  const loadNews = async () => {
    news.value = await getLatestNews()
    loading.value = false
  }

  onMounted(loadNews)

  return {
    news,
    loading,
  }
}
