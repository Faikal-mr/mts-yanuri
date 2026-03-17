<script setup lang="ts">
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'
import { useNews } from '@/composables/useNews'

const { news, loading } = useNews()

// 1 berita utama
const featuredNews = computed(() => news.value?.[0])

// 2 berita samping
const sideNews = computed(() => news.value.slice(1, 3))

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const excerpt = (text: string) => {
  return text.slice(0, 140) + '...'
}
</script>

<template>
  <section class="py-24 bg-white">
    <Container>
      <!-- Loading -->
      <div v-if="loading" class="text-center text-gray-500">Memuat berita unggulan...</div>

      <!-- Content -->
      <div v-else-if="featuredNews" class="grid lg:grid-cols-3 gap-10 items-start">
        <!-- 🔥 HERO (besar kiri) -->
        <div class="lg:col-span-2">
          <RouterLink :to="`/berita/${featuredNews.slug}`" class="block group">
            <img
              :src="featuredNews.image"
              :alt="featuredNews.title"
              class="rounded-2xl shadow-xl w-full h-[420px] object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </RouterLink>

          <div class="mt-6">
            <p class="text-sm text-gray-400">
              {{ formatDate(featuredNews.created_at) }}
            </p>

            <h2 class="text-3xl md:text-4xl font-bold mt-2 text-gray-900 leading-tight">
              {{ featuredNews.title }}
            </h2>

            <p class="mt-4 text-gray-600 leading-relaxed">
              {{ excerpt(featuredNews.content) }}
            </p>

            <RouterLink
              :to="`/berita/${featuredNews.slug}`"
              class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Baca Selengkapnya →
            </RouterLink>
          </div>
        </div>

        <!-- 📰 SIDE NEWS (kanan) -->
        <div class="space-y-6">
          <div v-for="item in sideNews" :key="item.id" class="flex gap-4 group">
            <RouterLink :to="`/berita/${item.slug}`" class="shrink-0">
              <img :src="item.image" :alt="item.title" class="w-28 h-24 object-cover rounded-lg" />
            </RouterLink>

            <div>
              <p class="text-xs text-gray-400">
                {{ formatDate(item.created_at) }}
              </p>

              <RouterLink
                :to="`/berita/${item.slug}`"
                class="font-semibold text-gray-900 group-hover:text-primary transition line-clamp-2"
              >
                {{ item.title }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
