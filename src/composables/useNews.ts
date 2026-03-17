import { ref, onMounted } from 'vue'
import { getLatestNews } from '@/services/newsService'
import type { News } from '@/types/news'

// 🔥 cache global (di luar function)
const newsCache = ref<News[] | null>(null)

export function useNews() {
  const news = ref<News[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const loadNews = async () => {
    try {
      // ✅ gunakan cache jika ada
      if (newsCache.value) {
        news.value = newsCache.value
        loading.value = false
        return
      }

      const data = await getLatestNews()

      news.value = data
      newsCache.value = data
    } catch (err) {
      console.error(err)
      error.value = 'Gagal memuat berita'
    } finally {
      loading.value = false
    }
  }

  onMounted(loadNews)

  return {
    news,
    loading,
    error,
  }
}
