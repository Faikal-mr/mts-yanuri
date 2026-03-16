<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'
import type { News } from '@/types/news'

defineProps<{
  articles: News[]
}>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>

<template>
  <section class="py-20 bg-gray-50">
    <Container>
      <!-- Header -->

      <div class="flex items-center justify-between mb-10">
        <h2 class="text-2xl font-semibold text-gray-900">Berita Terkait</h2>

        <RouterLink to="/berita" class="text-sm font-medium text-primary hover:underline">
          Lihat semua
        </RouterLink>
      </div>

      <!-- Grid -->

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="item in articles"
          :key="item.slug"
          :to="`/berita/${item.slug}`"
          class="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <!-- Image -->

          <div class="overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              loading="lazy"
              class="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <!-- Content -->

          <div class="p-5">
            <p class="text-sm text-gray-400 mb-2">
              {{ formatDate(item.published_at) }}
            </p>

            <h3
              class="text-lg font-semibold text-gray-900 leading-snug group-hover:text-primary transition"
            >
              {{ item.title }}
            </h3>
          </div>
        </RouterLink>
      </div>
    </Container>
  </section>
</template>
