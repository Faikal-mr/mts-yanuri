import { ref } from 'vue'
import { newsService } from '@/services/newsService'

export function useNewsDetail() {
  const article = ref(null)
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
