import { supabase } from '@/lib/supabase'
import type { News } from '@/types/news'

/**
 * Home page
 * ambil 3 berita terbaru
 */
export const getLatestNews = async (): Promise<News[]> => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  if (error) {
    console.error(error)
    return []
  }

  return data as News[]
}

/**
 * Berita page
 * pagination
 */
export const getNewsPaginated = async (page: number, limit: number = 6) => {
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await supabase
    .from('news')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) {
    console.error(error)
    return {
      data: [],
      total: 0,
    }
  }

  return {
    data: data as News[],
    total: count || 0,
  }
}

export const newsService = {
  async getNewsBySlug(slug: string): Promise<News | null> {
    const { data, error } = await supabase.from('news').select('*').eq('slug', slug).single()

    if (error) {
      console.error(error)
      return null
    }

    return data as News
  },
}
