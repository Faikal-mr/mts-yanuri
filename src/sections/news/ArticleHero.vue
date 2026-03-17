<script setup lang="ts">
import type { News } from '@/types/news'

const props = defineProps<{
  article: News
}>()

const formattedDate = new Date(props.article.published_at).toLocaleDateString('id-ID', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
</script>

<template>
  <section v-reveal class="relative py-20 bg-gray-50">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <!-- Title -->

      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
        {{ article.title }}
      </h1>

      <!-- Meta -->

      <p class="mt-4 text-sm text-gray-500 tracking-wide">Dipublikasikan • {{ formattedDate }}</p>

      <!-- Hero Image -->

      <div class="mt-10 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
        <img
          :src="article.image"
          :alt="article.title"
          loading="lazy"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
</template>
