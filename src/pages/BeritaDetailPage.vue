<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useNewsDetail } from '@/composables/useNewsDetail'

import ArticleHero from '@/sections/news/ArticleHero.vue'
import ArticleContent from '@/sections/news/ArticleContent.vue'
import ArticleRelated from '@/sections/news/ArticleRelated.vue'

const route = useRoute()

const { article, loading, fetchArticle } = useNewsDetail()

onMounted(() => {
  const slug = route.params.slug as string
  fetchArticle(slug)
})
</script>

<template>
  <div v-if="loading">Memuat berita...</div>

  <template v-if="article">
    <ArticleHero :article="article" />

    <ArticleContent :article="article" />

    <ArticleRelated />
  </template>
</template>
