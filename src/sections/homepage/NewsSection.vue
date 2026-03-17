<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
import Button from '@/components/ui/Button.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { RouterLink } from 'vue-router'
import { formatDate } from '@/utils/formatDate'
import { truncateText } from '@/utils/truncateText'

import { useNews } from '@/composables/useNews'

const { news, loading } = useNews()
</script>

<template>
  <section v-reveal class="bg-gray-50 py-28">
    <Container>
      <!-- Header -->

      <div class="text-center mb-20 max-w-2xl mx-auto">
        <SectionTitle normal="Berita &" accent="Kegiatan" />

        <p class="mt-4 text-gray-500 leading-relaxed">
          Ikuti berbagai kegiatan dan perkembangan terbaru dari Madrasah Tsanawiyah Yanuri Annamira.
        </p>
      </div>

      <!-- Loading -->

      <div v-if="loading" class="text-center text-gray-500">Memuat berita...</div>

      <!-- Grid -->

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article v-for="articleItem in news" :key="articleItem.id" class="news-card group">
          <RouterLink :to="`/berita/${articleItem.slug}`">
            <!-- Image -->

            <div class="relative overflow-hidden">
              <img
                :src="articleItem.image || '/images/placeholder.webp'"
                :alt="articleItem.title"
                class="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              <!-- Overlay -->

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"
              ></div>

              <!-- Date -->

              <div
                class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-gray-700"
              >
                {{ formatDate(articleItem.created_at) }}
              </div>
            </div>

            <!-- Content -->

            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                {{ articleItem.title }}
              </h3>

              <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                {{ truncateText(articleItem.content) }}
              </p>
            </div>
          </RouterLink>
        </article>
      </div>

      <!-- CTA -->

      <div class="text-center mt-16">
        <RouterLink to="/berita">
          <Button variant="outline"> Lihat Semua Berita </Button>
        </RouterLink>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.news-card {
  border-radius: 16px;
  overflow: hidden;
  background: white;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.08);
}
</style>
