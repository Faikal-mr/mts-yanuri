<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useNewsDetail } from '@/composables/useNewsDetail'
import { useNews } from '@/composables/useNews'

import ArticleHero from '@/sections/news/ArticleHero.vue'
import ArticleContent from '@/sections/news/ArticleContent.vue'
import ArticleRelated from '@/sections/news/ArticleRelated.vue'

const route = useRoute()

// 🔹 detail
const { article, loading, fetchArticle } = useNewsDetail()

// 🔹 list berita (untuk related)
const { news } = useNews()

// 🔹 ambil related (exclude artikel sekarang)
const relatedNews = computed(() => {
  if (!article.value) return []

  return news.value.filter((item) => item.slug !== article.value!.slug).slice(0, 3)
})

// 🔹 fetch data saat halaman dibuka
onMounted(() => {
  const slug = route.params.slug as string
  fetchArticle(slug)
})
</script>

<template>
  <div v-if="loading" class="text-center py-20 text-gray-500">Memuat berita...</div>

  <template v-else-if="article">
    <!-- Hero -->
    <ArticleHero :article="article" />

    <!-- Content -->
    <ArticleContent :article="article" />

    <!-- Related -->
    <ArticleRelated v-if="relatedNews.length" :articles="relatedNews" />
  </template>
</template>
