<script setup lang="ts">
import { computed } from 'vue'
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'
import { useNewsPagination } from '@/composables/useNewsPagination'

const { news, loading, page, total, perPage } = useNewsPagination()

const totalPages = computed(() => Math.ceil(total.value / perPage))

// 🔥 pagination max 5
const visiblePages = computed(() => {
  const max = 5
  const start = Math.floor((page.value - 1) / max) * max + 1
  const end = Math.min(start + max - 1, totalPages.value)

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

// 🔥 next & prev
const nextPage = () => {
  if (page.value < totalPages.value) page.value++
}

const prevPage = () => {
  if (page.value > 1) page.value--
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
<template>
  <section v-reveal class="py-28 bg-gray-50">
    <Container>
      <!-- Loading -->

      <div v-if="loading" class="text-center text-gray-500 py-20">Memuat berita...</div>

      <!-- Grid -->

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article v-for="article in news" :key="article.id" class="news-card group">
          <RouterLink :to="`/berita/${article.slug}`" class="block">
            <!-- Image -->

            <div class="relative overflow-hidden rounded-xl">
              <img
                :src="article.image || '/images/placeholder.webp'"
                :alt="article.title"
                class="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <!-- Content -->

            <div class="mt-4">
              <p class="text-sm text-gray-400">
                {{ formatDate(article.published_at) }}
              </p>

              <h3
                class="font-semibold text-lg mt-1 text-gray-900 group-hover:text-primary transition"
              >
                {{ article.title }}
              </h3>
            </div>
          </RouterLink>
        </article>
      </div>

      <!-- Pagination -->

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-16">
        <!-- Prev -->
        <button @click="prevPage" :disabled="page === 1" class="pagination-btn">←</button>

        <!-- Numbers (max 5) -->
        <button
          v-for="p in visiblePages"
          :key="p"
          @click="page = p"
          class="pagination-btn"
          :class="p === page ? 'active' : ''"
        >
          {{ p }}
        </button>

        <!-- Next -->
        <button @click="nextPage" :disabled="page === totalPages" class="pagination-btn">→</button>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.news-card {
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.news-card:hover {
  transform: translateY(-10px);
}

/* pagination */

.pagination-btn {
  padding: 8px 14px;
  border-radius: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  transition: all 0.25s ease;
}

.pagination-btn:hover {
  background: #f3f4f6;
}

.pagination-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}
</style>
