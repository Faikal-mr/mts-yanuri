import { ref } from 'vue'
import { newsService } from '@/services/newsService'
import type { News } from '@/types/news'

export function useNewsDetail() {
  const article = ref<News | null>(null)
  const loading = ref(true)

  const fetchArticle = async (slug: string) => {
    article.value = await newsService.getNewsBySlug(slug)
    loading.value = false
  }

  return {
    article,
    loading,
    fetchArticle,
  }
}
