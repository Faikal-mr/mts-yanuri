<script setup>
import Container from '@/components/ui/Container.vue'
import { RouterLink } from 'vue-router'

const hero = {
  title: 'Berita Sekolah',
  description:
    'Ikuti berbagai kegiatan, prestasi, dan perkembangan terbaru dari Madrasah Tsanawiyah Yanuri Annamira.',
  image: '/images/news-hero.webp',
}
</script>

<template>
  <section v-reveal class="relative py-40 overflow-hidden text-white">
    <!-- Background -->

    <div class="absolute inset-0">
      <img :src="hero.image" class="w-full h-full object-cover" />

      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
    </div>

    <Container class="relative z-10">
      <div class="max-w-2xl">
        <!-- Breadcrumb -->

        <div class="text-sm text-gray-300 mb-6 flex gap-2">
          <RouterLink to="/" class="hover:text-white"> Beranda </RouterLink>

          <span>/</span>

          <span class="text-white"> Berita </span>
        </div>

        <!-- Title -->

        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          {{ hero.title }}
        </h1>

        <!-- Description -->

        <p class="mt-6 text-gray-200 text-lg leading-relaxed">
          {{ hero.description }}
        </p>
      </div>
    </Container>
  </section>
</template>
