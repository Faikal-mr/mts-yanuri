<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'
import { useNews } from '@/composables/useNews'

const { news, loading } = useNews()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const excerpt = (text: string) => {
  return text.slice(0, 160) + '...'
}
</script>

<template>
  <section class="py-28 bg-white">
    <Container>
      <!-- Loading -->

      <div v-if="loading" class="text-center text-gray-500">Memuat berita unggulan...</div>

      <!-- Featured Article -->

      <div v-else-if="news.length" class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image -->

        <RouterLink :to="`/berita/${news[0].slug}`" class="block group">
          <img
            :src="news[0].image"
            :alt="news[0].title"
            class="rounded-2xl shadow-xl object-cover w-full h-[420px] transition duration-500 group-hover:scale-[1.03]"
          />
        </RouterLink>

        <!-- Content -->

        <div>
          <p class="text-sm text-gray-400">
            {{ formatDate(news[0].created_at) }}
          </p>

          <h2 class="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
            {{ news[0].title }}
          </h2>

          <p class="mt-6 text-gray-600 leading-relaxed">
            {{ excerpt(news[0].content) }}
          </p>

          <RouterLink
            :to="`/berita/${news[0].slug}`"
            class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Baca Selengkapnya →
          </RouterLink>
        </div>
      </div>
    </Container>
  </section>
</template>
